import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "We don't just follow trends—we create them. Every campaign is backed by strategic thinking and creative innovation."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Campaigns",
      description: "Numbers don't lie. We use analytics and insights to optimize every campaign for maximum performance and ROI."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Speed matters in advertising. We deliver quality work quickly without compromising on excellence or attention to detail."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team brings years of expertise across branding, design, development, and digital marketing to every project."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear pricing and honest communication from the first consultation to final delivery."
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "We don't disappear after launch. Dedicated support and continuous optimization keep your campaigns performing at their best."
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
            We combine creativity with strategy to deliver results that matter
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
