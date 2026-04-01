import React from "react";
import { motion } from "framer-motion";
import { Shield, FileCheck, Clock, Camera, CheckCircle2, QrCode } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function LegalShield() {
  return (
    <section className="py-24 md:py-32 patrimoi-mesh-bg bg-white" data-testid="legal-shield-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#34C759] mb-4">
            Bouclier Juridique
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="legal-title"
          >
            Protégez vos Mandats
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            Chaque ticket génère automatiquement un rapport PDF horodaté. Une preuve légale
            irréfutable en cas de litige locataire/propriétaire sur l'entretien du bien.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* PDF Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
            data-testid="pdf-mockup"
          >
            <div className="relative">
              <div className="pdf-mockup rounded-2xl w-[320px] md:w-[380px] p-8 patrimoi-float">
                {/* PDF Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#007AFF] flex items-center justify-center">
                      <QrCode className="w-3 h-3 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Patrimoi
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-mono">REF: INT-2025-0384</span>
                </div>

                {/* PDF Title */}
                <h4 className="text-sm font-bold text-slate-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Rapport d'Intervention Officiel
                </h4>
                <p className="text-[10px] text-slate-400 mb-5">Généré automatiquement le 12/12/2025 à 14:32:07 CET</p>

                {/* Details */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Bien</span>
                    <span className="text-slate-700 font-medium">12 rue de la Paix, Apt 3B</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Équipement</span>
                    <span className="text-slate-700 font-medium">Chaudière Vaillant ecoTEC</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Type</span>
                    <span className="text-slate-700 font-medium">Fuite d'eau</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">Locataire</span>
                    <span className="text-slate-700 font-medium">M. Dupont</span>
                  </div>
                </div>

                {/* Photo placeholder */}
                <div className="rounded-xl bg-slate-50 border border-slate-100 h-24 flex items-center justify-center mb-5">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Camera className="w-4 h-4" />
                    <span className="text-[10px]">Photos horodatées (3)</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
                    <span className="text-[9px] text-slate-400">12/12 14:32 — Signalement reçu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9500]" />
                    <span className="text-[9px] text-slate-400">12/12 15:10 — Intervention planifiée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
                    <span className="text-[9px] text-slate-400">13/12 09:45 — Résolu et validé</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[8px] text-slate-300 font-mono">SHA-256: 7f3a...b2c1</span>
                </div>
              </div>

              {/* Certified stamp */}
              <div className="absolute -top-4 -right-4 pdf-stamp rounded-xl px-3 py-1.5 bg-white font-bold text-[10px] uppercase tracking-wider shadow-lg">
                Certifié
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.12 }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: Shield,
                title: "Preuve irréfutable",
                desc: "Chaque rapport est horodaté et signé numériquement. Document horodaté utilisable comme élément de preuve en cas de litige.",
                color: "#34C759",
              },
              {
                icon: FileCheck,
                title: "Export PDF automatique",
                desc: "Un rapport complet généré à la clôture de chaque intervention, sans manipulation manuelle.",
                color: "#007AFF",
              },
              {
                icon: Clock,
                title: "Historique complet",
                desc: "Traçabilité de bout en bout : du signalement initial à la résolution finale, tout est documenté.",
                color: "#FF9500",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="flex items-start gap-5"
                data-testid={`legal-feature-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}10` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
