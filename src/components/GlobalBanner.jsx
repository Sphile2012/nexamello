import { motion } from "framer-motion";
import { Globe, Clock, CreditCard, MessageSquare, ShieldCheck, Zap } from "lucide-react";

const features = [
  { icon: Globe, title: "Worldwide Delivery", desc: "South Africa, UK, USA, Australia, Canada and beyond.", color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  { icon: Clock, title: "1–3 Day Turnaround", desc: "Fast delivery guaranteed. Most sites live within 3 days.", color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
  { icon: CreditCard, title: "Flexible Payments", desc: "PayFast, EFT, PayPal & Stripe. International clients welcome.", color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
  { icon: MessageSquare, title: "Remote Friendly", desc: "WhatsApp, email or video call — no in-person needed.", color: "text-[#25D366]", bg: "bg-[#25D366]/10", border: "border-[#25D366]/30" },
  { icon: ShieldCheck, title: "SSL & Security", desc: "Every website includes SSL and security hardening.", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  { icon: Zap, title: "No Tech Skills Needed", desc: "We handle everything. You just approve and go live.", color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-200" },
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
          <h2 className="font-jakarta font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
            Why Businesses Worldwide Choose{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Nexa Web Solutions
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border ${f.border} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <div>
                <h3 className="font-jakarta font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-xs font-jakarta text-muted-foreground leading-relaxed">{f.desc}</p>
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
          className="mt-6 text-center px-4 sm:px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/8 via-primary/5 to-transparent border border-primary/15"
        >
          <p className="text-xs sm:text-sm font-jakarta text-muted-foreground">
            💰 All prices are in <strong className="text-foreground">South African Rand (ZAR)</strong>.{" "}
            International clients welcome —{" "}
            <a href="https://wa.me/27823562239?text=Hi!%20I%27d%20like%20a%20quote%20for%20a%20website." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">WhatsApp us for a custom quote →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
