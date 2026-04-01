import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const plans = [
  {
    name: "Pilote",
    price: "0€",
    period: "pendant 30 jours",
    desc: "Testez Patrimoi sur votre parc. Jusqu'à 30 lots pendant 1 mois.",
    features: [
      "Jusqu'à 30 lots",
      "QR Codes illimités",
      "Inbox centralisée",
      "Exports PDF horodatés",
      "Support email",
    ],
    cta: "Démarrer le pilote",
    highlighted: false,
    ctaStyle: "outline",
  },
  {
    name: "Pro",
    price: "2€",
    period: "/ lot / mois",
    desc: "La solution complète pour les gestionnaires exigeants.",
    features: [
      "Lots illimités",
      "QR Codes illimités",
      "Exports PDF horodatés",
      "Inbox centralisée",
      "Espace propriétaire bailleur",
      "Tableau de bord analytics",
      "Support prioritaire",
    ],
    cta: "Démarrer un pilote",
    highlighted: true,
    ctaStyle: "primary",
  },
  {
    name: "Business",
    price: "Sur devis",
    period: "",
    desc: "Marque blanche, multi-agences, intégration à votre ERP.",
    features: [
      "Tout le plan Pro",
      "Marque blanche complète",
      "Multi-agences",
      "Intégration API / Webhook",
      "Account manager dédié",
      "SLA garanti",
    ],
    cta: "Contacter l'équipe",
    highlighted: false,
    ctaStyle: "dark",
  },
];

export default function PricingSection({ onDemoClick }) {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4"
          >
            Tarifs
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="pricing-title"
          >
            Simple, transparent, sans surprise
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-3xl p-8 flex flex-col transition-all ${
                plan.highlighted
                  ? "bg-slate-900 text-white shadow-2xl scale-[1.02] md:scale-105 border border-slate-800 ring-1 ring-white/10"
                  : "glass-card border-slate-100 hover:shadow-lg"
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[#007AFF] px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className={`text-sm font-semibold mb-4 ${plan.highlighted ? "text-blue-400" : "text-slate-400"}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl md:text-5xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlighted ? "text-slate-400" : "text-slate-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-3 text-sm ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-[#007AFF]/20" : "bg-[#34C759]/10"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-[#007AFF]" : "text-[#34C759]"}`} strokeWidth={2.5} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? "text-slate-200" : "text-slate-600"}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={onDemoClick}
                className={`w-full rounded-full py-3 h-auto text-sm font-medium transition-all ${
                  plan.ctaStyle === "primary"
                    ? "bg-[#007AFF] hover:bg-[#0062cc] text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                    : plan.ctaStyle === "dark"
                    ? "bg-slate-900 hover:bg-slate-800 text-white"
                    : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm"
                }`}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
