import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Smartphone, Star, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const countries = [
  { flag: "🇿🇦", name: "South Africa" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🌍", name: "& More" },
];

export default function HeroSection({ heroImage }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Global web design" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-semibold text-primary">Serving Clients Worldwide</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/25">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
            <span className="text-sm font-inter font-semibold text-yellow-400 ml-1">5-Star Rated</span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] tracking-tighter">
          Professional Websites
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-300 to-primary bg-clip-text text-transparent">
            For Any Business, Anywhere
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl font-inter text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Nexa Web Solutions</strong> builds fast, modern, mobile-friendly websites for businesses across{" "}
          <span className="text-foreground font-semibold">South Africa and worldwide</span>.{" "}
          <span className="text-foreground font-semibold">Delivered in 1–3 days</span> — starting from{" "}
          <span className="text-primary font-bold">R350</span>.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollTo("#contact")}
            className="font-inter font-bold rounded-full px-10 py-6 text-base gap-2 group shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Get Your Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("#hosting")}
            className="font-inter font-semibold rounded-full px-8 py-6 text-base border-border/60 hover:bg-secondary/50 hover:border-primary/40 transition-all duration-300">
            <Code2 className="w-4 h-4 mr-2" />
            View Packages
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-5">
          <a href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%27d%20like%20a%20free%20quote."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-inter text-[#25D366] hover:text-[#25D366]/80 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            Chat with us on WhatsApp — we reply fast
          </a>
        </motion.div>

        {/* Countries */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-10">
          <p className="text-xs font-inter text-muted-foreground/60 uppercase tracking-widest mb-4">We serve clients in</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {countries.map((c) => (
              <div key={c.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/40 border border-border/40 text-xs font-inter text-muted-foreground">
                <span>{c.flag}</span><span>{c.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "1–3", label: "Day Delivery", icon: Zap, color: "text-yellow-400" },
            { value: "100%", label: "Mobile Friendly", icon: Smartphone, color: "text-green-400" },
            { value: "SSL", label: "Security Included", icon: Shield, color: "text-blue-400" },
            { value: "Global", label: "Client Reach", icon: Globe, color: "text-primary" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/40 border border-border/40 backdrop-blur-sm hover:border-primary/30 transition-all">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="font-space font-bold text-2xl text-foreground">{stat.value}</span>
              <span className="text-xs font-inter text-muted-foreground text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2">
          <span className="text-xs font-inter text-muted-foreground/50">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-border/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
