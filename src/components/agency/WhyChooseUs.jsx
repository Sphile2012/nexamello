import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "We think before we build",
    body: "Before touching any design, we ask what your business actually needs — more calls, more walk-ins, more sales. Then we build towards that.",
  },
  {
    icon: BarChart3,
    title: "You can see what's working",
    body: "We set up analytics so you know where your traffic comes from and what pages people actually use. No guessing.",
  },
  {
    icon: Zap,
    title: "Fast — for real",
    body: "Most websites are done in 3–5 days. We've built full sites over a weekend. If you need it quickly, tell us.",
  },
  {
    icon: Users,
    title: "One team, everything covered",
    body: "Website, logo, social media, ads — you deal with one person who knows your business, not a different agency for each thing.",
  },
  {
    icon: DollarSign,
    title: "The price we say is the price",
    body: "Websites from R2,500. Stores from R5,000. We quote upfront and stick to it — no extras added once work starts.",
  },
  {
    icon: HeadphonesIcon,
    title: "We don't disappear after launch",
    body: "A lot of agencies build your site and vanish. We stay reachable. Got a change? Send a WhatsApp and we'll sort it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/60 font-light">How we work</span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-5">
            What makes us<span className="font-normal"> different</span>
          </h2>
          <p className="text-xl text-white/45 font-light max-w-xl mx-auto">
            We're a small team — which means you talk to the person doing the actual work.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all duration-400">
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">{reason.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-pink-500/8 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Sites built" },
              { value: "3–5",  label: "Days to delivery" },
              { value: "R2,500", label: "Starting price" },
              { value: "8+",   label: "Years doing this" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/40 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
