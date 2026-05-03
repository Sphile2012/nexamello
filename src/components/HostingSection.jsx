import { motion } from "framer-motion";
import {
  Check, Server, ArrowRight, Star, Zap,
  Smartphone, Globe, ShieldCheck, Wrench,
  Store, Scissors, Plug, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const starterFeatures = [
  { icon: Globe, text: "Fully Designed Website" },
  { icon: Server, text: "Reliable Hosting Included" },
  { icon: Smartphone, text: "WhatsApp Integration — Connect with Clients" },
  { icon: Zap, text: "Google Visibility — Be Found Online" },
  { icon: ShieldCheck, text: "We Handle EVERYTHING for You" },
];

const perfectFor = [
  { icon: Building2, label: "Small Businesses" },
  { icon: Scissors, label: "Salons & Barbers" },
  { icon: Plug, label: "Plumbers & Electricians" },
  { icon: Store, label: "Shops & Startups" },
];

const ownPlans = [
  {
    name: "Basic",
    price: "R2,500",
    label: "Own a Website",
    monthly: "+ R250/mo hosting",
    highlighted: false,
    features: [
      "1–3 Page Website",
      "5 GB SSD Storage",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "50 Mailboxes",
      "WhatsApp Integration",
      "Mobile Responsive",
      "cPanel Access",
    ],
  },
  {
    name: "Standard",
    price: "R4,500",
    label: "Own a Website",
    monthly: "+ R250/mo hosting",
    highlighted: true,
    features: [
      "4–6 Page Website",
      "15 GB SSD Storage",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "150 Mailboxes",
      "WhatsApp + Contact Form",
      "Basic SEO Setup",
      "cPanel + WordPress Toolkit",
    ],
  },
  {
    name: "Pro",
    price: "R9,000",
    label: "Own a Website",
    monthly: "+ R250/mo hosting",
    highlighted: false,
    features: [
      "Unlimited Custom Pages",
      "35 GB SSD Storage",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "300 Mailboxes",
      "Full SEO + Speed Optimization",
      "Payment Integration",
      "Analytics Dashboard",
    ],
  },
];

export default function HostingSection() {
  return (
    <section id="hosting" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            <Server className="w-3.5 h-3.5" />
            Packages & Pricing
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Get Your Business{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Online Today
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            From a simple starter page to a fully custom website — we have a plan for every budget.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════
            STARTER CARD — R350 once-off
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] shadow-2xl shadow-primary/20">

            {/* Top banner */}
            <div className="bg-gradient-to-r from-primary via-blue-500 to-primary px-6 py-3 text-center">
              <p className="font-space font-bold text-white text-sm sm:text-base uppercase tracking-widest">
                🚀 Get Your Business Online Today!
              </p>
            </div>

            <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Left — pricing & features */}
              <div>
                {/* Package label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-inter font-bold text-white uppercase tracking-widest mb-5">
                  <Server className="w-3.5 h-3.5" />
                  Professional Website + Hosting Package
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="inline-flex items-baseline gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 shadow-lg">
                    <span className="text-white font-inter font-semibold text-sm">ONLY</span>
                    <span className="font-space font-bold text-4xl sm:text-5xl text-white">R350</span>
                    <span className="text-white/80 font-inter text-sm">Once-Off</span>
                    <span className="text-white/60 font-inter text-sm">+</span>
                    <span className="font-space font-bold text-2xl text-yellow-300">R150</span>
                    <span className="text-white/80 font-inter text-sm">/month</span>
                  </div>
                  <p className="mt-3 text-sm font-inter text-blue-200/70 max-w-sm">
                    Optional <span className="text-white font-semibold">R250/month</span> maintenance plan — keeps your site updated, secure & running smoothly.
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {starterFeatures.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-inter text-blue-100">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Perfect for */}
                <div className="mb-8">
                  <p className="text-xs font-inter font-bold text-yellow-400 uppercase tracking-widest mb-3">
                    Perfect for:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {perfectFor.map((item) => (
                      <div key={item.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs font-inter text-blue-100">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* No stress banner */}
                <div className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600/80 to-orange-500/80 text-center mb-6">
                  <p className="text-sm font-inter font-bold text-white">
                    No Stress. No Tech Skills Needed. We Do It All.
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/27823562239?text=Hi%20NexaWeb!%20I%27m%20interested%20in%20the%20R350%20starter%20website%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-inter font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/30"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  WhatsApp Us Now to Get Started!
                </a>
              </div>

              {/* Right — visual */}
              <div className="flex flex-col items-center justify-center gap-6">
                {/* Mock browser window */}
                <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1f3c]">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <div className="flex-1 mx-3 h-5 rounded-md bg-white/10 flex items-center px-2">
                      <span className="text-[10px] font-inter text-white/40">www.yourbusiness.co.za</span>
                    </div>
                  </div>
                  {/* Mock website content */}
                  <div className="p-4 space-y-3">
                    <div className="h-20 rounded-xl bg-gradient-to-r from-primary/30 to-blue-600/20 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-primary/60" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 rounded-full bg-white/10 w-3/4" />
                      <div className="h-2 rounded-full bg-white/5 w-full" />
                      <div className="h-2 rounded-full bg-white/5 w-5/6" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-12 rounded-lg bg-white/5 border border-white/10" />
                      ))}
                    </div>
                    <div className="h-8 rounded-xl bg-primary/30 flex items-center justify-center">
                      <span className="text-xs font-inter text-primary/80 font-semibold">Contact Us</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  {[
                    { value: "R350", label: "Once-Off Setup" },
                    { value: "R150", label: "Per Month" },
                    { value: "1–3", label: "Days Delivery" },
                    { value: "100%", label: "Mobile Ready" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                      <p className="font-space font-bold text-xl text-primary">{s.value}</p>
                      <p className="text-xs font-inter text-blue-200/60 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            OWN A WEBSITE — R2,500 / R4,500 / R9,000
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            Own a Website
          </div>
          <h3 className="font-space font-bold text-2xl sm:text-3xl text-foreground">
            Full Ownership Packages
          </h3>
          <p className="mt-2 text-muted-foreground font-inter">
            Your website, your asset. Pay once, own it forever.
          </p>
        </motion.div>

        {/* Monthly fee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/25">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-inter font-semibold text-foreground text-sm sm:text-base">
              Monthly hosting fee: <span className="text-primary font-bold">R250/month</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {ownPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-px transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/60 to-primary/10"
                  : "bg-border/50 hover:bg-border/80"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-inter font-bold uppercase tracking-wide flex items-center gap-1.5 whitespace-nowrap shadow-lg shadow-primary/30">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className={`h-full rounded-3xl p-7 ${plan.highlighted ? "bg-card" : "bg-card/60"}`}>
                {/* Header */}
                <div className="mb-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-bold uppercase tracking-widest mb-3 ${
                    plan.highlighted ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-space font-bold text-4xl text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-xs font-inter text-primary font-semibold mt-1">{plan.label}</p>
                  <p className="text-xs font-inter text-muted-foreground mt-0.5">{plan.monthly}</p>
                </div>

                {/* Features */}
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
                  Own a Website — {plan.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-sm font-inter text-muted-foreground italic"
        >
          All packages include a R1,500 non-refundable booking deposit. Balance due on completion.
        </motion.p>
      </div>
    </section>
  );
}
