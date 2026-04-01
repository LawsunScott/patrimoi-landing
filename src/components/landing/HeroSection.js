import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, TicketCheck, Building2, Clock3, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection({ onDemoClick }) {
  return (
    <section
      className="patrimoi-hero-bg patrimoi-mesh-hero relative min-h-screen flex items-center pt-20"
      data-testid="hero-section"
    >
      {/* Subtle decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#007AFF]/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#34C759]/[0.03] blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
              data-testid="hero-badge"
            >
              <Check className="w-3.5 h-3.5 text-[#34C759]" strokeWidth={2.5} />
              <span className="text-xs font-semibold text-slate-500">
                Pilote gratuit 30 jours — sans engagement
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid="hero-title"
            >
              Divisez par{" "}
              <span className="text-[#007AFF]">4</span>{" "}
              le temps de gestion de vos incidents.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mt-6 text-base md:text-lg leading-relaxed text-slate-500 max-w-xl"
              data-testid="hero-subtitle"
            >
              La première solution de ticketing via QR Code sans friction pour vos
              locataires. Conçu pour les administrateurs de biens et agences de gestion locative.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onDemoClick}
                className="bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full px-8 py-3 text-base font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all h-auto"
                data-testid="hero-cta-pilot"
              >
                Démarrer un pilote
              </Button>
              <Button
                variant="outline"
                onClick={onDemoClick}
                className="bg-white/80 hover:bg-white text-slate-900 border border-slate-200 rounded-full px-8 py-3 text-base font-medium backdrop-blur-sm shadow-sm hover:shadow-md transition-all h-auto"
                data-testid="hero-cta-demo"
              >
                Voir la démo
              </Button>
            </motion.div>

            {/* Social metrics */}
            <motion.div
              variants={fadeInUp}
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
              data-testid="hero-metrics"
            >
              <span className="text-xs text-slate-400">Signalement en 30 sec</span>
              <span className="text-slate-200">·</span>
              <span className="text-xs text-slate-400">Zéro app à installer</span>
              <span className="text-slate-200">·</span>
              <span className="text-xs text-slate-400">PDF horodaté automatique</span>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
            data-testid="hero-dashboard-mockup"
          >
            <div className="relative">
              {/* Browser frame */}
              <div className="rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.10)] border border-slate-200/60">
                {/* Browser bar */}
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md border border-slate-100 px-3 py-1 text-[10px] text-slate-400 font-mono">
                      app.patrimoi.fr/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="bg-white p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-[11px] text-slate-400 font-medium">Bonjour, Sophie</p>
                      <p className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        Agence Immobilière Martin
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#007AFF]">SM</span>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <TicketCheck className="w-3.5 h-3.5 text-[#FF9500]" strokeWidth={2} />
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Ouverts</span>
                      </div>
                      <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>12</p>
                      <p className="text-[9px] text-slate-400">tickets</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-3.5 h-3.5 text-[#007AFF]" strokeWidth={2} />
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Lots</span>
                      </div>
                      <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>87</p>
                      <p className="text-[9px] text-slate-400">actifs</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 border border-slate-100 p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock3 className="w-3.5 h-3.5 text-[#34C759]" strokeWidth={2} />
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Délai</span>
                      </div>
                      <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>2,3j</p>
                      <p className="text-[9px] text-slate-400">résolution</p>
                    </div>
                  </div>

                  {/* Recent tickets */}
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Derniers tickets</p>
                  <div className="space-y-2">
                    {[
                      { title: "Fuite robinet — Apt 12C", status: "En cours", color: "#FF9500" },
                      { title: "Chaudière — Apt 3B", status: "Résolu", color: "#34C759" },
                      { title: "Volet roulant — Apt 7A", status: "Nouveau", color: "#007AFF" },
                    ].map((t) => (
                      <div key={t.title} className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50/60 border border-slate-50">
                        <span className="text-[11px] text-slate-700 font-medium">{t.title}</span>
                        <span
                          className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${t.color}15`, color: t.color }}
                        >
                          {t.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        data-testid="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
