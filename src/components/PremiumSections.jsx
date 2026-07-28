import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe2, Zap, Users, TrendingUp, Code, Palette, Shield } from "lucide-react";

export default function PremiumSections() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Serving clients in 50+ countries worldwide"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance"
    },
    {
      icon: Code,
      title: "Modern Tech",
      description: "Built with cutting-edge technologies"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security standards"
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Global Support" }
  ];

  return (
    <div ref={containerRef} className="relative bg-black">
      
      {/* Features Section - Tesla Style */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
              Built for<span className="font-normal"> Excellence</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Every detail matters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-white/70" />
                    </div>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-4">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-white/50 font-light tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-20"
          >
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
                Simple<span className="font-normal"> Process</span>
              </h2>
              <p className="text-xl text-white/50 font-light">
                From concept to launch in three steps
              </p>
            </div>

            <div className="space-y-16">
              {[
                { step: "01", title: "Discover", desc: "We understand your vision and goals" },
                { step: "02", title: "Design", desc: "Creating elegant, functional experiences" },
                { step: "03", title: "Deliver", desc: "Launch your website to the world" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <div className="text-6xl sm:text-7xl font-light text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {item.step}
                  </div>
                  <div className="flex-1 py-8 border-t border-white/10 group-hover:border-white/30 transition-colors duration-500">
                    <h3 className="text-2xl sm:text-3xl font-normal text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Tesla Style */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
            Ready to go<br />
            <span className="font-normal">global?</span>
          </h2>
          <p className="text-xl text-white/50 font-light mb-12">
            Let's build something extraordinary together
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi! I'm ready to take my business global with a world-class website.");
              window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
            }}
            className="group px-12 py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-3"
          >
            Start Your Project
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </section>
    </div>
  );
}
