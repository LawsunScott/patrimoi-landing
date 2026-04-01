import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Clock, Euro, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ROICalculator() {
  const [lots, setLots] = useState([100]);

  const stats = useMemo(() => {
    const numLots = lots[0];
    // 3 incidents/lot/an, 40 min saved per incident, 35€/h cost
    const hoursSaved = Math.round((numLots * 3 * 40) / 60 / 12);
    const eurosSaved = Math.round(hoursSaved * 35);
    const costPatrimoi = numLots * 2;
    const roi = costPatrimoi > 0 ? (eurosSaved / costPatrimoi).toFixed(1) : "0.0";
    return { hoursSaved, eurosSaved, roi, costPatrimoi };
  }, [lots]);

  return (
    <section className="py-24 md:py-32 patrimoi-mesh-bg bg-white" data-testid="roi-calculator-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Calculateur de ROI
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="roi-title"
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
          <div className="crystal-card-strong rounded-3xl p-8 md:p-10 roi-card-glow" data-testid="roi-slider-card">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-slate-500">Nombre de lots gérés</span>
              <span
                className="text-2xl font-bold text-[#007AFF]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="roi-lots-value"
              >
                {lots[0]} lots
              </span>
            </div>

            <div className="patrimoi-slider mb-2">
              <Slider
                value={lots}
                onValueChange={setLots}
                min={10}
                max={500}
                step={10}
                className="w-full"
                data-testid="roi-slider"
              />
            </div>
            <div className="flex justify-between text-xs text-slate-300 mt-1">
              <span>10</span>
              <span>250</span>
              <span>500</span>
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
              data-testid="roi-hours"
            >
              <div className="w-10 h-10 rounded-xl bg-[#007AFF]/10 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-bold roi-value" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stats.hoursSaved}h
              </p>
              <p className="text-xs text-slate-400 mt-1">gagnées / mois</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="crystal-card rounded-2xl p-6 text-center"
              data-testid="roi-euros"
            >
              <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 flex items-center justify-center mx-auto mb-3">
                <Euro className="w-5 h-5 text-[#34C759]" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-bold text-[#34C759]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stats.eurosSaved}€
              </p>
              <p className="text-xs text-slate-400 mt-1">économisés / mois</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="crystal-card rounded-2xl p-6 text-center"
              data-testid="roi-net"
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

          <p className="text-center text-xs text-slate-300 mt-6">
            Basé sur : 3 incidents/lot/an, 40 min gagnées/incident, coût gestionnaire 35€/h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
