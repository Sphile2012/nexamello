import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Zap, Clock } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Simple gradient background — no heavy image */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">

        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-sm font-inter font-semibold mb-6"
        >
          <Clock className="w-4 h-4" />
          Limited slots available this month — book now
        </motion.div>

        {/* Main headline — big, bold, immediate */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-4"
        >
          Professional Website
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-300 to-primary bg-clip-text text-transparent">
            From Just R500
          </span>
        </motion.h1>

        {/* Short, punchy subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg font-inter text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Get your business online in <strong className="text-foreground">1–3 days</strong>.
          Mobile-friendly, fast, and built to get you customers —
          in South Africa and worldwide.
        </motion.p>

        {/* Primary CTA — WhatsApp first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%20want%20the%20R500%20website%20%F0%9F%91%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white font-inter font-bold text-base transition-all hover:scale-105 shadow-xl shadow-[#25D366]/30"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            WhatsApp — Get Started Now
          </a>
          <button
            onClick={() => scrollTo("#hosting")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border/60 text-foreground font-inter font-semibold text-base hover:bg-secondary/50 hover:border-primary/40 transition-all"
          >
            View Packages
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Trust signals — quick scan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {[
            { icon: Star, text: "5-Star Rated", color: "text-yellow-400" },
            { icon: Zap, text: "1–3 Day Delivery", color: "text-primary" },
            { icon: Globe, text: "Worldwide Clients", color: "text-green-400" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-sm font-inter text-muted-foreground">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Quick social proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-sm mx-auto p-4 rounded-2xl bg-card/60 border border-border/50"
        >
          <div className="flex gap-1 justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-sm font-inter text-muted-foreground italic">
            "Site looks amazing! Got 3 new clients in the first week."
          </p>
          <p className="text-xs font-inter text-primary font-semibold mt-1.5">
            — Thandi N., Hair Studio, Durban
          </p>
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs font-inter text-muted-foreground/50 mr-1">Serving:</span>
          {["🇿🇦 SA", "🇬🇧 UK", "🇺🇸 USA", "🇦🇺 AUS", "🌍 More"].map((c) => (
            <span key={c} className="text-xs font-inter text-muted-foreground/70 px-2.5 py-1 rounded-full bg-card/40 border border-border/30">
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
