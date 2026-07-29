import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "We're your growth partner—not just a design studio. Every project is backed by strategic thinking that drives real business results."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Results",
      description: "We measure what matters: more customers, higher sales, better brand recognition, and increased online visibility for your business."
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Websites delivered in 3-5 days. Marketing campaigns launched quickly. We move at the speed your business needs to grow."
    },
    {
      icon: Users,
      title: "Full-Service Agency",
      description: "From logos to websites to marketing campaigns—we handle everything so you can focus on running your business."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear pricing from R2,500 for websites to custom packages for ongoing marketing. No hidden fees, no surprises."
    },
    {
      icon: HeadphonesIcon,
      title: "Your Long-Term Partner",
      description: "We don't disappear after launch. Ongoing support, optimization, and strategic guidance to keep your business growing."
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto px-6">
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
              <span className="text-sm text-white/70 font-light">Why Us</span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
            Why Choose<span className="font-normal"> Our Agency</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            More than a design studio—we're your partner in business growth
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-500">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-normal text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "50+", label: "Brands Launched" },
              { value: "8+", label: "Years in Business" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/40 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
