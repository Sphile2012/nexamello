import { motion } from "framer-motion";
import {
  Check, Server, ArrowRight, Star, Zap,
  Smartphone, Globe, ShieldCheck,
  Store, Scissors, Plug, Building2,
  Mail, Phone,
} from "lucide-react";

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const starterFeatures = [
  { icon: Globe,       text: "Fully Designed, Professional Website" },
  { icon: Server,      text: "Reliable Hosting Included" },
  { icon: Smartphone,  text: "WhatsApp Integration — Connect with Clients" },
  { icon: Zap,         text: "Google Visibility — Be Found Online" },
  { icon: ShieldCheck, text: "SSL Security Certificate Included" },
  { icon: Check,       text: "We Handle EVERYTHING for You" },
];

const perfectFor = [
  { icon: Building2, label: "Small Businesses" },
  { icon: Scissors,  label: "Salons & Barbers" },
  { icon: Plug,      label: "Plumbers & Electricians" },
  { icon: Store,     label: "Shops & Startups" },
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
            From a simple starter page to a fully custom website — we have a plan for every budget, <strong className="text-foreground">anywhere in the world</strong>.
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
          <div className="rounded-3xl overflow-hidden border border-primary/25 bg-[#0b1a30] shadow-2xl shadow-primary/10">

            {/* Top banner */}
            <div className="bg-gradient-to-r from-primary via-blue-500 to-primary px-6 py-3 text-center">
              <p className="font-space font-bold text-white text-sm sm:text-base uppercase tracking-widest">
                🚀 Professional Website + Hosting Package
              </p>
            </div>

            <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* ── Left column ── */}
              <div className="flex flex-col">

                {/* Price block */}
                <div className="mb-7">
                  <div className="inline-flex flex-wrap items-baseline gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 shadow-lg mb-3">
                    <span className="text-white font-inter font-semibold text-sm">FROM</span>
                    <span className="font-space font-bold text-4xl sm:text-5xl text-white">R350</span>
                    <span className="text-white/80 font-inter text-sm">Once-Off · 1 Page</span>
                    <span className="text-white/50 font-inter text-sm mx-1">+</span>
                    <span className="font-space font-bold text-2xl text-yellow-300">R150</span>
                    <span className="text-white/80 font-inter text-sm">/month</span>
                  </div>
                  <p className="text-sm font-inter text-blue-200/70 leading-relaxed">
                    Start your online presence with a simple, professional <span className="text-white font-semibold">1-page website</span> — perfect for small businesses looking to get online quickly.
                    <br /><br />
                    Optional <span className="text-white font-semibold">R250/month</span> maintenance plan keeps your site updated, secure &amp; running smoothly.
                    <br />
                    <span className="text-blue-300/60 text-xs mt-1 block">Domain excluded.</span>
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {starterFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-inter text-blue-100">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* No stress banner */}
                <div className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-center mb-6">
                  <p className="text-sm font-inter font-bold text-white">
                    No Stress. No Tech Skills Needed. We Do It All.
                  </p>
                </div>

                {/* CTA — scroll to contact */}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-primary/30"
                >
                  Get Started — R350 · 1 Page
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* ── Right column ── */}
              <div className="flex flex-col gap-5">

                {/* Perfect for */}
                <div>
                  <p className="text-xs font-inter font-bold text-yellow-400 uppercase tracking-widest mb-3">
                    Perfect for:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {perfectFor.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-inter text-blue-100">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing summary cards */}
                <div>
                  <p className="text-xs font-inter font-bold text-blue-300/60 uppercase tracking-widest mb-3">
                    What you pay:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "R350",  label: "Once-Off · 1 Page",  highlight: true },
                      { value: "R150",  label: "Per Month (hosting)", highlight: false },
                      { value: "R250",  label: "Per Month (optional maintenance)", highlight: false },
                      { value: "1–3",   label: "Days Delivery",   highlight: false },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className={`text-center p-4 rounded-xl border transition-colors ${
                          s.highlight
                            ? "bg-primary/15 border-primary/30"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        <p className={`font-space font-bold text-2xl ${s.highlight ? "text-primary" : "text-white"}`}>
                          {s.value}
                        </p>
                        <p className="text-xs font-inter text-blue-200/60 mt-1 leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact options */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a
                    href="tel:0823562239"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 text-sm font-inter font-semibold text-blue-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    Call Us
                  </a>
                  <a
                    href="mailto:poomeigh503@gmail.com"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 text-sm font-inter font-semibold text-blue-100 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    Email Us
                  </a>
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

                <button
                  onClick={() => scrollTo("#contact")}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-inter font-semibold text-sm transition-all hover:scale-[1.02] group ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/50"
                  }`}
                >
                  Own a Website — {plan.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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
