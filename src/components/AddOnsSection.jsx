import { motion } from "framer-motion";
import { Plus, FileText, Paintbrush, ShoppingBag, Gauge, Search } from "lucide-react";

const addOns = [
  { icon: FileText, name: "Extra Page", price: "R500", description: "Add additional pages to your website" },
  { icon: Paintbrush, name: "Logo Design", price: "R500 – R1,500", description: "Professional logo and brand identity" },
  { icon: ShoppingBag, name: "E-Commerce", price: "R2,000 – R5,000", description: "Full online store functionality" },
  { icon: Gauge, name: "Speed Optimization", price: "R800", description: "Maximize loading speed and performance" },
  { icon: Search, name: "SEO Setup", price: "R700", description: "Search engine optimization for visibility" },
];

export default function AddOnsSection() {
  return (
    <section id="addons" className="py-24 sm:py-32 relative">
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
            Enhance Your Package
          </span>
          <h2 className="mt-4 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Optional Add-Ons
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Supercharge your website with powerful extras tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {addOns.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <addon.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-space font-semibold text-foreground">{addon.name}</h3>
                <p className="text-xs font-inter text-muted-foreground mt-0.5">
                  {addon.description}
                </p>
                <span className="inline-block mt-2 text-sm font-inter font-bold text-primary">
                  {addon.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}