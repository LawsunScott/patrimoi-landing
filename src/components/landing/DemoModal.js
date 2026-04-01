import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_URL = "https://formspree.io/f/xjgazgba";

export default function DemoModal({ open, onOpenChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          Nom: form.name,
          "Nom de l'agence": form.company,
          "E-mail professionnel": form.email,
          Message: form.message || "(aucun message)",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      toast.error("Erreur réseau. Veuillez vérifier votre connexion.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", message: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-md rounded-3xl shadow-2xl p-0 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
        data-testid="demo-modal"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8"
            >
              <DialogHeader className="mb-6">
                <DialogTitle
                  className="text-2xl font-bold tracking-tight text-slate-900"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Réserver une démo
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-500 mt-2">
                  Découvrez Patrimoi en 20 minutes. Nous vous recontactons sous 24h.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4" data-testid="demo-form">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Nom *
                  </Label>
                  <Input
                    id="name"
                    name="Nom"
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl border-slate-200 focus:border-[#007AFF] focus:ring-[#007AFF]/20 h-11"
                    data-testid="demo-input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Nom de l'agence *
                  </Label>
                  <Input
                    id="company"
                    name="Nom de l'agence"
                    placeholder="Agence Immobilière XYZ"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="rounded-xl border-slate-200 focus:border-[#007AFF] focus:ring-[#007AFF]/20 h-11"
                    data-testid="demo-input-company"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    E-mail professionnel *
                  </Label>
                  <Input
                    id="email"
                    name="E-mail professionnel"
                    type="email"
                    placeholder="jean@agence.fr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-xl border-slate-200 focus:border-[#007AFF] focus:ring-[#007AFF]/20 h-11"
                    data-testid="demo-input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="Message"
                    placeholder="Parlez-nous de vos besoins..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl border-slate-200 focus:border-[#007AFF] focus:ring-[#007AFF]/20 min-h-[80px] resize-none"
                    data-testid="demo-input-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full py-3 h-auto text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all mt-2 disabled:opacity-60"
                  data-testid="demo-submit-btn"
                >
                  {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 text-center"
              data-testid="demo-success"
            >
              <div className="w-16 h-16 rounded-full bg-[#34C759]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#34C759]" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-900 mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Merci !
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                Votre demande a été transmise. Tim, le fondateur, vous recontacterons sous 24h.
              </p>
              <Button
                onClick={handleClose}
                className="mt-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3 h-auto text-sm font-medium transition-all"
                data-testid="demo-close-btn"
              >
                Fermer
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
