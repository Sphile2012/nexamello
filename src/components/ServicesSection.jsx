import { motion } from "framer-motion";
import { Globe, Search, ShoppingCart, Palette, BarChart3, Headphones, Lock, Gauge } from "lucide-react";

const services = [
  { icon: Globe, title: "Responsive Design", description: "Beautiful websites that look perfect on every device — desktop, tablet, and mobile.", gradient: "from-blue-50 to-blue-100/50", iconColor: "text-blue-600", iconBg: "bg-blue-100", border: "hover:border-blue-300" },
  { icon: Search, title: "SEO Optimization", description: "Rank higher on Google and attract more visitors with our full SEO setup.", gradient: "from-green-50 to-green-100/50", iconColor: "text-green-600", iconBg: "bg-green-100", border: "hover:border-green-300" },
  { icon: ShoppingCart, title: "E-Commerce", description: "Secure payment integration and product setup to sell online effortlessly.", gradient: "from-orange-50 to-orange-100/50", iconColor: "text-orange-600", iconBg: "bg-orange-100", border: "hover:border-orange-300" },
  { icon: Palette, title: "Custom UI/UX Design", description: "Unique, branded designs that capture your identity and engage users.", gradient: "from-pink-50 to-pink-100/50", iconColor: "text-pink-600", iconBg: "bg-pink-100", border: "hover:border-pink-300" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Track your website performance with detailed analytics dashboards.", gradient: "from-purple-50 to-purple-100/50", iconColor: "text-purple-600", iconBg: "bg-purple-100", border: "hover:border-purple-300" },
  { icon: Headphones, title: "Ongoing Support", description: "Maintenance packages with updates, backups, security, and issue resolution.", gradient: "from-cyan-50 to-cyan-100/50", iconColor: "text-cyan-600", iconBg: "bg-cyan-100", border: "hover:border-cyan-300" },
  { icon: Lock, title: "SSL & Security", description: "Enterprise-grade security with SSL certificates and data protection.", gradient: "from-red-50 to-red-100/50", iconColor: "text-red-600", iconBg: "bg-red-100", border: "hover:border-red-300" },
  { icon: Gauge, title: "Speed Optimization", description: "Blazing fast load times that keep visitors engaged and improve rankings.", gradient: "from-amber-50 to-amber-100/50", iconColor: "text-amber-600", iconBg: "bg-amber-100", border: "hover:border-amber-300" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-jakarta font-bold text-primary uppercase tracking-widest mb-5">
            What We Offer
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Web Services
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-jakarta text-base sm:text-lg">
            From design to deployment — everything your business needs to thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${s.gradient} border border-gray-200 ${s.border} hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <s.icon className={`w-5 h-5 ${s.iconColor}`} />
              </div>
              <h3 className="font-jakarta font-semibold text-[15px] text-foreground mb-2">{s.title}</h3>
              <p className="text-[13px] font-jakarta text-muted-foreground leading-relaxed flex-1">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary/8 via-primary/4 to-transparent border border-primary/15 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="font-jakarta font-bold text-foreground text-base sm:text-lg">🌍 We work with clients worldwide</p>
            <p className="text-sm font-jakarta text-muted-foreground mt-1">Remote-friendly — we deliver your website anywhere via WhatsApp, email or video call.</p>
          </div>
          <a
            href="https://wa.me/27823562239?text=Hi!%20I%27m%20interested%20in%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-jakarta font-semibold text-sm hover:bg-[#25D366]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/20"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
