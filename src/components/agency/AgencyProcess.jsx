import { motion } from "framer-motion";
import { Search, Lightbulb, Palette, Rocket } from "lucide-react";

export default function AgencyProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We learn about your business, target customers, goals, and competitive landscape to create a winning strategy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy",
      description: "We develop a comprehensive plan that aligns creative vision with your business goals—more customers, higher sales, stronger brand.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Palette,
      title: "Design & Development",
      description: "Our team creates stunning designs, high-performance websites (3-5 days), and compelling campaigns that convert.",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Grow",
      description: "We launch fast, track results, and continuously optimize to maximize ROI and drive sustained business growth.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/70 font-light">Our Process</span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
            How We<span className="font-normal"> Work</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            A proven process that transforms businesses through strategic creative and digital marketing
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-500">
                {/* Step Number */}
                <div className="absolute top-8 right-8 text-8xl font-light text-white/5 group-hover:text-white/10 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-8 relative z-10">
                  <div className={`inline-flex w-20 h-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} p-0.5`}>
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-normal text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-white/50 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
        >
          <div className="text-center">
            <h3 className="text-3xl font-light text-white mb-4">
              Website Delivery Time
            </h3>
            <p className="text-white/50 font-light mb-8">
              From briefing to live website—we move fast
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-6xl font-light text-white">3-5</div>
              <div className="text-left">
                <div className="text-2xl font-normal text-white">Days</div>
                <div className="text-sm text-white/40">Average Delivery</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
