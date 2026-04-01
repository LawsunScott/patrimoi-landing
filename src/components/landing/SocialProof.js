import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Century 21",
  "Orpi",
  "Laforêt",
  "Guy Hoquet",
  "ERA Immobilier",
  "Stéphane Plaza",
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC]" data-testid="social-proof-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center text-xs font-bold uppercase tracking-widest text-slate-300 mb-10"
        >
          Ils nous font déjà confiance
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          data-testid="social-proof-logos"
        >
          {logos.map((name) => (
            <div
              key={name}
              className="text-lg md:text-xl font-bold text-slate-200 select-none tracking-tight transition-colors hover:text-slate-300"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              data-testid={`logo-${name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
