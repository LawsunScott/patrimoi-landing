import React from "react";
import { motion } from "framer-motion";
import { Droplets, Zap, Flame, DoorOpen, KeyRound, ArrowUpDown, Building2, HelpCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const pictograms = [
  { icon: Droplets, label: "Plomberie", color: "#007AFF", bg: "#DBEAFE" },
  { icon: Zap, label: "Électricité", color: "#F59E0B", bg: "#FEF3C7" },
  { icon: Flame, label: "Chauffage", color: "#EF4444", bg: "#FEE2E2" },
  { icon: DoorOpen, label: "Fenêtre / Menuiserie", color: "#10B981", bg: "#D1FAE5" },
  { icon: KeyRound, label: "Serrurerie", color: "#8B5CF6", bg: "#EDE9FE" },
  { icon: ArrowUpDown, label: "Ascenseur", color: "#6366F1", bg: "#E0E7FF" },
  { icon: Building2, label: "Parties communes", color: "#0EA5E9", bg: "#E0F2FE" },
  { icon: HelpCircle, label: "Autre", color: "#64748B", bg: "#F1F5F9" },
];

export default function BailleursPictogrammes() {
  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="bailleurs-pictogrammes-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Accessibilité
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="bailleurs-pictogrammes-title"
          >
            Compris par tous. Sans exception.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto"
        >
          {pictograms.map((p, i) => (
            <motion.div
              key={p.label}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="crystal-card rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer"
              data-testid={`bailleurs-picto-${i}`}
            >
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-4"
                style={{ background: p.bg }}
              >
                <p.icon className="w-8 h-8" style={{ color: p.color }} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-semibold text-slate-700">{p.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center text-sm text-slate-400 mt-10 max-w-2xl mx-auto leading-relaxed"
          data-testid="bailleurs-picto-desc"
        >
          Le locataire tape sur l'icône. Pas de menu déroulant, pas de texte à lire.
          Disponible en français, arabe, turc et anglais.
        </motion.p>
      </div>
    </section>
  );
}
