import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Sipho Dlamini",
    business: "Dlamini Auto Repairs",
    location: "Johannesburg, SA",
    text: "NexaWeb built our website in just 2 days! Customers now find us on Google and bookings have increased by 40%. Absolutely worth every rand.",
    rating: 5,
    avatar: "SD",
    color: "from-blue-500 to-primary",
    result: "+40% bookings",
    resultColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Thandi Nkosi",
    business: "Thandi's Hair Studio",
    location: "Durban, SA",
    text: "Professional, fast, and affordable. My salon's website looks stunning on mobile. I've already recommended Nexa Web Solutions to 3 other business owners.",
    rating: 5,
    avatar: "TN",
    color: "from-purple-500 to-pink-500",
    result: "3 referrals given",
    resultColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    name: "James O'Brien",
    business: "O'Brien Consulting",
    location: "Dublin, Ireland",
    text: "I was skeptical about working with a team in South Africa, but the communication was seamless and the website exceeded my expectations. Delivered in 3 days!",
    rating: 5,
    avatar: "JO",
    color: "from-green-500 to-emerald-400",
    result: "Delivered in 3 days",
    resultColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
];

const stats = [
  { value: "50+", label: "Websites Launched", color: "text-primary" },
  { value: "1–3", label: "Day Turnaround", color: "text-yellow-400" },
  { value: "100%", label: "Client Satisfaction", color: "text-green-400" },
  { value: "🌍", label: "Global Clients", color: "text-blue-400" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-card/70 border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg"
            >
              <div className={`font-space font-bold text-2xl sm:text-3xl lg:text-4xl ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-inter text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            Client Stories
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Trusted by Businesses{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-base sm:text-lg">
            Real results from real businesses — in South Africa and across the globe.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Large quote watermark */}
              <div
                className="absolute top-4 right-5 font-space font-black text-[7rem] leading-none text-foreground/[0.04] select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Result badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-inter font-bold mb-4 w-fit ${t.resultColor}`}>
                <TrendingUp className="w-3 h-3" />
                {t.result}
              </div>

              {/* Quote */}
              <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6 italic flex-1 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="font-space font-bold text-xs sm:text-sm text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-space font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-[11px] sm:text-xs font-inter text-muted-foreground">{t.business} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
