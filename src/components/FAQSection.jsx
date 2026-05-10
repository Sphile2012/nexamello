import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  { q: "How long does it take to build my website?", a: "Most websites are delivered within 1–3 business days after we receive your content and deposit. Complex projects may take slightly longer — we'll give you a clear timeline upfront." },
  { q: "Do you work with clients outside South Africa?", a: "Yes! We work with clients worldwide. Everything is done remotely via WhatsApp, email, or video call. We accept international payments and deliver your website online." },
  { q: "What do I need to provide to get started?", a: "Just your business name, logo (if you have one), the text/content you want on the site, and any images. Don't have these? No problem — we can help you with content and source images." },
  { q: "What is the R1,500 booking deposit for?", a: "The R1,500 non-refundable deposit secures your project slot and covers initial design work. The remaining balance is only due once your website is complete and you're happy with it." },
  { q: "Will my website work on mobile phones?", a: "Absolutely. Every website we build is fully responsive and mobile-friendly. Over 70% of web traffic comes from mobile devices, so this is a priority for us." },
  { q: "Can I update my website myself after it's built?", a: "Yes. We can build on WordPress or provide a simple CMS so you can update content yourself. Alternatively, our R250/month maintenance plan covers all updates for you." },
  { q: "Do you offer payment plans?", a: "We require a R1,500 deposit upfront and the balance on completion. For larger projects, we can discuss a payment schedule. Contact us to arrange something that works for you." },
  { q: "What payment methods do you accept?", a: "We accept EFT/bank transfer, PayFast, and for international clients we can arrange payment via PayPal or Stripe. Contact us to discuss." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-inter font-bold text-primary uppercase tracking-widest mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground font-inter text-base sm:text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-2 sm:space-y-2.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-primary/35 bg-card shadow-lg shadow-primary/8"
                  : "border-border/40 bg-card/40 hover:border-border/70 hover:bg-card/60"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 min-h-[48px] py-4 sm:py-5 text-left"
                aria-expanded={open === i}
              >
                <span className={`font-space font-semibold text-sm sm:text-base transition-colors ${open === i ? "text-foreground" : "text-foreground/80"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary text-muted-foreground"}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-0">
                      <div className="h-px bg-border/30 mb-4" />
                      <p className="text-sm font-inter text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 text-center p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-primary/8 to-transparent border border-primary/15"
        >
          <p className="font-space font-bold text-foreground text-base sm:text-lg mb-1">Still have questions?</p>
          <p className="text-sm font-inter text-muted-foreground mb-5">We're happy to help — reach out anytime, anywhere in the world.</p>
          <a
            href="https://wa.me/27823562239?text=Hi%20Nexa%20Web%20Solutions!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#25D366] text-white font-inter font-bold text-sm hover:bg-[#25D366]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4" />
            Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
