import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Zap, CheckCircle2, TrendingUp, Users, Smartphone } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-jakarta font-semibold mb-8 shadow-sm"
        >
          <Globe className="w-4 h-4" />
          Serving South Africa & Clients Worldwide
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.15] tracking-tight mb-6"
        >
          Your Business Deserves
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            To Be Found Online
          </span>
        </motion.h1>

        {/* Compelling advertising message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg sm:text-xl font-jakarta text-muted-foreground leading-relaxed mb-5">
            Right now, people are searching Google for businesses like yours.
            <strong className="text-foreground"> A sharp website turns those searches into WhatsApp messages and calls.</strong>
          </p>
          <p className="text-base sm:text-lg font-jakarta text-muted-foreground leading-relaxed">
            <strong className="text-primary text-xl">R500</strong> gets you a proper <strong className="text-foreground">4-page</strong> site (not a single landing strip).
            Need the full treatment? <strong className="text-foreground">Full website from R2,500</strong> once-off, plus <strong className="text-foreground">R250/month</strong> hosting.
            Live in <strong className="text-foreground">1–3 days</strong>. No tech skills — <strong className="text-foreground">we handle everything.</strong>
          </p>
        </motion.div>

        {/* Key benefits — scannable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
        >
          {[
            { icon: Zap, text: "Live in 1–3 Days", color: "text-primary" },
            { icon: Smartphone, text: "WhatsApp-Ready", color: "text-blue-500" },
            { icon: TrendingUp, text: "Built for More Leads", color: "text-green-500" },
            { icon: Users, text: "SA & Worldwide", color: "text-amber-500" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.07 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-xs font-jakarta font-semibold text-foreground text-center leading-tight">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* What you get — checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-lg mx-auto mb-10 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
        >
          <p className="text-sm font-jakarta font-bold text-primary uppercase tracking-wider mb-4">What you get for R500 (4 pages)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              "4-page professional layout",
              "Mobile & desktop ready",
              "Fast loading speed",
              "WhatsApp click-to-chat",
              "Your branding & colours",
              "Delivered in 1–3 days",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-jakarta text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%27d%20like%20the%20R500%204-page%20website%20(or%20full%20site%20quote).%20%F0%9F%91%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white font-jakarta font-bold text-base transition-all hover:scale-105 shadow-xl shadow-[#25D366]/30"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            WhatsApp — Free consult · From R500
          </a>
          <button
            onClick={() => scrollTo("#hosting")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-gray-300 text-foreground font-jakarta font-semibold text-base hover:bg-gray-50 hover:border-gray-400 transition-all"
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
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {[
            { icon: Star, text: "5-Star Service", color: "text-amber-500" },
            { icon: Zap, text: "Fast Turnaround", color: "text-primary" },
            { icon: Globe, text: "Worldwide Clients", color: "text-green-500" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-sm font-jakarta text-muted-foreground">
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
          <span className="text-xs font-jakarta text-muted-foreground/60 mr-1">Serving:</span>
          {["🇿🇦 South Africa", "🇬🇧 UK", "🇺🇸 USA", "🇦🇺 Australia", "🌍 & More"].map((c) => (
            <span key={c} className="text-xs font-jakarta text-muted-foreground/70 px-3 py-1.5 rounded-full bg-white border border-gray-200">
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
