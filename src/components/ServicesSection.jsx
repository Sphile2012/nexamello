import { motion } from "framer-motion";
import { Globe, Search, ShoppingCart, Palette, BarChart3, Headphones, Lock, Gauge } from "lucide-react";

const services = [
  { icon: Globe, title: "Responsive Design", description: "Beautiful websites that look perfect on every device — desktop, tablet, and mobile." },
  { icon: Search, title: "SEO Optimization", description: "Rank higher on Google and attract more visitors with our full SEO setup." },
  { icon: ShoppingCart, title: "E-Commerce", description: "Secure payment integration and product setup to sell online effortlessly." },
  { icon: Palette, title: "Custom UI/UX Design", description: "Unique, branded designs that capture your identity and engage users." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Track your website performance with detailed analytics dashboards." },
  { icon: Headphones, title: "Ongoing Support", description: "Maintenance packages with updates, backups, security, and issue resolution." },
  { icon: Lock, title: "SSL & Security", description: "Enterprise-grade security with SSL certificates and data protection." },
  { icon: Gauge, title: "Speed Optimization", description: "Blazing fast load times that keep visitors engaged and improve rankings." },
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
          <span className="inline-flex items-center gap-3 text-xs font-dm font-medium tracking-[0.18em] text-primary uppercase mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            Web Services
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Comprehensive{" "}
            <span className="text-primary">
              Web Services
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-dm text-base sm:text-lg font-light leading-[1.8]">
            From design to deployment — everything your business needs to thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden rounded">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="premium-card"
            >
              <div className="w-11 h-11 rounded bg-secondary flex items-center justify-center mb-4 flex-shrink-0">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-dm font-semibold text-[15px] text-foreground mb-2">{s.title}</h3>
              <p className="text-[13px] font-dm text-muted-foreground leading-[1.65] font-light flex-1">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 p-5 sm:p-6 rounded bg-secondary border border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="font-dm font-medium text-foreground text-base sm:text-lg">🌍 We work with clients worldwide</p>
            <p className="text-sm font-dm text-muted-foreground mt-1 font-light">Remote-friendly — we deliver your website anywhere via WhatsApp, email or video call.</p>
          </div>
          <a
            href="https://wa.me/27823562239?text=Hi!%20I%27m%20interested%20in%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-shrink-0 btn-gold"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
