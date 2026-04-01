import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PhoneOff, Euro, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function BailleursROI() {
  const [logements, setLogements] = useState([5000]);

  const stats = useMemo(() => {
    const n = logements[0];
    const appelsEvites = Math.round(n * 0.03);
    const economies = appelsEvites * 8;
    const coutPatrimoi = Math.round(n * 1.5);
    const roi = coutPatrimoi > 0 ? (economies / coutPatrimoi).toFixed(1) : "0.0";
    return { appelsEvites, economies, coutPatrimoi, roi };
  }, [logements]);

  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="bailleurs-roi-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Retour sur investissement
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="bailleurs-roi-title"
          >
            Combien allez-vous économiser ?
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Slider Card */}
          <div className="crystal-card-strong rounded-3xl p-8 md:p-10 roi-card-glow" data-testid="bailleurs-roi-slider-card">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-slate-500">Nombre de logements gérés</span>
              <span
                className="text-2xl font-bold text-[#007AFF]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="bailleurs-roi-value"
              >
                {logements[0].toLocaleString("fr-FR")} logements
              </span>
            </div>

            <div className="patrimoi-slider mb-2">
              <Slider
                value={logements}
                onValueChange={setLogements}
                min={500}
                max={20000}
                step={500}
                className="w-full"
                data-testid="bailleurs-roi-slider"
              />
            </div>
            <div className="flex justify-between text-xs text-slate-300 mt-1">
              <span>500</span>
              <span>10 000</span>
              <span>20 000</span>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="crystal-card rounded-2xl p-6 text-center"
              data-testid="bailleurs-roi-calls"
            >
              <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center mx-auto mb-3">
                <PhoneOff className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-bold roi-value" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stats.appelsEvites}
              </p>
              <p className="text-xs text-slate-400 mt-1">appels évités / mois</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="crystal-card rounded-2xl p-6 text-center"
              data-testid="bailleurs-roi-euros"
            >
              <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 flex items-center justify-center mx-auto mb-3">
                <Euro className="w-5 h-5 text-[#34C759]" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-bold text-[#34C759]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stats.economies.toLocaleString("fr-FR")}€
              </p>
              <p className="text-xs text-slate-400 mt-1">économisés / mois</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="crystal-card rounded-2xl p-6 text-center"
              data-testid="bailleurs-roi-roi"
            >
              <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-bold roi-value" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stats.roi}x
              </p>
              <p className="text-xs text-slate-400 mt-1">retour sur investissement</p>
            </motion.div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 max-w-lg mx-auto leading-relaxed">
            Sans compter : réduction des délais de traitement, amélioration de la satisfaction locataire, conformité réglementaire.
          </p>
          <p className="text-center text-xs text-slate-300 mt-2">
            Basé sur : 3% des logements signalent chaque mois, coût moyen d'un appel traité 8€
          </p>
        </motion.div>
      </div>
    </section>
  );
}
