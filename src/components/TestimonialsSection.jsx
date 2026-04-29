import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Clock, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sipho Dlamini",
    business: "Dlamini Auto Repairs",
    location: "Johannesburg",
    text: "NexaWeb built our website in just 2 days! Customers now find us on Google and bookings have increased by 40%. Absolutely worth every rand.",
    rating: 5,
    avatar: "SD",
    color: "from-blue-500 to-primary",
    result: "+40% bookings",
  },
  {
    name: "Thandi Nkosi",
    business: "Thandi's Hair Studio",
    location: "Durban",
    text: "Professional, fast, and affordable. My salon's website looks stunning on mobile. I've already recommended NexaWeb to 3 other business owners.",
    rating: 5,
    avatar: "TN",
    color: "from-purple-500 to-pink-500",
    result: "3 referrals given",
  },
  {
    name: "Riaan van der Berg",
    business: "VDB Construction",
    location: "Cape Town",
    text: "We went from zero online presence to ranking on Google's first page within weeks. The WhatsApp integration alone brings in 10+ leads per week.",
    rating: 5,
    avatar: "RV",
    color: "from-green-500 to-emerald-400",
    result: "10+ leads/week",
  },
];

const stats = [
  { value: "50+", label: "Websites Launched", icon: Award, color: "text-primary" },
  { value: "1–3", label: "Day Turnaround", icon: Clock, color: "text-yellow-400" },
  { value: "100%", label: "Client Satisfaction", icon: Users, color: "text-green-400" },
  { value: "R2,500", label: "Starting Price", icon: TrendingUp, color: "text-blue-400" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-all"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3`} />
              <div className="font-space font-bold text-3xl sm:text-4xl text-foreground mb-1">{stat.value}</div>
              <div className="text-xs font-inter text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            Client Stories
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Trusted by South African{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Business Owners
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Real results from real businesses across South Africa.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative p-7 rounded-3xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-inter font-bold text-primary mb-4 w-fit">
                <TrendingUp className="w-3 h-3" />
                {t.result}
              </div>

              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6 italic flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="font-space font-bold text-sm text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-space font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs font-inter text-muted-foreground">{t.business} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground font-inter mb-4">
            Ready to join our growing list of happy clients?
          </p>
          <a
            href="https://wa.me/27823562239?text=Hi%20NexaWeb!%20I%27d%20like%20to%20get%20started."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-inter font-bold text-sm hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
          >
            Start Your Project Today
            <Star className="w-4 h-4 fill-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
