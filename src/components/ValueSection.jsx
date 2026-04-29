import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Rocket, MousePointer, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: TrendingUp,
    title: "Monetization",
    gradient: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20 hover:border-orange-500/40",
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    dot: "bg-orange-400",
    items: ["Subscriptions", "Premium Products", "Ad Space", "Affiliate Programs"],
  },
  {
    icon: ShieldCheck,
    title: "Trust & Credibility",
    gradient: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20 hover:border-green-500/40",
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    dot: "bg-green-400",
    items: ["Client Reviews", "SSL Certificates", "Privacy Policies", "Professional Portfolio"],
  },
  {
    icon: Rocket,
    title: "Growth & Marketing",
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/20 hover:border-primary/40",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    dot: "bg-primary",
    items: ["SEO Strategy", "Email Marketing", "Social Media Integration", "Blog Content"],
  },
  {
    icon: MousePointer,
    title: "Usability",
    gradient: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20 hover:border-purple-500/40",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    dot: "bg-purple-400",
    items: ["Mobile Optimization", "Fast Load Speed", "Easy Navigation", "Accessible Design"],
  },
];

const points = [
  "Delivered in 1–3 business days",
  "Ongoing monthly management plans available",
  "Full support from design to launch",
  "Built specifically for South African businesses",
  "PayFast & WhatsApp integration included",
  "Free consultation before you commit",
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function ValueSection() {
  return (
    <section id="value" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Beyond The Website
            </span>
            <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              We Don't Just Build —{" "}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                We Grow
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground font-inter text-lg leading-relaxed">
              Your website is just the beginning. We offer hosting, maintenance, redesigns, SEO, social media setup, analytics, business email, and AI chatbot integration — building recurring value for your business.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm font-inter text-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => scrollTo("#contact")}
                className="font-inter font-bold rounded-full px-8 py-5 gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Start Your Project Today
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a
                href="https://wa.me/27823562239?text=Hi!%20I%27d%20like%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#25D366]/30 text-[#25D366] font-inter font-semibold text-sm hover:bg-[#25D366]/10 transition-colors"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${cat.gradient} border ${cat.border} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center mb-3`}>
                  <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <h3 className="font-space font-semibold text-foreground mb-3">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-inter text-muted-foreground flex items-center gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.dot} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
