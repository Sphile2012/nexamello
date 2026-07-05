import { useState, useEffect } from "react";
import { Menu, X, Globe, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["services", "hosting", "workflow", "addons", "value", "faq", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#hosting" },
    { label: "Process", href: "#workflow" },
    { label: "Add-Ons", href: "#addons" },
    { label: "Why Us", href: "#value" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
      : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105 border border-cyan-400/30">
              <span className="text-white font-bold text-xs">NW</span>
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-left">
              <span className="font-sans font-bold text-[15px] sm:text-[17px] text-foreground tracking-tight leading-none block">
                Nexa Web
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans text-cyan-400 leading-none block tracking-wide">
                Tech Solutions
              </span>
            </div>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-2 text-sm font-dm font-medium rounded transition-all duration-200 ${isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-2.5"
          >
            <a
              href="https://wa.me/27823562239"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-dm font-semibold text-[#25D366] border border-[#25D366]/25 rounded px-4 py-2 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              WhatsApp
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-1.5 text-sm font-dm font-medium bg-primary text-primary-foreground rounded px-5 py-2 hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200"
            >
              <Zap className="w-3.5 h-3.5" />
              Free Quote
            </button>
          </motion.div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded bg-secondary text-foreground hover:bg-secondary/80 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(link.href)}
                    className={`block w-full text-left px-4 min-h-[44px] flex items-center text-sm font-dm font-medium rounded transition-all duration-200 ${isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <div className="pt-3 grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/27823562239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 min-h-[44px] rounded bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-dm font-semibold text-sm transition-all duration-300 hover:bg-[#25D366]/20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  WhatsApp
                </a>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="flex items-center justify-center gap-1.5 min-h-[44px] rounded bg-primary text-primary-foreground font-dm font-medium text-sm transition-all duration-300 hover:bg-primary/90"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
