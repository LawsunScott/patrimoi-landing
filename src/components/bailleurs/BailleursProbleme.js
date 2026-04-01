import React from "react";
import { motion } from "framer-motion";
import { Phone, Globe, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  {
    icon: Phone,
    value: "200+",
    label: "Appels/jour en moyenne",
    desc: "Vos agents passent leur journée au téléphone au lieu de résoudre les problèmes.",
    color: "#FF3B30",
  },
  {
    icon: Globe,
    value: "30%",
    label: "De locataires ne parlent pas français",
    desc: "Les formulaires en ligne classiques ne fonctionnent pas pour eux.",
    color: "#FF9500",
  },
  {
    icon: Clock,
    value: "3 semaines",
    label: "Délai moyen de résolution",
    desc: "Sans traçabilité, les incidents tombent dans l'oubli.",
    color: "#007AFF",
  },
];

export default function BailleursProbleme() {
  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="bailleurs-probleme-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] mb-4">
            Le constat
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="bailleurs-probleme-title"
          >
            Votre centre d'appels est saturé. Vos locataires sont frustrés.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              variants={fadeInUp}
              className="crystal-card rounded-3xl p-8 text-center"
              data-testid={`bailleurs-stat-${i}`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `${stat.color}10` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} strokeWidth={1.5} />
              </div>
              <p
                className="text-4xl font-bold text-slate-900 mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-700 mb-2">{stat.label}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
