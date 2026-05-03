import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Phone, Calendar, Clock, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const EMAIL = "poomeigh503@gmail.com";
const PHONE_1 = "0823562239";
const PHONE_2 = "0820610949";
const WA_1 = "27823562239";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", package: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NexaWeb Tech Solutions! 👋%0A%0A*New Booking Request*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* ${form.phone}%0A*Package:* ${form.package}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${WA_1}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Background glow */}
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
            <span className="text-primary">Digital Presence?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground font-inter text-lg">
            Book a consultation or reach out directly — we respond fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left panel */}
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
                  <a href={`tel:${PHONE_2}`} className="font-space font-bold text-foreground hover:text-primary transition-colors">{PHONE_2}</a>
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

            {/* WhatsApp */}
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

          {/* Right — booking form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl p-px bg-gradient-to-br from-primary/40 via-primary/10 to-border/20">
              <div className="rounded-3xl bg-card p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-space font-bold text-2xl text-foreground">Request Sent!</h3>
                    <p className="text-muted-foreground font-inter max-w-xs leading-relaxed">
                      Your booking was sent via WhatsApp. We'll confirm shortly.
                    </p>
                    <Button variant="outline" className="mt-2 rounded-full border-border/60 px-6" onClick={() => setSubmitted(false)}>
                      Send Another
                    </Button>
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
                          name="package" value={form.package} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border/40 text-foreground font-inter text-sm focus:outline-none focus:border-primary/60 focus:bg-secondary/70 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a package...</option>
                          <optgroup label="Web Design">
                            <option value="Starter Web Design (R2,500)">Starter Web Design – R2,500</option>
                            <option value="Business Web Design (R5,000)">Business Web Design – R5,000</option>
                            <option value="Premium Web Design (R9,000+)">Premium Web Design – R9,000+</option>
                          </optgroup>
                          <optgroup label="Hosting & Building">
                            <option value="Basic Hosting (R2,500)">Basic Hosting – R2,500</option>
                            <option value="Standard Hosting (R4,500)">Standard Hosting – R4,500</option>
                            <option value="Pro Hosting (R9,000)">Pro Hosting – R9,000</option>
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
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-inter font-bold text-base transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/25"
                        >
                          <MessageSquare className="w-5 h-5" />
                          Send via WhatsApp
                        </button>
                        <div className="grid grid-cols-2 gap-3">
                          <Button type="button" variant="outline" className="rounded-xl py-5 font-inter font-semibold border-border/50 hover:bg-secondary/50 hover:border-primary/30 gap-2" asChild>
                            <a href={`tel:${PHONE_1}`}><Phone className="w-4 h-4" />Call Now</a>
                          </Button>
                          <Button type="button" variant="outline" className="rounded-xl py-5 font-inter font-semibold border-border/50 hover:bg-secondary/50 hover:border-primary/30 gap-2" asChild>
                            <a href={`mailto:${EMAIL}`}><Mail className="w-4 h-4" />Send Email</a>
                          </Button>
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