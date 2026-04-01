import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, QrCode, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function BailleursCTA({ onDemoClick }) {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-white patrimoi-mesh-bg" data-testid="bailleurs-cta-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] crystal-card-strong p-12 md:p-20 text-center"
          >
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#007AFF]/[0.04] blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#34C759]/[0.03] blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                data-testid="bailleurs-cta-title"
              >
                Modernisez la gestion des incidents de votre parc
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-base md:text-lg text-slate-500 max-w-xl mx-auto"
              >
                Démo personnalisée de 30 minutes. On vous montre Patrimoi avec vos données.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10">
                <Button
                  onClick={onDemoClick}
                  className="bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full px-10 py-3.5 text-base font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all h-auto"
                  data-testid="bailleurs-cta-btn"
                >
                  Réserver une démo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="mt-5 text-xs text-slate-400"
              >
                Démo gratuite · Adapté à votre parc · Sans engagement
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#007AFF] flex items-center justify-center">
                <QrCode className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Patrimoi
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link to="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Agences</Link>
              <Link to="/bailleurs-sociaux" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Bailleurs sociaux</Link>
              <a href="#pricing" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Tarifs</a>
              <a href="#contact" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">Contact</a>
            </div>
            <p className="text-xs text-slate-300">
              &copy; 2025 Patrimoi. Tous droits réservés.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-50 flex flex-col md:flex-row items-center justify-center gap-3" data-testid="rgpd-footer">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-slate-300" strokeWidth={1.5} />
              <span className="text-[11px] text-slate-300">RGPD Compliant</span>
            </div>
            <span className="text-slate-200 hidden md:inline">|</span>
            <span className="text-[11px] text-slate-300">Données hébergées en France (HDS)</span>
            <span className="text-slate-200 hidden md:inline">|</span>
            <span className="text-[11px] text-slate-300">Chiffrement de bout en bout</span>
          </div>
        </div>
      </footer>
    </>
  );
}
