import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Directly open WhatsApp with the message
    const message = encodeURIComponent(
      `Hi! I'm ${form.name}.\n\nEmail: ${form.email}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
    
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-32 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
                Let's<span className="font-normal"> Connect</span>
              </h2>
              <p className="text-xl text-white/50 font-light">
                Start your global journey today
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MessageSquare, title: "WhatsApp", value: "+27 82 356 2239", href: "https://wa.me/27823562239" },
                { icon: Mail, title: "Email", value: "poomeigh503@gmail.com", href: "mailto:poomeigh503@gmail.com" },
                { icon: MapPin, title: "Location", value: "South Africa (Global Services)", href: null }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <item.icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 font-light mb-1">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-white/50 font-light mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 font-light mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 font-light mb-2">Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "success"}
                    className="w-full px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "success" ? (
                      "Message Sent! Opening WhatsApp..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/40 text-center font-light">
                    Your message will open in WhatsApp for instant delivery
                  </p>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
