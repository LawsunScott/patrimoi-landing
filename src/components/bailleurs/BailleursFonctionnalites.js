import React from "react";
import { motion } from "framer-motion";
import { Building2, BarChart3, Send, FileSpreadsheet } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  {
    icon: Building2,
    title: "Gestion par résidence",
    desc: "Organisez vos logements par résidence, bâtiment et cage d'escalier. QR Codes dans les logements ET les parties communes.",
    color: "#007AFF",
  },
  {
    icon: BarChart3,
    title: "Dashboard direction",
    desc: "KPIs temps réel pour votre CA : taux de traitement sous 48h, incidents par résidence, performance des techniciens.",
    color: "#34C759",
  },
  {
    icon: Send,
    title: "Dispatch techniciens",
    desc: "Envoyez les détails de l'incident à vos techniciens ou prestataires en un clic. Ils confirment leur intervention via un lien.",
    color: "#FF9500",
  },
  {
    icon: FileSpreadsheet,
    title: "Rapports automatiques",
    desc: "Rapports mensuels générés automatiquement. Exportables en PDF et CSV. Prêts pour votre conseil d'administration.",
    color: "#AF52DE",
  },
];

export default function BailleursFonctionnalites() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="bailleurs-features-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Fonctionnalités
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="bailleurs-features-title"
          >
            Pensé pour les volumes du logement social
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="crystal-card rounded-3xl p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              data-testid={`bailleurs-feature-${i}`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${feat.color}10` }}
              >
                <feat.icon className="w-6 h-6" style={{ color: feat.color }} strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {feat.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
