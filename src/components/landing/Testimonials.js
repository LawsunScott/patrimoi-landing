import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const avatarColors = ["#007AFF", "#34C759", "#AF52DE"];

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice, Century 21 Bastille",
    quote: "Patrimoi a transformé notre gestion d'incidents. Nos locataires sont ravis, et nous avons réduit le temps de traitement de 70%. C'est devenu un argument de vente pour nos mandats.",
    network: "Century 21",
  },
  {
    name: "Thomas Leroy",
    role: "Gérant, Orpi Saint-Germain",
    quote: "L'installation a pris 45 minutes pour nos 200 lots. Le ROI a été visible dès le premier mois. Les propriétaires adorent recevoir les rapports d'intervention certifiés.",
    network: "Orpi",
  },
  {
    name: "Claire Dubois",
    role: "Responsable Gestion, Laforêt Lyon",
    quote: "Fini les emails perdus et les appels non tracés. Tout est centralisé, horodaté et exportable. Notre équipe juridique est ravie de la traçabilité offerte.",
    network: "Laforêt",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative" data-testid="testimonials-section">
      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-green-100/30 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Témoignages
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="testimonials-title"
          >
            Ce qu'en disent nos clients
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-lg transition-shadow relative"
              data-testid={`testimonial-card-${i}`}
            >
              {/* Large decorative quote mark */}
              <div className="absolute top-6 right-6 text-6xl leading-none text-slate-100 font-serif select-none" style={{ fontFamily: "Georgia, serif" }}>
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-[#FF9500] fill-[#FF9500]" />
                ))}
              </div>

              {/* Quote */}
              <div className="flex-1 mb-6 relative z-10">
                <p className="text-sm text-slate-600 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author with avatar */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                {/* Avatar illustration */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${avatarColors[i]}15` }}
                >
                  {/* Person silhouette */}
                  <svg
                    width="22" height="22" viewBox="0 0 24 24" fill="none"
                    style={{ color: avatarColors[i] }}
                  >
                    <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.8" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="currentColor" opacity="0.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-xs font-bold text-slate-200 tracking-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {t.network}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
