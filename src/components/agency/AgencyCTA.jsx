import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AgencyCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/60 font-light">Let's get started</span>
            </div>
          </div>

          {/* Headline — direct, no fluff */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 leading-[1.05]">
            Your website should be<br />
            <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              working for you
            </span>
          </h2>

          {/* Sub — plain, honest */}
          <p className="text-lg sm:text-xl text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            If people land on your site and don't call, book, or buy — something's off.
            We fix that. Fast turnaround, honest pricing, no hand-holding required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact#booking")}
              className="group w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-semibold text-base hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-3"
            >
              Book a Free Chat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'd like to get a quote.");
                window.open(`https://wa.me/27823562239?text=${msg}`, "_blank");
              }}
              className="group w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-medium text-base hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </motion.button>
          </div>

          {/* Simple trust line */}
          <p className="text-sm text-white/30 font-light">
            Free consultation &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; Reply within 1 hour
          </p>
        </motion.div>
      </div>
    </section>
  );
}
