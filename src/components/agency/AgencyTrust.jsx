import { motion } from "framer-motion";
import { Star, MapPin, MessageSquare, Shield, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    name: "Sipho Dlamini",
    business: "Dlamini Auto Repairs",
    location: "Johannesburg",
    rating: 5,
    text: "NexaWeb built our website in just 2 days! Customers now find us on Google and bookings are up 40%. Worth every rand.",
  },
  {
    name: "Naledi Khumalo",
    business: "Khumalo Boutique",
    location: "Pretoria",
    rating: 5,
    text: "Our online store went live in under a week. Sales doubled in the first month. The team is fast, professional, and affordable.",
  },
  {
    name: "Thabo Mokoena",
    business: "TM Construction",
    location: "Cape Town",
    rating: 5,
    text: "We were invisible online before NexaWeb. Now we rank on Google and get calls every day from our website. Game changer.",
  },
];

const trustBadges = [
  { icon: Zap,          label: "3–5 Day Delivery",        sub: "Live fast, grow faster" },
  { icon: Shield,       label: "Hosting Included",         sub: "No hidden setup fees" },
  { icon: Users,        label: "250+ Projects Done",       sub: "Proven track record" },
  { icon: MessageSquare,label: "WhatsApp Support",         sub: "Always available" },
];

export default function AgencyTrust() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-black">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-5">
            <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/60 font-light">Trusted by South African businesses</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4">
            Real Results,<span className="font-normal"> Real Reviews</span>
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl mx-auto">
            Over 250 businesses across South Africa trust Nexa Web to grow their online presence.
          </p>

          {/* Location badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/60 font-light">South Africa · Serving clients globally</span>
          </div>
        </motion.div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-sm font-medium text-white">{badge.label}</div>
              <div className="text-xs text-white/40 font-light mt-1">{badge.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-current" aria-hidden="true" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-white/75 font-light leading-relaxed mb-5 text-sm">
                "{review.text}"
              </p>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-white">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{review.name}</div>
                  <div className="text-xs text-white/40 font-light">
                    {review.business} · {review.location}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* WhatsApp CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20"
        >
          <div>
            <p className="text-lg font-medium text-white mb-1">Ready to grow your business?</p>
            <p className="text-sm text-white/50 font-light">Message us now — we reply within the hour.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://wa.me/27823562239?text=Hi%21%20I%27d%20like%20to%20get%20a%20website%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#25D366]/90 transition-all duration-200 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us Now
            </a>
            <button
              onClick={() => navigate("/contact#booking")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
            >
              Book a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
