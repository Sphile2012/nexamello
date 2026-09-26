import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AgencyHero() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi! I'd like to get a website quote. Can you help?");
    window.open(`https://wa.me/27823562239?text=${msg}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/70 font-light">
                ✨ Creative Advertising Agency · South Africa
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[0.9] tracking-tight">
            We Design Brands,<br />
            <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed pt-2">
            Stop losing customers to competitors with better websites. We build fast, beautiful sites
            that turn visitors into paying customers — delivered in 3–5 days.
          </p>

          {/* Pricing line */}
          <p className="text-base sm:text-lg text-white/70 font-medium">
            Websites from{" "}
            <span className="text-white font-semibold">R2,500</span>
            <span className="px-2 text-white/30">·</span>
            Online stores from{" "}
            <span className="text-white font-semibold">R5,000</span>
            <span className="px-2 text-white/30">·</span>
            Maintenance from{" "}
            <span className="text-white font-semibold">R250/month</span>
          </p>

          {/* CTA Buttons — 2-click booking */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {/* Primary: Book Now → goes straight to /contact#booking */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact#booking")}
              className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-400 hover:to-purple-500 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <CalendarDays className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary: WhatsApp — instant 1-click contact */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="group w-full sm:w-auto px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full font-semibold text-lg hover:bg-[#25D366]/20 hover:border-[#25D366]/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us Now
            </motion.button>
          </div>

          {/* Trust micro-copy */}
          <p className="text-sm text-white/35 font-light pt-2">
            Free consultation · No obligation · Reply within 1 hour
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto border-t border-white/10"
          >
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "98%",  label: "Client Satisfaction" },
              { number: "3–5",  label: "Days to Delivery" },
              { number: "8+",   label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center pt-8">
                <div className="text-4xl sm:text-5xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/40 font-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
