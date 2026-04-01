import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const rows = [
  { label: "Déclaration d'incident", traditional: "Appel, email, SMS", patrimoi: "Scan QR Code instant" },
  { label: "Temps de traitement", traditional: "48h en moyenne", patrimoi: "Moins de 12h de prise en charge" },
  { label: "Traçabilité", traditional: "Aucune", patrimoi: "PDF horodaté automatique" },
  { label: "Expérience locataire", traditional: "Frustrante", patrimoi: "Sans friction, sans compte" },
  { label: "Centralisation", traditional: "Multi-canaux dispersés", patrimoi: "Inbox unique" },
  { label: "Marque blanche", traditional: false, patrimoi: true },
  { label: "Traçabilité des interventions", traditional: false, patrimoi: true },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="comparison-section">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
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
            Comparaison
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="comparison-title"
          >
            Avant & après Patrimoi
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl crystal-card-strong overflow-hidden"
          data-testid="comparison-table"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-slate-100">
            <div className="p-5 md:p-6" />
            <div className="p-5 md:p-6 text-center border-l border-slate-100">
              <p className="text-sm font-semibold text-slate-400">Gestion Traditionnelle</p>
            </div>
            <div className="p-5 md:p-6 text-center border-l border-slate-100 comparison-patrimoi-col">
              <p className="text-sm font-bold text-[#007AFF]">Patrimoi</p>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-slate-50" : ""}`}
              data-testid={`comparison-row-${i}`}
            >
              <div className="p-4 md:p-5 flex items-center">
                <span className="text-sm font-medium text-slate-700">{row.label}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center border-l border-slate-50">
                {typeof row.traditional === "boolean" ? (
                  row.traditional ? (
                    <Check className="w-5 h-5 text-slate-400" />
                  ) : (
                    <X className="w-5 h-5 text-slate-300" />
                  )
                ) : (
                  <span className="text-sm text-slate-400 text-center">{row.traditional}</span>
                )}
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center border-l border-slate-50 comparison-patrimoi-col">
                {typeof row.patrimoi === "boolean" ? (
                  row.patrimoi ? (
                    <div className="w-6 h-6 rounded-full bg-[#34C759]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#34C759]" />
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-slate-300" />
                  )
                ) : (
                  <span className="text-sm font-medium text-slate-900 text-center">{row.patrimoi}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
