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
  "Delivered in 1–3 business days globally",
  "Serving clients in South Africa, UK, USA, Australia & beyond",
  "Full support from design to launch — remotely",
  "We work with anyone, anywhere in the world",
  "PayFast, Stripe, PayPal & WhatsApp integration",
  "Free consultation — no commitment needed",
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
              We Don't Just Build —{" "}
              <span className="text-primary">
                We Grow
              </span>
            </h2>
            <p className="mt-5 sm:mt-6 text-muted-foreground font-dm text-base sm:text-lg leading-[1.8] font-light">
              Your website is just the beginning. We offer hosting, maintenance, redesigns, SEO, social media setup, analytics, business email, and AI chatbot integration — building recurring value for businesses <strong className="text-foreground font-medium">across South Africa and worldwide</strong>.
            </p>
            <p className="mt-4 text-muted-foreground font-dm text-base sm:text-lg leading-[1.8] font-light">
              To make sure clients book us and purchase websites from us, we lead with proof of what we can build. We share our live work — like the <strong className="text-foreground font-medium">Bright Future Holders / SkillWise</strong> site, a fully functional, MICT SETA-accredited training platform with course pages, a shop, reviews, and a sign-in system — so clients can see we deliver real, professional websites, not templates. For those just starting out or on a budget, we offer a <strong className="text-primary font-medium">portfolio website for just R250</strong> (sample: uphumeh.netlify.app), which removes the price barrier and gets them in the door. We make it easy to say yes — clear pricing, quick WhatsApp communication, and a simple process from first chat to live website. We target small businesses, freelancers, students, and training providers across South Africa who need an online presence but don't know where to start. Word of mouth, showcasing our sites on social media, and following up with every lead consistently turns interest into bookings. Clients choose us because we're local, affordable, fast, and we build sites that actually work.
            </p>

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
