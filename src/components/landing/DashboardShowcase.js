import React from "react";
import { motion } from "framer-motion";
import { Clock, Send, FileCheck, TicketCheck, BarChart3, Building2, Users, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const annotations = [
  { label: "Timeline horodatée", icon: Clock, x: "left-[2%]", y: "top-[20%]", color: "#007AFF", arrowDir: "right" },
  { label: "Dispatch artisan en 1 clic", icon: Send, x: "right-[2%]", y: "top-[30%]", color: "#34C759", arrowDir: "left" },
  { label: "Rapport PDF auto", icon: FileCheck, x: "right-[2%]", y: "bottom-[25%]", color: "#FF9500", arrowDir: "left" },
];

export default function DashboardShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden" data-testid="dashboard-showcase-section">
      {/* Decorative dots */}
      <div className="absolute bottom-12 left-12 opacity-[0.06] pointer-events-none hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {[...Array(24)].map((_, i) => (
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
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-[#007AFF] mb-4">
            Le produit
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="dashboard-showcase-title"
          >
            Un dashboard pensé pour l'action
          </motion.h2>
        </motion.div>

        {/* Dashboard with annotations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Annotations - desktop only */}
          <div className="hidden lg:block">
            {annotations.map((ann, i) => (
              <motion.div
                key={ann.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                className={`absolute ${ann.x} ${ann.y} z-20`}
                data-testid={`annotation-${i}`}
              >
                <div className="flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-lg border border-slate-100">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: `${ann.color}15` }}
                  >
                    <ann.icon className="w-3.5 h-3.5" style={{ color: ann.color }} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">{ann.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-200/60 mx-auto max-w-5xl">
            {/* Browser bar */}
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md border border-slate-100 px-3 py-1 text-[10px] text-slate-400 font-mono">
                  app.patrimoi.fr/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-white p-6 md:p-8">
              {/* Top nav */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#007AFF] flex items-center justify-center">
                      <TicketCheck className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Patrimoi</span>
                  </div>
                  <div className="hidden md:flex gap-5">
                    <span className="text-xs font-semibold text-[#007AFF] border-b-2 border-[#007AFF] pb-1">Tickets</span>
                    <span className="text-xs text-slate-400">Lots</span>
                    <span className="text-xs text-slate-400">Rapports</span>
                    <span className="text-xs text-slate-400">Analytics</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-500">SM</span>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: TicketCheck, label: "Tickets ouverts", value: "12", change: "-23%", color: "#FF9500" },
                  { icon: Building2, label: "Lots actifs", value: "87", change: "+5", color: "#007AFF" },
                  { icon: Clock, label: "Délai moyen", value: "2,3j", change: "-40%", color: "#34C759" },
                  { icon: Users, label: "Satisfaction", value: "94%", change: "+12%", color: "#AF52DE" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50/80 border border-slate-100 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                      <span className="text-[9px] font-semibold text-[#34C759] flex items-center gap-0.5">
                        {stat.change} <ArrowUpRight className="w-2.5 h-2.5" />
                      </span>
                    </div>
                    <p className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.value}</p>
                    <p className="text-[10px] text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Ticket list / Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-semibold text-slate-700">Derniers tickets</p>
                    <span className="text-[10px] text-[#007AFF] font-medium">Voir tout</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { title: "Fuite robinet — Apt 12C", status: "En cours", time: "il y a 2h", color: "#FF9500" },
                      { title: "Chaudière — Apt 3B", status: "Résolu", time: "il y a 5h", color: "#34C759" },
                      { title: "Volet roulant — Apt 7A", status: "Nouveau", time: "il y a 1j", color: "#007AFF" },
                      { title: "Interphone — Hall B", status: "Assigné", time: "il y a 1j", color: "#AF52DE" },
                    ].map((t) => (
                      <div key={t.title} className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                          <span className="text-[11px] text-slate-700 font-medium">{t.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] text-slate-300">{t.time}</span>
                          <span
                            className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: `${t.color}12`, color: t.color }}
                          >
                            {t.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini chart */}
                <div className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                    <p className="text-xs font-semibold text-slate-700">Incidents / mois</p>
                  </div>
                  <div className="flex items-end gap-2 h-28">
                    {[40, 65, 55, 80, 45, 70, 35, 50, 30, 25, 20, 18].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-sm transition-all"
                          style={{
                            height: `${h}%`,
                            background: i === 11 ? "#007AFF" : "#E2E8F0",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[8px] text-slate-300">Jan</span>
                    <span className="text-[8px] text-slate-300">Déc</span>
                  </div>
                  <p className="text-[10px] text-[#34C759] font-medium mt-2 flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> -55% d'incidents en 12 mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
