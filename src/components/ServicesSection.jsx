import { motion } from "framer-motion";
import {
  Globe, Search, ShoppingCart, Palette,
  BarChart3, Headphones, Lock, Gauge,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Beautiful websites that look perfect on every device — desktop, tablet, and mobile.",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google and attract more visitors with our full SEO setup.",
    gradient: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/15",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Secure payment integration and product setup to sell online effortlessly.",
    gradient: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/15",
  },
  {
    icon: Palette,
    title: "Custom UI/UX Design",
    description: "Unique, branded designs that capture your identity and engage users.",
    gradient: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track your website performance with detailed analytics dashboards.",
    gradient: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Maintenance packages with updates, backups, security, and issue resolution.",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/15",
  },
  {
    icon: Lock,
    title: "SSL & Security",
    description: "Enterprise-grade security with SSL certificates and data protection.",
    gradient: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/15",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    description: "Blazing fast load times that keep visitors engaged and improve rankings.",
    gradient: "from-yellow-500/20 to-yellow-500/5",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/15",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Web Services
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            From design to deployment and beyond — everything your business needs to thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/40 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <h3 className="font-space font-semibold text-base text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-space font-bold text-foreground text-lg">Need something custom?</p>
            <p className="text-sm font-inter text-muted-foreground mt-1">We build tailored solutions for any business need.</p>
          </div>
          <a
            href="https://wa.me/27823562239?text=Hi!%20I%20need%20a%20custom%20web%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-inter font-semibold text-sm hover:bg-[#25D366]/90 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
