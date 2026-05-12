import { motion } from "framer-motion";
import { Clock, CreditCard, CheckCircle2, Zap, ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      phase: "Book & Deposit",
      time: "Day 1",
      amount: "R1,500",
      type: "Non-refundable",
      description: "Secure your project with our booking deposit. This reserves your slot and kickstarts the design process immediately.",
      icon: CreditCard,
      gradient: "from-[#FF6B6B] to-[#FF8E72]",
      number: "01",
    },
    {
      phase: "We Build",
      time: "1–3 Days",
      amount: "In Progress",
      type: "We handle everything",
      description: "We design, develop, and test your website. Custom design, responsive layout, SEO setup, and all integrations included.",
      icon: Zap,
      gradient: "from-primary to-blue-400",
      number: "02",
    },
    {
      phase: "Launch & Pay",
      time: "On Completion",
      amount: "Balance Due",
      type: "Pay on delivery",
      description: "Review your completed site, request any final tweaks, pay the balance, and we push it live. You're online!",
      icon: CheckCircle2,
      gradient: "from-[#25D366] to-[#34E89E]",
      number: "03",
    },
  ];

  const examples = [
    { plan: "4-Page Starter", total: "R500", deposit: "R500 (full)", balance: "—" },
    { plan: "Full Website", total: "R2,500", deposit: "R1,500", balance: "R1,000" },
    { plan: "Scale / Custom", total: "From R5,000", deposit: "R1,500", balance: "Per quote" },
  ];

  return (
    <section id="workflow" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5" />
            Fast & Transparent
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            How We Work &{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Payment Structure
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-base sm:text-lg">
            Lightning-fast turnaround with a simple, transparent payment process. Zero hidden fees.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-16 left-[calc(33%+2rem)] right-[calc(33%+2rem)] h-0.5 bg-gradient-to-r from-border/60 via-primary/30 to-border/60" />

          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-px shadow-xl`}
                >
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* Card */}
              <div className="rounded-2xl bg-card/60 border border-border/50 p-5 sm:p-6 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-black/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-inter font-bold text-primary uppercase tracking-widest">
                      Step {step.number}
                    </span>
                    <h3 className="font-space font-bold text-lg sm:text-xl text-foreground mt-1">{step.phase}</h3>
                  </div>
                  <span className="text-xs font-inter font-semibold px-2.5 py-1 rounded-lg bg-secondary/60 text-muted-foreground flex-shrink-0">
                    {step.time}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-secondary/40">
                  <span className="font-space font-bold text-base sm:text-lg text-foreground">{step.amount}</span>
                  <span className="text-xs font-inter text-muted-foreground">{step.type}</span>
                </div>

                <p className="text-xs sm:text-sm font-inter text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6 sm:p-8 lg:p-10"
        >
          <h3 className="font-space font-bold text-lg sm:text-xl text-foreground text-center mb-6 sm:mb-8">
            Payment Breakdown by Plan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {examples.map((ex, i) => (
              <motion.div
                key={ex.plan}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card/50 border border-border/40 p-4 sm:p-5"
              >
                <p className="text-xs font-inter font-bold text-primary uppercase tracking-widest mb-4">
                  {ex.plan} Plan
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span className="text-xs sm:text-sm font-inter text-muted-foreground">Booking Deposit</span>
                    <span className="font-space font-bold text-foreground text-sm sm:text-base">{ex.deposit}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span className="text-xs sm:text-sm font-inter text-muted-foreground">Website Total</span>
                    <span className="font-space font-bold text-foreground text-sm sm:text-base">{ex.total}</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-xl bg-primary/10">
                    <span className="text-xs sm:text-sm font-inter font-semibold text-foreground">Balance Due</span>
                    <span className="font-space font-bold text-primary text-sm sm:text-base">{ex.balance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs sm:text-sm font-inter text-muted-foreground text-center mt-6 sm:mt-8 max-w-2xl mx-auto">
            The <span className="text-primary font-semibold">R1,500 booking fee</span> (non-refundable) applies to full website and larger builds.
            The <span className="text-primary font-semibold">R500 four-page starter</span> is paid in full when you book. Remaining balances are due on completion before go-live.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
