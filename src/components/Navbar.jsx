import { useState, useEffect } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home",      href: "/" },
    { label: "Services",  href: "/services" },
    { label: "About",     href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact",   href: "/contact" },
  ];

  const goTo = (href) => {
    setIsOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookNow = () => {
    setIsOpen(false);
    navigate("/contact#booking");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => goTo("/")}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xs tracking-tight">NW</span>
            </div>
            <div className="text-left">
              <span className="font-sans font-bold text-[15px] sm:text-[17px] text-white tracking-tight leading-none block">
                Nexa Web
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans text-blue-400 leading-none block tracking-wide">
                Tech Solutions
              </span>
            </div>
          </motion.button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => goTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full"
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
            className="hidden md:flex items-center gap-2"
          >
            <a
              href="https://wa.me/27823562239"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#25D366] border border-[#25D366]/25 rounded-lg px-4 py-2 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              WhatsApp
            </a>
            <button
              onClick={bookNow}
              className="flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg px-5 py-2.5 hover:from-blue-400 hover:to-purple-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
            >
              <CalendarDays className="w-4 h-4" />
              Book Now
            </button>
          </motion.div>

          {/* Mobile: Book Now + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={bookNow}
              className="flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg px-3 py-2 shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              Book Now
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => goTo(link.href)}
                    className={`block w-full text-left px-4 min-h-[48px] flex items-center text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/65 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              {/* Mobile WhatsApp */}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="https://wa.me/27823562239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 min-h-[48px] rounded-lg bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-semibold text-sm transition-all duration-200 hover:bg-[#25D366]/20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
