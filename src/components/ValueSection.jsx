import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Rocket, MousePointer, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: TrendingUp,
    title: "Monetization",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20 hover:border-orange-500/40",
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    items: ["Subscriptions", "Premium Products", "Ad Space", "Affiliate Programs"],
  },
  {
    icon: ShieldCheck,
    title: "Trust & Credibility",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20 hover:border-green-500/40",
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    items: ["Client Reviews", "SSL Certificates", "Privacy Policies", "Professional Portfolio"],
  },
  {
    icon: Rocket,
    title: "Growth & Marketing",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20 hover:border-primary/40",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    items: ["SEO Strategy", "Email Marketing", "Social Media Integration", "Blog Content"],
  },
  {
    icon: MousePointer,
    title: "Usability",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20 hover:border-purple-500/40",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    items: ["Mobile Optimization", "Fast Load Speed", "Easy Navigation", "Accessible Design"],
  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function ValueSection() {
  return (
    <section id="value" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-inter font-semibold text-primary uppercase tracking-widest">
              Beyond The Website
            </span>
            <h2 className="mt-4 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              We Don't Just Build —{" "}
              <span className="text-primary">We Grow</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-inter text-lg leading-relaxed">
              Your website is just the beginning. We offer hosting, maintenance,
              redesigns, SEO, social media setup, analytics, business email
              configuration, and AI chatbot integration — building recurring value
              and stable income for your business.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Delivered in 1–3 business days",
                "Ongoing monthly management plans available",
                "Full support from design to launch",
                "We build for South African businesses",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-inter text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                onClick={() => scrollTo("#contact")}
                className="font-inter font-bold rounded-full px-8 py-5 gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                Start Your Project Today
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center mb-3`}>
                  <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <h3 className="font-space font-semibold text-foreground mb-2">
                  {cat.title}
                </h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-inter text-muted-foreground flex items-center gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.iconBg} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}