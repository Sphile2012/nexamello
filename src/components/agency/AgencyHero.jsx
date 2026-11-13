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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#05070d] pt-16">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/8 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.1] [background-size:min(96vw,1120px)]"
        style={{ backgroundImage: "url('/nexa-wordmark.svg?v=glass2')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,7,13,0.3)_0%,rgba(5,7,13,0.62)_58%,#05070d_100%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl space-y-8 text-center [text-shadow:0_2px_18px_rgba(0,0,0,0.9)]"
        >
          <div className="inline-flex rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(37,99,235,0.12)] backdrop-blur-md">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-50 sm:text-base">
              Web design &amp; digital marketing · South Africa
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Websites. Brands.
            <span className="mt-2 block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text pb-2 font-medium text-transparent">
              More customers.
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl font-normal leading-relaxed text-white/90 sm:text-2xl">
            We build websites and run digital marketing for South African businesses, with thoughtful design, clear pricing, and support from real people.
          </p>

          <p className="text-base font-semibold leading-relaxed text-white sm:text-lg">
            Websites from <span className="text-white">R2,500</span>
            <span className="px-2 text-white/25">·</span>
            Online stores from <span className="text-white">R5,000</span>
            <span className="px-2 text-white/25">·</span>
            Maintenance from <span className="text-white">R250/month</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact#booking")}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 px-8 py-5 text-lg font-bold text-white shadow-[0_16px_40px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] transition-shadow hover:shadow-[0_22px_50px_rgba(37,99,235,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] sm:w-auto"
            >
              <CalendarDays className="h-5 w-5" />
              Book Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#25D366]/40 bg-[#25D366]/[0.1] px-8 py-5 text-lg font-bold text-[#8bf0ad] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.16] sm:w-auto"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp Us
            </motion.button>
          </div>

          <p className="text-base font-medium text-white/75 sm:text-lg">
            Free consultation <span className="px-2 text-white/20">·</span>
            No contracts <span className="px-2 text-white/20">·</span>
            Reply within 1 hour
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {["Fast turnaround", "Straight talking support", "Made for local business"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>
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
