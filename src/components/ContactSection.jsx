import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Phone, Calendar, Clock, CheckCircle, Zap, Loader2, AlertCircle, Globe } from "lucide-react";
import { useState } from "react";

const EMAIL = "poomeigh503@gmail.com";
const PHONE_1 = "0823562239";
const WA_1 = "27823562239";

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "082 356 2239 / 082 061 0949",
    sub: "Mon–Fri 8:00–18:00 · Sat 9:00–14:00",
    href: "tel:0823562239",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: EMAIL,
    sub: "Reply within 24 hours",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "082 356 2239",
    sub: "Chat instantly — we reply fast",
    href: `https://wa.me/${WA_1}?text=Hello%20Nexa%20Web%20Solutions!%20I%27m%20interested%20in%20your%20services.`,
    external: true,
  },
  {
    icon: Globe,
    label: "International",
    value: "Worldwide Clients",
    sub: "We work remotely with anyone, anywhere",
    href: `https://wa.me/${WA_1}?text=Hi!%20I%27m%20an%20international%20client%20interested%20in%20a%20website.`,
    external: true,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", packageInterest: "", message: "" });
  const [status, setStatus] = useState("idle");
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
      if (!res.ok) { setErrorMsg(data.error || "Something went wrong. Please try WhatsApp."); setStatus("error"); return; }
      setStatus("success");
      if (data.whatsappUrl) setTimeout(() => window.open(data.whatsappUrl, "_blank"), 800);
    } catch {
      setErrorMsg("Network error. Please contact us via WhatsApp directly.");
      setStatus("error");
    }
  };

  const reset = () => { setForm({ name: "", email: "", phone: "", packageInterest: "", message: "" }); setStatus("idle"); setErrorMsg(""); };

  const inputClass = "w-full px-4 py-3.5 rounded bg-secondary border border-border text-foreground font-dm text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-background transition-all duration-200";

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-3 text-xs font-dm font-medium tracking-[0.18em] text-primary uppercase mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            Let's Work Together
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Ready to Build Your{" "}
            <span className="text-primary">
              Website?
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-dm text-base sm:text-lg font-light leading-[1.8]">
            Based in South Africa, serving clients <strong className="text-foreground font-medium">worldwide</strong>. We respond fast, wherever you are.
          </p>
        </motion.div>

        {/* Contact info first on mobile, then form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

          {/* Contact cards — shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-3 order-1 lg:order-1"
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="premium-card group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-dm font-bold text-primary uppercase tracking-widest mb-0.5">{card.label}</p>
                  <p className="font-dm font-semibold text-foreground text-xs sm:text-sm truncate">{card.value}</p>
                  <p className="text-[10px] sm:text-[11px] font-dm text-muted-foreground font-light">{card.sub}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-border/60 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
            ))}

            {/* Hours */}
            <div className="p-4 rounded bg-secondary border border-border mt-1">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-dm font-semibold text-foreground">Business Hours</span>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Mon – Fri", hours: "8:00 – 18:00" },
                  { day: "Saturday", hours: "9:00 – 14:00" },
                  { day: "Sunday", hours: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm font-dm">
                    <span className="text-muted-foreground font-light">{h.day}</span>
                    <span className={`font-semibold text-xs px-2 py-0.5 rounded ${h.hours === "Closed" ? "text-muted-foreground/50" : "text-foreground bg-background"}`}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form — shown second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 order-2 lg:order-2"
          >
            <div className="rounded border border-border bg-card shadow-lg overflow-hidden">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary-foreground" />

              <div className="p-5 sm:p-8 lg:p-10">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-10 sm:py-14 text-center gap-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl sm:text-2xl text-foreground mb-2">Message Sent! 🎉</h3>
                      <p className="text-muted-foreground font-dm max-w-xs leading-[1.8] text-sm font-light">
                        We received your request and will contact you shortly. WhatsApp is opening now for instant chat.
                      </p>
                    </div>
                    <button onClick={reset} className="px-6 py-2.5 rounded border border-border font-dm font-medium text-sm text-foreground hover:bg-secondary transition-all duration-300">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded bg-secondary flex items-center justify-center">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-playfair font-bold text-lg sm:text-xl text-foreground">Book a Consultation</h3>
                        <p className="text-xs font-dm text-muted-foreground font-light">Fill in your details — we'll get back to you fast</p>
                      </div>
                    </div>

                    {status === "error" && (
                      <div className="mb-5 flex items-start gap-3 p-4 rounded bg-red-500/8 border border-red-500/20">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-dm text-red-600">{errorMsg}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-dm font-bold text-muted-foreground uppercase tracking-widest">Full Name *</label>
                          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-dm font-bold text-muted-foreground uppercase tracking-widest">Phone Number *</label>
                          <input name="phone" required value={form.phone} onChange={handleChange} placeholder="e.g. 082 356 2239" className={inputClass} />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-dm font-bold text-muted-foreground uppercase tracking-widest">Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-dm font-bold text-muted-foreground uppercase tracking-widest">Package Interest</label>
                        <select name="packageInterest" value={form.packageInterest} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                          <option value="">Select a package...</option>
                          <optgroup label="Website build (once-off)">
                            <option value="4-Page Starter (R500)">4-page starter · R500 once-off</option>
                            <option value="Full Website (R2,500)">Full website · R2,500 once-off</option>
                            <option value="Scale / Custom (from R5,000)">Scale / shop-ready · from R5,000 (quote)</option>
                          </optgroup>
                          <optgroup label="Hosting">
                            <option value="Hosting only (R250/mo)">Hosting package · R250/month</option>
                          </optgroup>
                          <optgroup label="International">
                            <option value="International – Custom Quote">International — Request Custom Quote</option>
                          </optgroup>
                          <option value="Custom / Not sure yet">Custom / Not sure yet</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-dm font-bold text-muted-foreground uppercase tracking-widest">Message</label>
                        <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Tell us about your business and what you need..." className={`${inputClass} resize-none`} />
                      </div>

                      <div className="pt-1 space-y-3">
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin" />Sending...</> : <><MessageSquare className="w-5 h-5" />Send via WhatsApp</>}
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                          <a href={`tel:${PHONE_1}`} className="flex items-center justify-center gap-2 py-3.5 rounded btn-outline font-dm font-medium text-sm">
                            <Phone className="w-4 h-4 text-primary" />Call Now
                          </a>
                          <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 py-3.5 rounded btn-outline font-dm font-medium text-sm">
                            <Mail className="w-4 h-4 text-primary" />Send Email
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
