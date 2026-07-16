import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Rocket, MousePointer, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: TrendingUp,
    title: "Monetization",
    items: ["Subscriptions", "Premium Products", "Ad Space", "Affiliate Programs"],
  },
  {
    icon: ShieldCheck,
    title: "Trust & Credibility",
    items: ["Client Reviews", "SSL Certificates", "Privacy Policies", "Professional Portfolio"],
  },
  {
    icon: Rocket,
    title: "Growth & Marketing",
    items: ["SEO Strategy", "Email Marketing", "Social Media Integration", "Blog Content"],
  },
  {
    icon: MousePointer,
    title: "Usability",
    items: ["Mobile Optimization", "Fast Load Speed", "Easy Navigation", "Accessible Design"],
  },
];

const points = [
  "⚡ Lightning-fast delivery: 1–3 business days globally",
  "🛡️ Every site includes SSL security & GDPR compliance",
  "📱 100% mobile-responsive — looks perfect on any device",
  "🚀 Built with modern tech stack (React, Tailwind, optimized hosting)",
  "🎯 Conversion-focused design — not just pretty, but profitable",
  "💬 Real human support via WhatsApp — no bots, no tickets",
  "🔧 Free 30-day post-launch support for tweaks & fixes",
  "📊 Google Analytics & SEO setup included at no extra cost",
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function ValueSection() {
  return (
    <section id="value" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left content — shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-dm font-medium tracking-[0.18em] text-primary uppercase mb-8">
              <div className="w-8 h-[1px] bg-primary" />
              Why Choose Us
            </span>
            <h2 className="mt-2 font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              More Than Just Affordable —{" "}
              <span className="text-primary">
                We're Professional
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-muted-foreground font-dm text-base sm:text-lg leading-[1.8] font-light">
              Yes, our prices are competitive — but that's not why clients stay. They stay because we deliver <strong className="text-foreground font-medium">quality work, on time, every time</strong>. We're not a template factory. Every website is custom-built using modern technology (React, Tailwind CSS, optimized hosting) that loads in under 2 seconds and looks stunning on any device.
            </p>
            <p className="mt-4 text-muted-foreground font-dm text-base sm:text-lg leading-[1.8] font-light">
              We prove our expertise by showing you real work first — like our <strong className="text-foreground font-medium">Bright Future Holders / SkillWise</strong> platform: a fully functional, MICT SETA-accredited training site with course management, e-commerce, student reviews, and authentication. That's not a demo — it's live. For entrepreneurs starting out, our <strong className="text-primary font-medium">R250 portfolio websites</strong> remove the barrier to entry, but the quality stays the same. Every site includes SSL security, mobile optimization, SEO setup, and free 30-day support. You're not just buying a website — you're partnering with a team that cares about your success.
            </p>
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm sm:text-base text-foreground font-dm leading-relaxed">
                <strong className="text-primary">💎 What sets us apart:</strong> We're transparent (no hidden fees), responsive (reply within hours, not days), and reliable (50+ websites launched, 100% on-time delivery). We don't just build websites — we build trust. From your first WhatsApp message to the moment you go live, you'll have a dedicated team that treats your project like our own.
              </p>
            </div>

            <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm font-dm text-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {point}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full sm:w-auto font-dm font-medium rounded px-8 py-5 gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 bg-primary text-primary-foreground inline-flex items-center justify-center"
              >
                Start Your Project Today
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/27823562239?text=Hi!%20I%27d%20like%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-outline"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border overflow-hidden rounded">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card"
              >
                <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center mb-3">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-dm font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                  {cat.title}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs font-dm text-muted-foreground flex items-center gap-2 font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
