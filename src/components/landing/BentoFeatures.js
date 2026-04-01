import React from "react";
import { motion } from "framer-motion";
import { Fingerprint, FileText, Inbox, Palette, Building } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  {
    icon: Fingerprint,
    title: "Zéro Friction",
    desc: "Pas d'app, pas de compte pour le locataire. Un simple scan QR et c'est parti.",
    color: "#007AFF",
    hoverBg: "hover:bg-blue-50/60",
  },
  {
    icon: FileText,
    title: "Traçabilité Légale",
    desc: "Exports PDF horodatés pour chaque intervention. Protégez-vous juridiquement.",
    color: "#34C759",
    hoverBg: "hover:bg-green-50/60",
  },
  {
    icon: Inbox,
    title: "Inbox Centralisée",
    desc: "Fini les emails et les SMS éparpillés. Tout est au même endroit.",
    color: "#FF9500",
    hoverBg: "hover:bg-orange-50/60",
  },
  {
    icon: Palette,
    title: "Marque Blanche",
    desc: "Votre logo partout, pour valoriser votre mandat. L'expérience porte vos couleurs.",
    color: "#AF52DE",
    hoverBg: "hover:bg-purple-50/60",
  },
  {
    icon: Building,
    title: "Espace Propriétaire",
    desc: "Vos bailleurs suivent leurs biens en temps réel. La transparence qui renouvelle les mandats.",
    color: "#007AFF",
    hoverBg: "hover:bg-blue-50/60",
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#F8FAFC] relative" data-testid="features-section">
      {/* Decorative dots pattern */}
      <div className="absolute top-12 right-12 opacity-[0.08] pointer-events-none hidden lg:block">
        <div className="grid grid-cols-5 gap-3">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
            Fonctionnalités
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="features-title"
          >
            Conçu pour le quotidien des gestionnaires
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all ${feat.hoverBg}`}
              data-testid={`feature-card-${i}`}
            >
              {/* Large Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${feat.color}12` }}
              >
                <feat.icon className="w-8 h-8" style={{ color: feat.color }} strokeWidth={1.5} />
              </div>

              <h3
                className="text-xl font-semibold text-slate-900 mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {feat.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feat.desc}
              </p>

              {/* Decorative gradient orb */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-[0.04] group-hover:opacity-[0.10] transition-opacity"
                style={{ background: feat.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
