import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QrCode, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar({ onDemoClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Agences", to: "/", type: "route" },
    { label: "Bailleurs sociaux", to: "/bailleurs-sociaux", type: "route" },
    { label: "Tarifs", to: "#pricing", type: "anchor" },
    { label: "Contact", to: "#contact", type: "anchor" },
  ];

  const isActive = (link) => {
    if (link.type === "route") return location.pathname === link.to;
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-[0_1px_20px_rgba(0,0,0,0.04)]" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" data-testid="navbar-logo">
          <div className="w-8 h-8 rounded-xl bg-[#007AFF] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <QrCode className="w-4.5 h-4.5 text-white" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Patrimoi
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link)
                    ? "text-[#007AFF] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#007AFF] after:rounded-full"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.to}
                href={link.to}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                data-testid={`nav-link-${link.to.slice(1)}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            onClick={onDemoClick}
            className="bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
            data-testid="nav-demo-btn"
          >
            Réserver une démo
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-nav border-t border-slate-100"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium transition-colors ${
                    isActive(link) ? "text-[#007AFF]" : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Button
              onClick={() => { onDemoClick(); setMobileOpen(false); }}
              className="bg-[#007AFF] hover:bg-[#0062cc] text-white rounded-full px-6 py-2.5 text-sm font-medium shadow-lg shadow-blue-500/25 w-full"
              data-testid="mobile-demo-btn"
            >
              Réserver une démo
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
