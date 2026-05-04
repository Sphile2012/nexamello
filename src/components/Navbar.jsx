import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#hosting" },
    { label: "Process", href: "#workflow" },
    { label: "Add-Ons", href: "#addons" },
    { label: "Why Us", href: "#value" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-space font-bold text-lg text-foreground tracking-tight leading-none">
                NexaWeb
              </span>
              <span className="block text-[10px] font-inter text-muted-foreground leading-none -mt-0.5">
                Tech Solutions
              </span>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => scrollTo(link.href)}
                className="px-3.5 py-2 text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-3"
          >
            <a
              href="https://wa.me/27823562239"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-inter font-semibold text-[#25D366] border border-[#25D366]/30 rounded-full px-4 py-2 hover:bg-[#25D366]/10 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              WhatsApp
            </a>
            <Button
              onClick={() => scrollTo("#contact")}
              className="font-inter font-semibold rounded-full px-5 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
            >
              Free Quote
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-inter font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="https://wa.me/27823562239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-inter font-semibold text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Chat on WhatsApp
                </a>
                <Button
                  onClick={() => scrollTo("#contact")}
                  className="w-full font-inter font-semibold rounded-xl py-5"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
