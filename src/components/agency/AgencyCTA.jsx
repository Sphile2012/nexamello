import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AgencyCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] py-28 sm:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 [perspective:1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ rotateX: 1, y: -3 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] via-slate-950/85 to-blue-950/30 px-6 py-12 shadow-[0_35px_100px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="rounded-full border border-blue-200/15 bg-blue-200/[0.06] px-5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(37,99,235,0.1)] backdrop-blur-sm">
              <span className="text-sm text-white/60 font-light">Let's get started</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6 leading-[1.05]">
            Your website should be<br />
            <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              working for you
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            If people land on your site and don't call, book, or buy, something's off.
            We fix that with a fast turnaround, honest pricing, and simple communication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact#booking")}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.32),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-200 hover:shadow-[0_22px_48px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] sm:w-auto"
            >
              Book a Free Chat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'd like to get a quote.");
                window.open(`https://wa.me/27823562239?text=${msg}`, "_blank");
              }}
              className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
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
