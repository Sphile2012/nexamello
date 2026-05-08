import { motion } from "framer-motion";
import { Globe, Clock, CreditCard, MessageSquare, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Worldwide Delivery",
    desc: "We serve clients in South Africa, UK, USA, Australia, Canada and beyond.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Clock,
    title: "1–3 Day Turnaround",
    desc: "Fast delivery guaranteed. Most sites are live within 3 business days.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    desc: "PayFast, EFT, PayPal & Stripe accepted. International clients welcome.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: MessageSquare,
    title: "Remote Friendly",
    desc: "Everything done via WhatsApp, email or video call — no in-person needed.",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
  },
  {
    icon: ShieldCheck,
    title: "SSL & Security",
    desc: "Every website includes SSL, security hardening and data protection.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "No Tech Skills Needed",
    desc: "We handle everything. You just approve and go live.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function GlobalBanner() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-space font-bold text-2xl sm:text-3xl text-foreground">
            Why Businesses Worldwide Choose{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Nexa Web Solutions
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <div>
                <h3 className="font-space font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-xs font-inter text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currency note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center p-4 rounded-2xl bg-card/40 border border-border/30"
        >
          <p className="text-sm font-inter text-muted-foreground">
            💱 Prices shown in <strong className="text-foreground">South African Rand (ZAR)</strong>.
            International clients — <strong className="text-primary">R350 ≈ $19 USD · £15 GBP · $29 AUD</strong>.
            Contact us for a quote in your currency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
