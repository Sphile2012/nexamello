import { motion } from "framer-motion";
import {
  Globe,
  Search,
  ShoppingCart,
  Palette,
  BarChart3,
  Headphones,
  Lock,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Beautiful websites that look perfect on every device — desktop, tablet, and mobile.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google and attract more visitors with our full SEO setup.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Secure payment integration and product setup to sell online effortlessly.",
  },
  {
    icon: Palette,
    title: "Custom UI/UX Design",
    description: "Unique, branded designs that capture your identity and engage users.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track your website performance with detailed analytics dashboards.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Maintenance packages with updates, backups, security, and issue resolution.",
  },
  {
    icon: Lock,
    title: "SSL & Security",
    description: "Enterprise-grade security with SSL certificates and data protection.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    description: "Blazing fast load times that keep visitors engaged and improve rankings.",
  },
];

export default function ServicesSection({ servicesImage }) {
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
          <span className="text-sm font-inter font-semibold text-primary uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="mt-4 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Comprehensive Web Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            From design to deployment and beyond — everything your business needs to thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-space font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}