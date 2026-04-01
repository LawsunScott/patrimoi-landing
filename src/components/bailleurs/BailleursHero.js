import React from "react";
import { motion } from "framer-motion";
import { Droplets, Zap, Flame, DoorOpen, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pictoItems = [
  { icon: Droplets, label: "Plomberie", color: "#007AFF" },
  { icon: Zap, label: "Électricité", color: "#FF9500" },
  { icon: Flame, label: "Chauffage", color: "#FF3B30" },
  { icon: DoorOpen, label: "Fenêtre", color: "#34C759" },
];

export default function BailleursHero({ onDemoClick }) {
  return (
    <section
      className="patrimoi-hero-bg patrimoi-mesh-hero relative min-h-screen flex items-center pt-20"
      data-testid="bailleurs-hero-section"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#007AFF]/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#34C759]/[0.03] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-start">
            <motion.div
              variants={fadeInUp} custom={0}
              className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
              data-testid="bailleurs-hero-badge"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#007AFF]">
                Bailleurs sociaux
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp} custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="bailleurs-hero-title"
            >
              Vos locataires signalent en 30 secondes.{" "}
              <span className="text-[#007AFF]">Même sans parler français.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp} custom={2}
              className="mt-6 text-base md:text-lg leading-relaxed text-slate-500 max-w-xl"
              data-testid="bailleurs-hero-subtitle"
            >
              La première solution de signalement par QR Code avec pictogrammes universels.
              Conçu pour le logement social.
            </motion.p>

            <motion.div variants={fadeInUp} custom={3} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onDemoClick}
                className="bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full px-8 py-3 text-base font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all h-auto"
                data-testid="bailleurs-hero-cta-demo"
              >
                Demander une démo
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("bailleurs-solution")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white/80 hover:bg-white text-slate-900 border border-slate-200 rounded-full px-8 py-3 text-base font-medium backdrop-blur-sm shadow-sm hover:shadow-md transition-all h-auto"
                data-testid="bailleurs-hero-cta-how"
              >
                Voir comment ça marche
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Pictogram phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
            data-testid="bailleurs-hero-mockup"
          >
            <div className="patrimoi-phone-mockup w-[290px] h-[580px] p-3 patrimoi-float">
              <div className="w-full h-full rounded-[2rem] bg-white overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-400">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3.5 h-2 rounded-sm bg-slate-300" />
                    <div className="w-1.5 h-2 rounded-sm bg-slate-300" />
                  </div>
                </div>
                {/* App content */}
                <div className="flex-1 px-5 py-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-[#007AFF] flex items-center justify-center">
                      <QrCode className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Patrimoi</span>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3.5 mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Résidence</p>
                    <p className="text-sm font-semibold text-slate-900">Les Lilas — Bât. C</p>
                    <p className="text-[11px] text-slate-500">Logement 304</p>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Quel est le problème ?
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 flex-1">
                    {pictoItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 p-3 hover:border-[#007AFF]/30 transition-colors cursor-pointer"
                        style={{ background: `${item.color}08` }}
                      >
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                          style={{ background: `${item.color}15` }}
                        >
                          <item.icon className="w-6 h-6" style={{ color: item.color }} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-600">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="text-[9px] text-slate-300">FR</span>
                    <span className="text-[9px] text-slate-300">·</span>
                    <span className="text-[9px] text-slate-300">AR</span>
                    <span className="text-[9px] text-slate-300">·</span>
                    <span className="text-[9px] text-slate-300">TR</span>
                    <span className="text-[9px] text-slate-300">·</span>
                    <span className="text-[9px] text-slate-300">EN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
