import { motion } from "framer-motion";
import { Globe, Clock, CreditCard, MessageSquare, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: Globe, title: "Worldwide Delivery", desc: "South Africa, UK, USA, Australia, Canada and beyond." },
  { icon: Clock, title: "1–3 Day Turnaround", desc: "Fast delivery guaranteed. Most sites live within 3 days." },
  { icon: CreditCard, title: "Flexible Payments", desc: "PayFast, EFT, PayPal & Stripe. International clients welcome." },
  { icon: MessageSquare, title: "Remote Friendly", desc: "WhatsApp, email or video call — no in-person needed." },
  { icon: ShieldCheck, title: "SSL & Security", desc: "Every website includes SSL and security hardening." },
  { icon: Zap, title: "No Tech Skills Needed", desc: "We handle everything. You just approve and go live." },
];

export default function GlobalBanner() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Why Businesses Worldwide Choose{" "}
            <span className="text-primary">
              Nexa Web Solutions
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden rounded">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="premium-card"
            >
              <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-dm font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-xs font-dm text-muted-foreground leading-[1.65] font-light">{f.desc}</p>
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
          className="mt-6 text-center px-4 sm:px-6 py-4 rounded bg-secondary border border-border"
        >
          <p className="text-xs sm:text-sm font-dm text-muted-foreground font-light">
            💰 All prices are in <strong className="text-foreground font-medium">South African Rand (ZAR)</strong>.{" "}
            International clients welcome —{" "}
            <a href="https://wa.me/27823562239?text=Hi!%20I%27d%20like%20a%20quote%20for%20a%20website." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">WhatsApp us for a custom quote →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
