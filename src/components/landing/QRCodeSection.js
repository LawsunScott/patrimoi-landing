import React from "react";
import { motion } from "framer-motion";
import { QrCode, Smartphone, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  {
    icon: QrCode,
    title: "Scan",
    desc: "Le locataire scanne le QR Code sur l'équipement.",
    color: "#007AFF",
    num: "1",
  },
  {
    icon: Smartphone,
    title: "Déclare",
    desc: "Un formulaire pré-rempli s'ouvre. Pas d'app, pas de compte.",
    color: "#007AFF",
    num: "2",
  },
  {
    icon: CheckCircle2,
    title: "Traité",
    desc: "Votre gestionnaire assigne, suit et clôture. Tout est tracé automatiquement.",
    color: "#34C759",
    num: "3",
  },
];

export default function QRCodeSection() {
  return (
    <section className="py-24 md:py-32 bg-white patrimoi-mesh-bg relative" data-testid="qr-section">
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
            Comment ça marche
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            data-testid="qr-section-title"
          >
            Vos locataires signalent en 30 secondes
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone Mockup with context */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
            data-testid="phone-mockup"
          >
            <div className="relative">
              {/* Wall / environment context */}
              <div className="absolute -left-16 -top-10 -bottom-10 -right-16 rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-100 hidden lg:block" />

              {/* Sticker on wall */}
              <div className="absolute -left-8 top-1/4 z-10 hidden lg:block">
                <div className="w-28 h-36 rounded-xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 p-3 flex flex-col items-center justify-center transform -rotate-2">
                  <QrCode className="w-14 h-14 text-slate-800 mb-2" strokeWidth={1} />
                  <p className="text-[7px] font-bold text-slate-500 uppercase tracking-wider text-center">Chaudière</p>
                  <p className="text-[6px] text-slate-400 text-center">Scannez pour signaler</p>
                  <div className="mt-1.5 flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-[#007AFF] flex items-center justify-center">
                      <QrCode className="w-2 h-2 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-[5px] font-bold text-slate-400">Patrimoi</span>
                  </div>
                </div>
              </div>

              {/* Scan beam effect */}
              <div className="absolute -left-2 top-1/3 w-24 h-0.5 bg-gradient-to-r from-[#007AFF]/40 to-transparent z-20 hidden lg:block patrimoi-qr-pulse" />

              {/* Phone frame */}
              <div className="patrimoi-phone-mockup w-[280px] h-[560px] p-3 relative z-10">
                <div className="w-full h-full rounded-[2rem] bg-white overflow-hidden flex flex-col">
                  <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3.5 h-2 rounded-sm bg-slate-300" />
                      <div className="w-1.5 h-2 rounded-sm bg-slate-300" />
                    </div>
                  </div>
                  <div className="flex-1 px-5 py-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-6 h-6 rounded-lg bg-[#007AFF] flex items-center justify-center">
                        <QrCode className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-sm font-bold text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Patrimoi</span>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Équipement détecté</p>
                      <p className="text-sm font-semibold text-slate-900">Chaudière — Apt 3B</p>
                      <p className="text-[11px] text-slate-500 mt-1">Réf: CH-2024-0847</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 mb-1">Type d'incident</p>
                        <div className="h-9 rounded-xl bg-slate-50 border border-slate-100 px-3 flex items-center">
                          <span className="text-xs text-slate-600">Fuite d'eau</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 mb-1">Description</p>
                        <div className="h-16 rounded-xl bg-slate-50 border border-slate-100 px-3 pt-2">
                          <span className="text-xs text-slate-600">La chaudière fuit depuis ce matin...</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="w-full h-10 rounded-full bg-[#007AFF] flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <span className="text-xs font-semibold text-white">Envoyer le ticket</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR glow */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl glass-card flex items-center justify-center patrimoi-qr-pulse z-20">
                <QrCode className="w-8 h-8 text-[#007AFF]" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Steps with connection lines */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.15 }}
            className="flex flex-col gap-2"
          >
            {steps.map((step, i) => (
              <React.Fragment key={step.title}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-5"
                  data-testid={`qr-step-${i}`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 relative"
                      style={{ background: `${step.color}12` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={1.5} />
                      <span
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
                        style={{ background: step.color }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="ml-6 w-px h-8 bg-gradient-to-b from-slate-200 to-transparent" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
