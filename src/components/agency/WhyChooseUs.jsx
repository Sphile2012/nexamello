import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Zap, Users, DollarSign, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "We think before we build",
    body: "Before touching any design, we ask what your business actually needs: more calls, more in person visits, or more sales. Then we build towards that.",
  },
  {
    icon: BarChart3,
    title: "You can see what's working",
    body: "We set up analytics so you know where your traffic comes from and what pages people actually use. No guessing.",
  },
  {
    icon: Zap,
    title: "Fast and reliable",
    body: "Most websites are done in 3 to 5 days. We've built full sites over a weekend. If you need it quickly, tell us.",
  },
  {
    icon: Users,
    title: "One team, everything covered",
    body: "Website, logo, social media, and ads. You deal with one person who knows your business, not a different agency for each thing.",
  },
  {
    icon: DollarSign,
    title: "The price we say is the price",
    body: "Websites from R2,500. Stores from R5,000. We quote upfront and stick to it, with no extras added once work starts.",
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
          <p className="text-xl sm:text-2xl text-white/75 font-normal max-w-xl mx-auto">
            We're a small team, which means you talk to the person doing the actual work.
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
              whileHover={{ y: -6, rotateX: 2, rotateY: i % 2 === 0 ? 1.5 : -1.5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group [perspective:1000px]"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-blue-950/20 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-blue-300/20 transition-all duration-300 [transform-style:preserve-3d]">
                <div className="mb-5 [transform:translateZ(22px)]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-base text-white/75 font-normal leading-relaxed">{reason.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 sm:p-8 rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(59,130,246,0.12)] backdrop-blur-xl"
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            {[
              "No inflated claims",
              "Clear scope from day one",
              "Real support after launch",
            ].map((item, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(15,23,42,0.35)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
