import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Zap, Phone, Mail, Clock, Camera, MousePointer, FileCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const classicSteps = [
  { icon: Phone, text: "Appels multiples" },
  { icon: Mail, text: "Emails, SMS, relances" },
  { icon: Clock, text: "Oublis et pertes de trace" },
];

const patrimoiSteps = [
  { icon: Camera, text: "Signalement photo QR" },
  { icon: MousePointer, text: "Validation en 1 clic" },
  { icon: FileCheck, text: "Rapport auto horodaté" },
];

export default function CostOfChaos() {
  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="cost-chaos-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
            Le coût du chaos
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="chaos-title"
          >
            Un incident vous coûte 45 minutes. Avec Patrimoi, 5.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Classic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="crystal-card rounded-3xl p-8 chaos-card-red"
            data-testid="chaos-classic-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF3B30]/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#FF3B30]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Gestion Classique
                </h3>
                <p className="text-2xl font-bold text-[#FF3B30]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  45 min
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {classicSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-slate-500">{step.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <p className="text-xs text-slate-400">Risque de litiges, perte de mandats, stress des équipes</p>
            </div>
          </motion.div>

          {/* Patrimoi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="crystal-card rounded-3xl p-8 chaos-card-green"
            data-testid="chaos-patrimoi-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#34C759]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Gestion Patrimoi
                </h3>
                <p className="text-2xl font-bold text-[#34C759]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  5 min
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {patrimoiSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#34C759]/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-4 h-4 text-[#34C759]" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-slate-700">{step.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#34C759]/10">
              <p className="text-xs text-[#34C759] font-medium">Traçabilité totale, mandats sécurisés, équipes sereines</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
