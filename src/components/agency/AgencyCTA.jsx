import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function AgencyCTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-block mb-8">
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/70 font-light">Let's Create Something Amazing</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1]">
            Ready to Grow<br />
            <span className="font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Brand?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's create something extraordinary together. Book a free consultation and discover how we can transform your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to book a free consultation.");
                window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
              }}
              className="group px-12 py-6 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-3"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent("Hi! I have a question about your services.");
                window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
              }}
              className="group px-12 py-6 bg-white/5 border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { value: "250+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "50+", label: "Brands" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/40 font-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
