import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Zap, CheckCircle2, TrendingUp, Users, Smartphone } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-inter font-semibold mb-6"
        >
          <Globe className="w-4 h-4" />
          Serving South Africa &amp; Clients Worldwide
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight mb-6"
        >
          Your Business Deserves
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-300 to-primary bg-clip-text text-transparent">
            To Be Found Online
          </span>
        </motion.h1>

        {/* Compelling advertising message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-lg sm:text-xl font-inter text-muted-foreground leading-relaxed mb-4">
            Right now, your potential customers are searching Google for exactly what you offer.
            <strong className="text-foreground"> Don't let them find your competitor instead.</strong>
          </p>
          <p className="text-base sm:text-lg font-inter text-muted-foreground leading-relaxed">
            For just <strong className="text-primary text-xl">R500</strong>, Nexa Web Solutions puts your business on the map —
            a stunning, mobile-friendly website delivered in <strong className="text-foreground">1–3 days</strong>.
            No tech skills needed. No stress. <strong className="text-foreground">We handle everything.</strong>
          </p>
        </motion.div>

        {/* Key benefits — scannable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8"
        >
          {[
            { icon: Zap, text: "Live in 1–3 Days", color: "text-primary" },
            { icon: Smartphone, text: "Mobile-First Design", color: "text-blue-400" },
            { icon: TrendingUp, text: "Built to Get Clients", color: "text-green-400" },
            { icon: Users, text: "SA & Worldwide", color: "text-yellow-400" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.07 }}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-card/50 border border-border/40"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-xs font-inter font-semibold text-foreground text-center leading-tight">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* What you get — checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-lg mx-auto mb-8 p-5 rounded-2xl bg-card/60 border border-primary/20"
        >
          <p className="text-sm font-inter font-bold text-primary uppercase tracking-wider mb-3">What you get for R500</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {[
              "Professional 1-page website",
              "Mobile & desktop ready",
              "Fast loading speed",
              "WhatsApp contact button",
              "Your branding & colours",
              "Delivered in 1–3 days",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm font-inter text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%20want%20the%20R500%20website%20%F0%9F%91%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white font-inter font-bold text-base transition-all hover:scale-105 shadow-xl shadow-[#25D366]/30"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            WhatsApp Us — Start for R500
          </a>
          <button
            onClick={() => scrollTo("#hosting")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border/60 text-foreground font-inter font-semibold text-base hover:bg-secondary/50 hover:border-primary/40 transition-all"
          >
            See All Packages
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          {[
            { icon: Star, text: "5-Star Service", color: "text-yellow-400" },
            { icon: Zap, text: "Fast Turnaround", color: "text-primary" },
            { icon: Globe, text: "Worldwide Clients", color: "text-green-400" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-sm font-inter text-muted-foreground">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Countries served */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs font-inter text-muted-foreground/50 mr-1">Serving:</span>
          {["🇿🇦 South Africa", "🇬🇧 UK", "🇺🇸 USA", "🇦🇺 Australia", "🌍 &amp; More"].map((c) => (
            <span key={c} className="text-xs font-inter text-muted-foreground/70 px-2.5 py-1 rounded-full bg-card/40 border border-border/30"
              dangerouslySetInnerHTML={{ __html: c }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
