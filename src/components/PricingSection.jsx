import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "4-Page Starter",
    price: "R500",
    suffix: "",
    description: "Get online fast with a credible, multi-page presence — ideal for salons, trades, and startups.",
    features: [
      "4-page professional website",
      "WhatsApp integration",
      "Mobile-friendly layout",
      "Google-friendly structure",
      "Your branding & colours",
      "Delivered in 1–3 days",
    ],
    highlighted: false,
    cta: "Start with Starter",
  },
  {
    name: "Full Website",
    price: "R2,500",
    suffix: "",
    description: "The works: depth, trust, and room to grow — perfect when you need more than a brochure.",
    features: [
      "Full multi-section website",
      "Fully mobile responsive",
      "Basic SEO optimization",
      "Contact form + WhatsApp",
      "Revisions included",
      "Booking or e-commerce ready (scope-dependent)",
    ],
    highlighted: true,
    cta: "Choose Full Website",
  },
  {
    name: "Scale / Custom",
    price: "From R5,000",
    suffix: "",
    description: "Shops, bookings, payments, or larger scope — we scope it properly and quote upfront.",
    features: [
      "Custom pages & features",
      "Priority turnaround options",
      "Full SEO + speed optimization",
      "Payment / booking integration",
      "Analytics setup",
      "Flexible revisions",
    ],
    highlighted: false,
    cta: "Request a Quote",
  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-inter font-semibold text-primary uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="mt-4 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Choose Your Package
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Transparent pricing structured to match your budget while maintaining quality and functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-px ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-primary/60 to-primary/10"
                  : "bg-border/50"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-inter font-bold uppercase tracking-wide flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div
                className={`h-full rounded-3xl p-8 ${
                  pkg.highlighted ? "bg-card" : "bg-card/60"
                }`}
              >
                <div className="mb-6">
                  <h3 className="font-space font-bold text-xl text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-1 text-sm font-inter text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="font-space font-bold text-4xl text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-xl font-space text-muted-foreground">
                    {pkg.suffix}
                  </span>
                </div>

                <ul className="space-y-3 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-inter text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollTo("#contact")}
                  className={`w-full rounded-full font-inter font-semibold py-7 gap-2 group ${
                    pkg.highlighted
                      ? ""
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                  variant={pkg.highlighted ? "default" : "secondary"}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-sm font-inter text-muted-foreground italic"
        >
          Pricing may vary depending on project complexity. We adjust scope instead of reducing quality.
        </motion.p>
      </div>
    </section>
  );
}