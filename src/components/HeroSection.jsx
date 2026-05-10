import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Smartphone, Globe, Code2, Star, CheckCircle } from "lucide-react";

const countries = [
  { flag: "🇿🇦", name: "South Africa" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🌍", name: "& More" },
];

const stats = [
  { value: "1–3", label: "Day Delivery", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { value: "100%", label: "Mobile Ready", icon: Smartphone, color: "text-green-400", bg: "bg-green-400/10" },
  { value: "SSL", label: "Secure", icon: Shield, color: "text-blue-400", bg: "bg-blue-400/10" },
  { value: "Global", label: "Reach", icon: Globe, color: "text-primary", bg: "bg-primary/10" },
];

export default function HeroSection({ heroImage }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
      }} />

      {/* Orbs */}
      <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/6 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">

        {/* Top badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            <span className="text-[10px] sm:text-xs font-inter font-semibold text-primary uppercase tracking-wider">Serving Clients Worldwide</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />)}
            <span className="text-[10px] sm:text-xs font-inter font-semibold text-yellow-400 ml-1">5-Star Rated</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-space font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[1.05] tracking-tighter mb-5 sm:mb-6"
        >
          Professional Websites
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            For Any Business, Anywhere
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-inter text-muted-foreground leading-relaxed mb-8 sm:mb-10"
        >
          <strong className="text-foreground">Nexa Web Solutions</strong> builds fast, modern, mobile-friendly websites for businesses across{" "}
          <span className="text-foreground font-semibold">South Africa and worldwide</span>.{" "}
          Delivered in <span className="text-foreground font-semibold">1–3 days</span> — from just{" "}
          <span className="text-primary font-bold">R500</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-5 sm:mb-6 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-inter font-bold text-base shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#hosting")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border/60 text-foreground font-inter font-semibold text-base hover:bg-secondary/60 hover:border-primary/40 transition-all duration-300"
          >
            <Code2 className="w-4 h-4 text-primary" />
            View Packages
          </button>
        </motion.div>

        {/* WhatsApp link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%27d%20like%20a%20free%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-inter text-[#25D366] hover:text-[#25D366]/80 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Chat on WhatsApp — we reply fast
          </a>
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-inter text-muted-foreground/50 uppercase tracking-widest mb-3">We serve clients in</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {countries.map((c) => (
              <span key={c.name} className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/50 border border-border/40 text-xs font-inter text-muted-foreground hover:border-primary/30 transition-colors">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl ${s.bg} border border-border/30 hover:border-primary/30 transition-all`}
            >
              <s.icon className={`w-4 h-4 ${s.color}`} />
              <span className="font-space font-bold text-lg sm:text-xl text-foreground">{s.value}</span>
              <span className="text-[10px] sm:text-[11px] font-inter text-muted-foreground text-center">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-inter text-muted-foreground/40 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-5 h-8 rounded-full border border-border/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
