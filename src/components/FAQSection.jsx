import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most websites are delivered within 1–3 business days after we receive your content and deposit. Complex projects may take slightly longer — we'll give you a clear timeline upfront.",
  },
  {
    q: "Do you work with clients outside South Africa?",
    a: "Yes! We work with clients worldwide. Everything is done remotely via WhatsApp, email, or video call. We accept international payments and deliver your website online.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Just your business name, logo (if you have one), the text/content you want on the site, and any images. Don't have these? No problem — we can help you with content and source images.",
  },
  {
    q: "What is the R1,500 booking deposit for?",
    a: "The R1,500 non-refundable deposit secures your project slot and covers initial design work. The remaining balance is only due once your website is complete and you're happy with it.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Absolutely. Every website we build is fully responsive and mobile-friendly. Over 70% of web traffic comes from mobile devices, so this is a priority for us.",
  },
  {
    q: "Can I update my website myself after it's built?",
    a: "Yes. We can build on WordPress or provide a simple CMS so you can update content yourself. Alternatively, our R250/month maintenance plan covers all updates for you.",
  },
  {
    q: "Do you offer payment plans?",
    a: "We require a R1,500 deposit upfront and the balance on completion. For larger projects, we can discuss a payment schedule. Contact us to arrange something that works for you.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept EFT/bank transfer, PayFast, and for international clients we can arrange payment via PayPal or other methods. Contact us to discuss.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-inter font-semibold text-primary uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="mt-2 font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground font-inter text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-primary/40 bg-card shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card/50 hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-space font-semibold text-foreground text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-sm font-inter text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center p-6 rounded-2xl bg-primary/5 border border-primary/20"
        >
          <p className="font-space font-semibold text-foreground mb-2">Still have questions?</p>
          <p className="text-sm font-inter text-muted-foreground mb-4">
            We're happy to help — reach out anytime.
          </p>
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-inter font-semibold text-sm hover:bg-[#25D366]/90 transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
