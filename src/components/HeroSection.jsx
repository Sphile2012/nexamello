import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Smartphone, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ heroImage }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Digital web design abstract background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
      </div>

      {/* Floating gradient orbs — more vivid */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/6 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-1/2 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-medium text-primary">
              Professional Web Development
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm font-inter font-medium text-yellow-400 ml-1">5-Star Service</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-space font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-tight tracking-tighter"
        >
          We Build Websites
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            That Drive Results
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl font-inter text-muted-foreground leading-relaxed"
        >
          Modern, high-performing websites tailored to help South African businesses grow and
          stand out online. <span className="text-foreground font-semibold">Delivered in 1–3 days.</span> Fast, secure, and mobile-friendly — every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="font-inter font-bold rounded-full px-10 py-6 text-base gap-2 group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#pricing")}
            className="font-inter font-semibold rounded-full px-8 py-6 text-base border-border/60 hover:bg-secondary/50"
          >
            View Packages
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { value: "1–3", label: "Day Delivery", icon: Zap },
            { value: "100%", label: "Mobile Friendly", icon: Smartphone },
            { value: "SSL", label: "Security Included", icon: Shield },
            { value: "24/7", label: "Support Available", icon: Users },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <stat.icon className="w-5 h-5 text-primary mb-1" />
              <span className="font-space font-bold text-2xl text-foreground">{stat.value}</span>
              <span className="text-xs font-inter text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}