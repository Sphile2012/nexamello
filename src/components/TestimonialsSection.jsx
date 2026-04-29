import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sipho Dlamini",
    business: "Dlamini Auto Repairs",
    location: "Johannesburg",
    text: "NexaWeb built our website in just 2 days! Customers now find us on Google and bookings have increased by 40%. Absolutely worth every rand.",
    rating: 5,
    avatar: "SD",
    color: "from-blue-500 to-primary",
  },
  {
    name: "Thandi Nkosi",
    business: "Thandi's Hair Studio",
    location: "Durban",
    text: "Professional, fast, and affordable. My salon's website looks stunning on mobile. I've already recommended NexaWeb to 3 other business owners.",
    rating: 5,
    avatar: "TN",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Riaan van der Berg",
    business: "VDB Construction",
    location: "Cape Town",
    text: "We went from zero online presence to ranking on Google's first page within weeks. The WhatsApp integration alone brings in 10+ leads per week.",
    rating: 5,
    avatar: "RV",
    color: "from-green-500 to-emerald-400",
  },
];

const stats = [
  { value: "50+", label: "Websites Launched" },
  { value: "1–3", label: "Day Turnaround" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "R2,500", label: "Starting Price" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
              className="text-center p-6 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="font-space font-bold text-3xl sm:text-4xl text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-inter text-muted-foreground">{stat.label}</div>
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
          <span className="text-sm font-inter font-semibold text-primary uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="mt-4 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Trusted by South African{" "}
            <span className="text-primary">Business Owners</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Real results from real businesses. See what our clients say about working with us.
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
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-7 rounded-3xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/15" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
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
      </div>
    </section>
  );
}