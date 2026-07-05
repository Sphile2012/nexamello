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
    <section id="services" className="py-20 sm:py-28 lg:py-32 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-dm font-medium tracking-[0.18em] text-primary uppercase mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            Our Services
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            <span className="text-cyan-400">We Are Offering</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-dm text-base sm:text-lg font-light leading-[1.8]">
            From design to deployment — everything your business needs to thrive online.
          </p>
        </motion.div>

        {/* Services Grid - Matching Hero Design Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-cyan-400/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {/* Icon with background */}
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                <s.icon className="w-6 h-6 text-cyan-400" />
              </div>
              
              {/* Service Title */}
              <h3 className="font-sans font-semibold text-base sm:text-lg text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                {s.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {s.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/20 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="text-center sm:text-left">
            <p className="font-sans font-semibold text-foreground text-base sm:text-lg mb-2">
              🌍 We work with clients worldwide
            </p>
            <p className="text-sm font-dm text-muted-foreground font-light">
              Remote-friendly — we deliver your website anywhere via WhatsApp, email or video call.
            </p>
          </div>
          <a
            href="https://wa.me/27823562239?text=Hi!%20I%27m%20interested%20in%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-shrink-0 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-base transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
