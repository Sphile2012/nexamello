import { motion } from "framer-motion";
import { Clock, CreditCard, CheckCircle2, Zap } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      phase: "Booking",
      time: "Day 1",
      amount: "R1,500",
      type: "Non-refundable",
      description: "Secure your project with our booking deposit. This reserves your slot and kickstarts the design process.",
      icon: CreditCard,
      color: "from-[#FF6B6B] to-[#FF8E72]",
    },
    {
      phase: "Development",
      time: "1–3 Days",
      amount: "In Progress",
      type: "Building",
      description: "We work hard to deliver your stunning website. Custom design, responsive layout, and all integrations included.",
      icon: Zap,
      color: "from-primary to-[#5DD9FF]",
    },
    {
      phase: "Final Payment",
      time: "On Completion",
      amount: "Balance",
      type: "Due upon delivery",
      description: "Once your site is complete and approved, pay the remaining balance. Then we launch and you're live!",
      icon: CheckCircle2,
      color: "from-[#25D366] to-[#34E89E]",
    },
  ];

  return (
    <section id="workflow" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-medium text-primary">Fast & Transparent</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            How We Work & Our{" "}
            <span className="text-primary">Payment Structure</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Lightning-fast turnaround with a simple, transparent payment process. Zero hidden fees.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+3rem)] right-[calc(-150%)] h-0.5 bg-gradient-to-r from-border/60 to-transparent" />
              )}

              <div className="relative">
                {/* Step indicator circle */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} p-px shadow-xl shadow-primary/10`}
                  >
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </motion.div>
                </div>

                {/* Card content */}
                <div className="rounded-2xl bg-card/50 border border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <p className="text-xs font-inter font-bold text-primary uppercase tracking-widest mb-1">
                      Step {i + 1}
                    </p>
                    <h3 className="font-space font-bold text-xl text-foreground">{step.phase}</h3>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                        Timeline
                      </p>
                      <p className="text-sm font-inter text-foreground">{step.time}</p>
                    </div>
                    <div>
                      <p className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                        Payment
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-space font-bold text-lg text-foreground">{step.amount}</span>
                        <span className="text-xs font-inter font-medium px-2.5 py-1.5 rounded-lg bg-secondary/60 text-muted-foreground">
                          {step.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-inter text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-primary/15 via-primary/8 to-border/10 border border-primary/20 p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example: Starter */}
            <div>
              <p className="text-xs font-inter font-semibold text-primary uppercase tracking-widest mb-3">
                Example: Starter Plan
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="text-sm font-inter text-muted-foreground">Booking Deposit</span>
                  <span className="font-space font-bold text-lg text-foreground">R1,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="text-sm font-inter text-muted-foreground">Website Total</span>
                  <span className="font-space font-bold text-lg text-foreground">R2,500</span>
                </div>
                <div className="flex justify-between items-center pt-2 bg-secondary/40 rounded-lg px-3 py-2.5">
                  <span className="text-sm font-inter font-semibold text-foreground">Balance Due</span>
                  <span className="font-space font-bold text-lg text-primary">R1,000</span>
                </div>
              </div>
            </div>

            {/* Example: Business */}
            <div>
              <p className="text-xs font-inter font-semibold text-primary uppercase tracking-widest mb-3">
                Example: Business Plan
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="text-sm font-inter text-muted-foreground">Booking Deposit</span>
                  <span className="font-space font-bold text-lg text-foreground">R1,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="text-sm font-inter text-muted-foreground">Website Total</span>
                  <span className="font-space font-bold text-lg text-foreground">R5,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 bg-secondary/40 rounded-lg px-3 py-2.5">
                  <span className="text-sm font-inter font-semibold text-foreground">Balance Due</span>
                  <span className="font-space font-bold text-lg text-primary">R3,500</span>
                </div>
              </div>
            </div>

            {/* Example: Premium */}
            <div>
              <p className="text-xs font-inter font-semibold text-primary uppercase tracking-widest mb-3">
                Example: Premium Plan
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="text-sm font-inter text-muted-foreground">Booking Deposit</span>
                  <span className="font-space font-bold text-lg text-foreground">R1,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border/30">
                  <span className="text-sm font-inter text-muted-foreground">Website Total</span>
                  <span className="font-space font-bold text-lg text-foreground">R9,000+</span>
                </div>
                <div className="flex justify-between items-center pt-2 bg-secondary/40 rounded-lg px-3 py-2.5">
                  <span className="text-sm font-inter font-semibold text-foreground">Balance Due</span>
                  <span className="font-space font-bold text-lg text-primary">R7,500+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-sm font-inter text-muted-foreground text-center max-w-2xl mx-auto">
              The R1,500 booking fee is <span className="text-primary font-semibold">non-refundable</span> and secures your project slot. Upon project completion and approval, the remaining balance is due before your website goes live.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}