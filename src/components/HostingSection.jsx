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

const starterPlans = [
  {
    pages: "4 Page Website",
    price: "R500",
    hosting: "R250/month",
    desc: "Services, about, contact & more — look legit fast",
    variant: "green",
  },
  {
    pages: "Full Website",
    price: "R2,500",
    hosting: "R250/month",
    desc: "Complete presence — built to win trust & leads",
    variant: "red",
  },
];

const perfectFor = [
  { icon: Building2, label: "Small Businesses" },
  { icon: Scissors,  label: "Salons & Barbers" },
  { icon: Plug,      label: "Plumbers & Electricians" },
  { icon: Store,     label: "Shops & Startups" },
];

const ownPlans = [
  {
    name: "Essential",
    price: "R500",
    label: "4 pages · once-off",
    monthly: "+ R250/mo hosting",
    highlighted: false,
    features: [
      "4-page professional website",
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
    name: "Complete",
    price: "R2,500",
    label: "Full website · once-off",
    monthly: "+ R250/mo hosting",
    highlighted: true,
    features: [
      "Full multi-section website",
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
    name: "Scale",
    price: "From R5,000",
    label: "Custom / shop-ready",
    monthly: "+ R250/mo hosting",
    highlighted: false,
    features: [
      "Custom scope & extra pages",
      "35 GB SSD Storage",
      "SSL Security Certificate",
      "Unlimited* Traffic",
      "300 Mailboxes",
      "Advanced SEO + Speed Optimization",
      "Payment / bookings integration",
      "Analytics dashboard",
    ],
  },
];

export default function HostingSection() {
  return (
    <section id="hosting" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            <Server className="w-3.5 h-3.5" />
            Packages & Pricing
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Get Your Business{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Online Today
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-base sm:text-lg">
            Look professional, get found on Google, and turn WhatsApp chats into customers — from <strong className="text-foreground">R500</strong> once-off plus hosting. Serving clients <strong className="text-foreground">everywhere</strong>.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════
            STARTER CARD
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
            <div className="bg-gradient-to-r from-primary via-blue-500 to-primary px-4 sm:px-6 py-3 text-center">
              <p className="font-space font-bold text-white text-xs sm:text-sm lg:text-base uppercase tracking-widest">
                🚀 Professional Website + Hosting Package
              </p>
            </div>

            <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

              {/* ── Left column ── */}
              <div className="flex flex-col">

                {/* Price block */}
                <div className="mb-6 sm:mb-7">
                  <div className="space-y-3 mb-4">
                    {starterPlans.map((plan) => (
                      <div
                        key={plan.pages}
                        className={`flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-lg ${
                          plan.variant === "green"
                            ? "bg-gradient-to-r from-emerald-600 to-green-500"
                            : "bg-gradient-to-r from-red-600 to-red-500"
                        }`}
                      >
                        <div>
                          <span className="text-white font-inter font-semibold text-sm block">{plan.pages}</span>
                          <span className="text-white/70 font-inter text-xs">{plan.desc}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-space font-bold text-2xl sm:text-3xl text-white">{plan.price}</span>
                          <span className="text-white/70 font-inter text-xs block">once-off</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600/90 to-blue-600/90 border border-white/20">
                    <Server className="w-4 h-4 text-cyan-200 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-inter text-white">
                      Hosting package: <span className="font-bold text-cyan-200">R250/month</span> — keeps your site fast & online
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm font-inter text-blue-200/70 leading-relaxed">
                    No DIY stress — we design, connect WhatsApp, and help you show up on Google. Tell us your business name and we&apos;ll guide the rest.
                    <br />
                    <span className="text-blue-300/60 text-xs mt-1 block">Domain excluded. Optional R250/month maintenance plan available.</span>
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 sm:space-y-3 mb-7 sm:mb-8">
                  {starterFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-inter text-blue-100">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* No stress banner */}
                <div className="px-4 sm:px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-center mb-5 sm:mb-6">
                  <p className="text-xs sm:text-sm font-inter font-bold text-white">
                    No Stress. No Tech Skills Needed. We Do It All.
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/30"
                >
                  Free WhatsApp consult — from R500 · 4 pages
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
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {perfectFor.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-inter text-blue-100">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing summary cards */}
                <div>
                  <p className="text-xs font-inter font-bold text-blue-300/60 uppercase tracking-widest mb-3">
                    What you pay:
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { value: "R500",  label: "Once-off · 4-page site",  highlight: true },
                      { value: "R2,500", label: "Once-off · full website", highlight: false },
                      { value: "R250",  label: "Per month · hosting", highlight: false },
                      { value: "1–3",   label: "Days · typical delivery",   highlight: false },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className={`text-center p-3 sm:p-4 rounded-xl border transition-colors ${
                          s.highlight
                            ? "bg-primary/15 border-primary/30"
                            : "bg-white/5 border-white/10"
                        }`}
                      >
                        <p className={`font-space font-bold text-xl sm:text-2xl ${s.highlight ? "text-primary" : "text-white"}`}>
                          {s.value}
                        </p>
                        <p className="text-[10px] sm:text-xs font-inter text-blue-200/60 mt-1 leading-tight">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact options */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
                  <a
                    href="tel:0823562239"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 text-xs sm:text-sm font-inter font-semibold text-blue-100 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    Call Us
                  </a>
                  <a
                    href="mailto:poomeigh503@gmail.com"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 text-xs sm:text-sm font-inter font-semibold text-blue-100 transition-all duration-300"
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
            OWN A WEBSITE
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            Own a Website
          </div>
          <h3 className="font-space font-bold text-2xl sm:text-3xl text-foreground">
            Full Ownership Packages
          </h3>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-inter">
            Your website, your asset. Pay once, own it forever.
          </p>
        </motion.div>

        {/* Monthly fee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-primary/10 border border-primary/25">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-inter font-semibold text-foreground text-sm sm:text-base">
              Monthly hosting fee: <span className="text-primary font-bold">R250/month</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
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

              <div className={`h-full rounded-3xl p-6 sm:p-7 ${plan.highlighted ? "bg-card" : "bg-card/60"}`}>
                <div className="mb-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-inter font-bold uppercase tracking-widest mb-3 ${
                    plan.highlighted ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                  }`}>
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-space font-bold text-3xl sm:text-4xl text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-xs font-inter text-primary font-semibold mt-1">{plan.label}</p>
                  <p className="text-xs font-inter text-muted-foreground mt-0.5">{plan.monthly}</p>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 sm:gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-inter text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("#contact")}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-inter font-semibold text-sm transition-all duration-300 hover:scale-[1.02] group ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/50"
                  }`}
                >
                  Get a quote — {plan.name}
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
          className="text-center mt-8 text-xs sm:text-sm font-inter text-muted-foreground italic max-w-2xl mx-auto"
        >
          <strong className="text-foreground not-italic">4-page starter (R500):</strong> paid in full when you book.
          {" "}
          <strong className="text-foreground not-italic">Full website &amp; custom builds:</strong> R1,500 non-refundable booking deposit, balance on completion before go-live.
        </motion.p>
      </div>
    </section>
  );
}
