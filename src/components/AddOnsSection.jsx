import { motion } from "framer-motion";
import { Plus, FileText, Paintbrush, ShoppingBag, Gauge, Search, Mail, Bot, ArrowRight } from "lucide-react";

const addOns = [
  {
    icon: FileText,
    name: "Extra Page",
    price: "R500",
    description: "Add additional pages to your website",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Paintbrush,
    name: "Logo Design",
    price: "R500 – R1,500",
    description: "Professional logo and brand identity",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce Setup",
    price: "R2,000 – R5,000",
    description: "Full online store with payment gateway",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Gauge,
    name: "Speed Optimization",
    price: "R800",
    description: "Maximize loading speed and Core Web Vitals",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Search,
    name: "SEO Setup",
    price: "R700",
    description: "Full on-page SEO for Google visibility",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Mail,
    name: "Business Email",
    price: "R300",
    description: "Professional email like you@yourbusiness.co.za",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            <Plus className="w-3.5 h-3.5" />
            Enhance Your Package
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Optional{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Add-Ons
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Supercharge your website with powerful extras tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {addOns.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${addon.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <addon.icon className={`w-5 h-5 ${addon.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-space font-semibold text-foreground">{addon.name}</h3>
                  <span className={`text-sm font-inter font-bold ${addon.color} flex-shrink-0`}>
                    {addon.price}
                  </span>
                </div>
                <p className="text-xs font-inter text-muted-foreground mt-1 leading-relaxed">
                  {addon.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-5xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-space font-bold text-foreground">Bundle & Save</p>
              <p className="text-sm font-inter text-muted-foreground">Add 3+ extras and get a custom discount.</p>
            </div>
          </div>
          <a
            href="https://wa.me/27823562239?text=Hi!%20I%27d%20like%20to%20bundle%20some%20add-ons."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary font-inter font-semibold text-sm hover:bg-primary/10 transition-colors"
          >
            Ask about bundles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
