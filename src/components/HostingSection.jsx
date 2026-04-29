import { motion } from "framer-motion";
import { Check, Server, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "27823562239";

const plans = [
  {
    name: "Basic",
    price: "R2,500",
    label: "once off Web design",
    monthly: "R250/mo",
    highlighted: false,
    features: [
      "5 GB SSD Storage",
      "1–3 Page Website",
      "Website Builder",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "2 Databases",
      "50 Mailboxes",
      "Anti-SPAM & Anti-Virus",
      "Webmail Access",
      "cPanel (Control Panel)",
      "Softaculous App Installer",
      "WordPress Toolkit",
    ],
  },
  {
    name: "Standard",
    price: "R4,500",
    label: "once off Web design",
    monthly: "R250/mo",
    highlighted: true,
    features: [
      "15 GB SSD Storage",
      "4–6 Page Website",
      "Website Builder",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "5 Databases",
      "150 Mailboxes",
      "Anti-SPAM & Anti-Virus",
      "Webmail Access",
      "cPanel (Control Panel)",
      "Softaculous App Installer",
      "WordPress Toolkit",
    ],
  },
  {
    name: "Pro",
    price: "R9,000",
    label: "once off Web design",
    monthly: "R250/mo",
    highlighted: false,
    features: [
      "35 GB SSD Storage",
      "Custom Design",
      "Website Builder",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "10 Databases",
      "300 Mailboxes",
      "Anti-SPAM & Anti-Virus",
      "Webmail Access",
      "cPanel (Control Panel)",
      "Softaculous App Installer",
      "WordPress Toolkit",
    ],
  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function HostingSection() {
  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Server className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-medium text-primary">
              Hosting & Building Packages
            </span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Website Hosting &{" "}
            <span className="text-primary">Building Packages</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground font-inter text-lg">
            Everything you need to get online — hosting, email, security, and a professionally built website, all in one.
          </p>
        </motion.div>

        {/* Monthly fee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/15 border border-primary/30">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-inter font-semibold text-foreground text-sm sm:text-base">
              Monthly subscription fee: <span className="text-primary font-bold">R250/month</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-px ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/60 to-primary/10"
                  : "bg-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-inter font-bold uppercase tracking-wide flex items-center gap-1.5 whitespace-nowrap">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className={`h-full rounded-3xl p-7 ${plan.highlighted ? "bg-card" : "bg-card/60"}`}>
                {/* Plan name */}
                <div className="mb-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-bold uppercase tracking-widest mb-3 ${
                    plan.highlighted ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    {plan.name}
                  </span>
                  <div>
                    <span className="font-space font-bold text-4xl text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-xs font-inter text-muted-foreground mt-1">{plan.label}</p>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-sm font-inter text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => scrollTo("#contact")}
                  variant={plan.highlighted ? "default" : "secondary"}
                  className="w-full rounded-full font-inter font-semibold py-5 gap-2 group"
                >
                  Get {plan.name} Plan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-sm font-inter text-muted-foreground"
        >
          Contact us for more info:{" "}
          <a href="tel:0823562239" className="text-primary hover:underline font-medium">0823562239</a>
          {" "}/ {" "}
          <a href="tel:0820610949" className="text-primary hover:underline font-medium">0820610949</a>
        </motion.p>
      </div>
    </section>
  );
}