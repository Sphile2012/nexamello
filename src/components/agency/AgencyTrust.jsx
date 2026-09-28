import { motion } from "framer-motion";
import { MapPin, MessageSquare, Shield, Zap, Users, Clock, CheckCircle, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const trustBadges = [
  { icon: Zap,       label: "3–5 Day Delivery",   sub: "Website live before the week is out" },
  { icon: Shield,    label: "Hosting Included",    sub: "No extra setup costs, ever" },
  { icon: Users,     label: "250+ Projects",       sub: "Businesses across SA and beyond" },
  { icon: Clock,     label: "Fast Support",        sub: "We pick up — no ticket queues" },
];

const whyItems = [
  {
    icon: CheckCircle,
    title: "Straight talking",
    body: "No jargon, no upselling. We tell you what you need, quote you a price, and get it done.",
  },
  {
    icon: Globe,
    title: "Built for South Africa",
    body: "Mobile-first, data-conscious, and designed to load fast on SA networks — not just in Cape Town.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-first",
    body: "Drop us a message on WhatsApp and you'll be talking to a real person within the hour.",
  },
  {
    icon: Zap,
    title: "Websites that actually convert",
    body: "We don't just make things look good — we make sure visitors know what to do and do it.",
  },
  {
    icon: Shield,
    title: "Everything included upfront",
    body: "Hosting, SSL, mobile design, contact form — it's all in the price we quote you, not added later.",
  },
  {
    icon: Users,
    title: "We stick around",
    body: "Once your site is live, we're still available. Need a change? Send a WhatsApp.",
  },
];

export default function AgencyTrust() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm text-white/60 font-light">South Africa · Working with clients worldwide</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4">
            Why businesses<span className="font-normal"> choose us</span>
          </h2>
          <p className="text-lg text-white/50 font-light max-w-lg mx-auto">
            We keep things simple — good work, fair prices, and we actually answer the phone.
          </p>
        </motion.div>

        {/* Trust badges — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/8 transition-colors duration-300"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-sm font-semibold text-white">{badge.label}</div>
              <div className="text-xs text-white/40 font-light mt-1 leading-snug">{badge.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Why us grid — 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mt-0.5">
                <item.icon className="w-4.5 h-4.5 text-blue-400 w-[18px] h-[18px]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20"
        >
          <div>
            <p className="text-lg font-semibold text-white mb-1">Let's talk about your project</p>
            <p className="text-sm text-white/50 font-light">WhatsApp us now — we'll reply within the hour.</p>
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
