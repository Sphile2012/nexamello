import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Phone, Calendar, Clock, CheckCircle, Zap, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

const EMAIL = "poomeigh503@gmail.com";
const PHONE_1 = "0823562239";
const WA_1 = "27823562239";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", packageInterest: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try WhatsApp.");
        setStatus("error");
        return;
      }

      setStatus("success");
      // Also open WhatsApp so they get instant confirmation
      if (data.whatsappUrl) {
        setTimeout(() => window.open(data.whatsappUrl, "_blank"), 800);
      }
    } catch {
      setErrorMsg("Network error. Please contact us via WhatsApp directly.");
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", packageInterest: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-medium text-primary">Let's Work Together</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Book a consultation or reach out directly — we respond fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ── Left panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Call */}
            <div className="group flex items-center gap-4 p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/40 hover:bg-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-inter font-bold text-primary uppercase tracking-widest mb-1">Call Us</p>
                <div className="flex flex-wrap gap-2">
                  <a href={`tel:${PHONE_1}`} className="font-space font-bold text-foreground hover:text-primary transition-colors">{PHONE_1}</a>
                  <span className="text-muted-foreground">/</span>
                  <a href="tel:0820610949" className="font-space font-bold text-foreground hover:text-primary transition-colors">0820610949</a>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-border group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/40 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-inter font-bold text-primary uppercase tracking-widest mb-0.5">Email Us</p>
                <p className="font-space font-semibold text-foreground text-sm truncate">{EMAIL}</p>
                <p className="text-xs font-inter text-muted-foreground">Reply within 24 hours</p>
              </div>
              <ArrowRight className="w-4 h-4 text-border group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </a>

            {/* WhatsApp — single link */}
            <a
              href={`https://wa.me/${WA_1}?text=Hello%20NexaWeb%20Tech%20Solutions!%20I'm%20interested%20in%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/8 border border-[#25D366]/25 hover:border-[#25D366]/50 hover:bg-[#25D366]/12 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-inter font-bold text-[#25D366] uppercase tracking-widest mb-0.5">WhatsApp</p>
                <p className="font-space font-bold text-foreground">{PHONE_1}</p>
                <p className="text-xs font-inter text-muted-foreground">Chat instantly</p>
              </div>
              <ArrowRight className="w-4 h-4 text-border group-hover:text-[#25D366] group-hover:translate-x-1 transition-all flex-shrink-0" />
            </a>

            {/* Hours */}
            <div className="p-5 rounded-2xl bg-card/40 border border-border/30">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-space font-semibold text-foreground">Business Hours</span>
              </div>
              <div className="space-y-2 text-sm font-inter">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Mon – Fri</span>
                  <span className="text-foreground font-semibold bg-secondary/50 px-2 py-0.5 rounded-md text-xs">8:00 – 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-semibold bg-secondary/50 px-2 py-0.5 rounded-md text-xs">9:00 – 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-muted-foreground/60 text-xs">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right — booking form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl p-px bg-gradient-to-br from-primary/40 via-primary/10 to-border/20">
              <div className="rounded-3xl bg-card p-8 sm:p-10">

                {/* ── Success state ── */}
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="font-space font-bold text-2xl text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground font-inter max-w-xs leading-relaxed">
                      We received your request and will contact you shortly. WhatsApp is opening now for instant chat.
                    </p>
                    <button
                      onClick={reset}
                      className="mt-2 px-6 py-2.5 rounded-full border border-border/60 font-inter font-semibold text-sm text-foreground hover:bg-secondary/50 transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-space font-bold text-xl text-foreground">Book a Consultation</h3>
                        <p className="text-xs font-inter text-muted-foreground">Fill in your details and we'll get back to you</p>
                      </div>
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-inter text-red-300">{errorMsg}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest">Full Name *</label>
                          <input
                            name="name" required value={form.name} onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-foreground font-inter text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-all"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest">Phone Number *</label>
                          <input
                            name="phone" required value={form.phone} onChange={handleChange}
                            placeholder="e.g. 082 356 2239"
                            className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-foreground font-inter text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest">Email Address *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-foreground font-inter text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest">Package Interest</label>
                        <select
                          name="packageInterest" value={form.packageInterest} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-foreground font-inter text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a package...</option>
                          <optgroup label="Starter">
                            <option value="Starter Website (R350 once-off)">Starter Website – R350 once-off</option>
                          </optgroup>
                          <optgroup label="Own a Website">
                            <option value="Basic – Own a Website (R2,500)">Basic – Own a Website – R2,500</option>
                            <option value="Standard – Own a Website (R4,500)">Standard – Own a Website – R4,500</option>
                            <option value="Pro – Own a Website (R9,000)">Pro – Own a Website – R9,000</option>
                          </optgroup>
                          <option value="Custom / Not sure yet">Custom / Not sure yet</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-widest">Message</label>
                        <textarea
                          name="message" rows={3} value={form.message} onChange={handleChange}
                          placeholder="Tell us about your business and what you need..."
                          className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-foreground font-inter text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-all resize-none"
                        />
                      </div>

                      <div className="pt-2 space-y-3">
                        {/* Primary — backend submit */}
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-inter font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/25"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <MessageSquare className="w-5 h-5" />
                              Send via WhatsApp
                            </>
                          )}
                        </button>

                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href={`tel:${PHONE_1}`}
                            className="flex items-center justify-center gap-2 py-4 rounded-xl border border-border/50 bg-transparent hover:bg-secondary/50 hover:border-primary/30 font-inter font-semibold text-sm text-foreground transition-all"
                          >
                            <Phone className="w-4 h-4" />Call Now
                          </a>
                          <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center justify-center gap-2 py-4 rounded-xl border border-border/50 bg-transparent hover:bg-secondary/50 hover:border-primary/30 font-inter font-semibold text-sm text-foreground transition-all"
                          >
                            <Mail className="w-4 h-4" />Send Email
                          </a>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
