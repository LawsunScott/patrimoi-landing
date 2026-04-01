import React from "react";
import { motion } from "framer-motion";
import { Megaphone, QrCode, TrendingUp, Award } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const arguments_ = [
  {
    icon: QrCode,
    title: "Un outil de prospection",
    desc: "En rendez-vous bailleur, montrez le suivi digital de chaque bien — QR Code, historique d'interventions, rapports PDF. Un argument décisif face à la concurrence.",
    color: "#60A5FA",
  },
  {
    icon: TrendingUp,
    title: "Signez plus de mandats",
    desc: "Les propriétaires veulent de la transparence. Le \"Carnet de Santé Numérique\" de leur bien devient un avantage concurrentiel qui fait la différence lors de la mise en gestion.",
    color: "#34D399",
  },
  {
    icon: Award,
    title: "Valorisez votre image",
    desc: "Positionnez votre agence comme innovante et technologique. Les locataires recommandent, les propriétaires restent. Votre taux de rétention de mandat augmente naturellement.",
    color: "#C084FC",
  },
];

export default function MarketingArgument() {
  return (
    <section className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden" data-testid="marketing-section">
      {/* Decorative blurred orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#007AFF]/[0.08] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#34C759]/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 opacity-[0.04] pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
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
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            Argument Marketing
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="marketing-title"
          >
            Gagnez des mandats grâce à Patrimoi
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            Patrimoi ne se limite pas à la gestion d'incidents. C'est un argument commercial
            qui vous aide à signer et retenir vos mandats de gestion.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {arguments_.map((arg, i) => (
            <motion.div
              key={arg.title}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl p-8 transition-all bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.10] hover:border-white/[0.12]"
              data-testid={`marketing-card-${i}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${arg.color}20` }}
              >
                <arg.icon className="w-7 h-7" style={{ color: arg.color }} strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {arg.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{arg.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Accent card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left bg-white/[0.06] backdrop-blur-sm border border-white/[0.08]"
          data-testid="marketing-accent"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Le Carnet de Santé Numérique du bien
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Chaque propriétaire reçoit un historique complet et visuel de toutes les interventions réalisées sur son bien.
              Un gage de transparence qui renforce la confiance et fidélise vos clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
