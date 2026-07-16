import { motion } from "framer-motion";
import { Award, Users, Clock, Shield, Trophy, Target, CheckCircle2, Sparkles } from "lucide-react";

const badges = [
  {
    icon: Trophy,
    title: "100% Success Rate",
    description: "Every project delivered. Zero cancellations. Zero refunds.",
    color: "from-yellow-500 to-amber-500",
    stat: "50+",
    statLabel: "Sites Launched"
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "Never missed a deadline. Your timeline is our commitment.",
    color: "from-blue-500 to-cyan-500",
    stat: "100%",
    statLabel: "On Schedule"
  },
  {
    icon: Users,
    title: "Real Client Results",
    description: "40% more bookings. 3x faster load times. Measurable impact.",
    color: "from-green-500 to-emerald-500",
    stat: "5-Star",
    statLabel: "Reviews"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade SSL, GDPR compliance, and regular security audits.",
    color: "from-purple-500 to-indigo-500",
    stat: "SSL",
    statLabel: "Certified"
  },
];

const guarantees = [
  "✅ 30-Day Post-Launch Support (Free)",
  "✅ Mobile-Responsive or Full Refund",
  "✅ Unlimited Revisions Until You're Happy",
  "✅ Source Code Ownership (It's Yours)",
];

export default function TrustBadgesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            Trust & Excellence
          </span>
          <h2 className="mt-2 font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Not Just Promises —{" "}
            <span className="text-primary">
              Proven Performance
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-dm text-base sm:text-lg">
            Our reputation is built on <strong className="text-foreground">results, not marketing.</strong> Here's what makes us different.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-4 shadow-lg`}>
                <badge.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative font-dm font-bold text-foreground text-base sm:text-lg mb-2">
                {badge.title}
              </h3>
              <p className="relative text-xs sm:text-sm text-muted-foreground font-dm leading-relaxed mb-4">
                {badge.description}
              </p>

              {/* Stat */}
              <div className="relative pt-3 border-t border-border/40">
                <div className="flex items-end gap-1.5">
                  <span className={`font-space font-bold text-2xl bg-gradient-to-br ${badge.color} bg-clip-text text-transparent`}>
                    {badge.stat}
                  </span>
                  <span className="text-xs text-muted-foreground font-dm pb-0.5">{badge.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-cyan-500/5 to-primary/5 border border-primary/20">
            <div className="text-center mb-6">
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-foreground mb-2">
                Our Iron-Clad Guarantees
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-dm">
                We stand behind our work. Period.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {guarantees.map((guarantee, i) => (
                <motion.div
                  key={guarantee}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-background/80 border border-border/40 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-dm text-foreground font-medium">{guarantee}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6 sm:mt-8"
            >
              <a
                href="https://wa.me/27823562239?text=Hi!%20I%27d%20like%20to%20learn%20more%20about%20your%20guarantees%20and%20get%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-dm font-semibold text-sm sm:text-base hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                <Shield className="w-4 h-4" />
                Start Your Risk-Free Project
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-xs sm:text-sm text-muted-foreground font-dm"
        >
          💡 <strong className="text-foreground">Still not convinced?</strong> Check out our live portfolio at{" "}
          <a href="https://uphumeh.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            uphumeh.netlify.app
          </a>
          {" "}and{" "}
          <a href="https://brightfutureholders.co.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            brightfutureholders.co.za
          </a>
        </motion.p>
      </div>
    </section>
  );
}
