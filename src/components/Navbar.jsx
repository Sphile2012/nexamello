import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Hosting", href: "#hosting" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-space font-bold text-xl text-foreground tracking-tight">
              NexaWeb Tech
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/27823562239" target="_blank" rel="noopener noreferrer"
              className="text-sm font-inter font-medium text-[#25D366] border border-[#25D366]/30 rounded-full px-4 py-2 hover:bg-[#25D366]/10 transition-colors"
            >
              💬 WhatsApp
            </a>
            <Button
              onClick={() => scrollTo("#contact")}
              className="font-inter font-semibold rounded-full px-6 shadow-md shadow-primary/20"
            >
              Get Free Quote
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-inter font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => scrollTo("#contact")}
                  className="w-full font-inter font-semibold rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}