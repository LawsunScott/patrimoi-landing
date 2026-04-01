import React from "react";
import { motion } from "framer-motion";
import { QrCode, ClipboardList, BarChart3 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  {
    num: "1",
    icon: QrCode,
    title: "Le locataire scanne",
    desc: "QR Code dans le logement. Il tape sur l'icône du problème (robinet, chauffage, fenêtre). Pas besoin de lire ou d'écrire.",
    color: "#007AFF",
  },
  {
    num: "2",
    icon: ClipboardList,
    title: "Le gestionnaire traite",
    desc: "Ticket structuré avec photo et localisation. Dispatch automatique vers le bon technicien.",
    color: "#34C759",
  },
  {
    num: "3",
    icon: BarChart3,
    title: "La direction pilote",
    desc: "KPIs temps réel : taux de traitement, délais, incidents par résidence. Rapports automatiques pour le CA.",
    color: "#AF52DE",
  },
];

export default function BailleursSolution() {
  return (
    <section id="bailleurs-solution" className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="bailleurs-solution-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            La solution
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="bailleurs-solution-title"
          >
            Un QR Code dans chaque logement. Des pictogrammes universels.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="crystal-card rounded-3xl p-8 relative"
              data-testid={`bailleurs-step-${i}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: step.color }}
                >
                  {step.num}
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${step.color}10` }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                </div>
              </div>
              <h3
                className="text-xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
