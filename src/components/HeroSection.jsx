import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Zap, CheckCircle2, TrendingUp, Users, Smartphone } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 text-xs font-dm font-medium tracking-[0.18em] text-primary uppercase mb-8 animate-fade-up"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="w-8 h-[1px] bg-primary" />
          Web design services
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16 pb-16 border-b border-border animate-fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight text-left">
            Your business deserves<br />
            a website that <em className="text-primary not-italic">works.</em>
          </h1>
          <p className="text-base sm:text-lg font-dm text-muted-foreground leading-[1.8] font-light max-w-md text-left">
            We build <strong className="text-foreground font-medium">real, fully functional websites</strong> for small businesses, freelancers, and training providers across South Africa. No tech knowledge needed — just tell us what you need, and we build it.
          </p>
        </motion.div>

        {/* Numbered cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-20 overflow-hidden rounded animate-fade-up"
          style={{ animationDelay: '0.25s' }}
        >
          {[
            { num: '01', title: 'Custom websites', text: 'Pages, shop, bookings, and more — built to grow your business from day one.' },
            { num: '02', title: 'Portfolio sites', text: 'A professional online presence to showcase your work and attract clients.' },
            { num: '03', title: 'Fast delivery', text: 'From first WhatsApp to live website — quick, clear timelines every step.' },
            { num: '04', title: 'SA-based team', text: 'We are local, responsive, and available on WhatsApp. Real people, real support.' },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.35 + i * 0.07 }}
              className="premium-card"
            >
              <div className="font-playfair text-5xl font-normal text-secondary leading-none mb-5" style={{ WebkitTextStroke: '1px hsl(var(--primary))' }}>{item.num}</div>
              <p className="text-sm font-dm font-medium text-foreground mb-2 tracking-tight">{item.title}</p>
              <p className="text-xs font-dm text-muted-foreground leading-[1.65] font-light">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Price band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="premium-band mb-20 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          <div>
            <p className="text-xs font-dm tracking-[0.16em] text-primary uppercase font-medium mb-3">Complete pricing</p>
            <p className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-none mb-2 tracking-tight">R250 – R2,500</p>
            <p className="text-sm text-primary-foreground/55 font-light max-w-sm leading-[1.65]">From portfolio sites to full custom websites — transparent pricing for every budget.</p>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px]">
            {['Portfolio: R250', '4-page site: R500', 'Full website: R2,500', 'Hosting: R250/month'].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-primary-foreground/75 font-light">
                <div className="w-4.5 h-4.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="premium-stats mb-16 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { num: 'R250', label: 'Starting price' },
            { num: 'R2,500', label: 'Full website' },
            { num: 'R250/mo', label: 'Hosting' },
            { num: 'SA.', label: 'Local support' },
          ].map((item) => (
            <div key={item.label} className="premium-stat">
              <div className="font-playfair text-4xl font-semibold text-foreground leading-none mb-1 tracking-tight">
                <span className="text-primary">{item.num}</span>
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.1em] font-normal">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5 flex-wrap animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%27d%20like%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Chat on WhatsApp →
          </a>
          <a
            href="https://uphumeh.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View portfolio sample
          </a>
          <a
            href="https://brightfutureholders.co.za/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            See all services ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
