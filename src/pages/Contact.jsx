import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { addDays, format, startOfDay } from "date-fns";
import { CalendarDays, Mail, MapPin, MessageSquare, Star, Phone } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const availableTimes = ["09:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

const contactDetails = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+27 82 356 2239",
    href: "https://wa.me/27823562239",
    color: "text-[#25D366]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "082 061 0949",
    href: "tel:0820610949",
    color: "text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "poomeigh503@gmail.com",
    href: "mailto:poomeigh503@gmail.com",
    color: "text-white/70",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Africa · Serving clients globally",
    href: null,
    color: "text-white/70",
  },
];

const testimonials = [
  {
    text: "NexaWeb built our website in just 2 days! Customers now find us on Google and bookings have increased by 40%.",
    author: "Sipho Dlamini",
    business: "Dlamini Auto Repairs · Johannesburg",
  },
  {
    text: "Our online store went live in under a week. Sales doubled within the first month. Absolutely worth every rand.",
    author: "Naledi Khumalo",
    business: "Khumalo Boutique · Pretoria",
  },
];

export default function Contact() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(() =>
    addDays(startOfDay(new Date()), 1)
  );
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);

  useEffect(() => {
    if (location.hash === "#booking") {
      setTimeout(() => {
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  const bookingMessage = encodeURIComponent(
    `Hi! I'd like to request a consultation for ${format(
      selectedDate,
      "EEEE, d MMMM yyyy"
    )} at ${selectedTime}. Please confirm availability.`
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm text-white/60 font-light">Get In Touch</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
              Let's Build<br />
              <span className="font-normal bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </h1>
            <p className="text-lg text-white/50 font-light max-w-xl">
              Book a free consultation or reach out directly. We respond fast — usually within the hour on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1fr_380px]">

          {/* LEFT: Contact Details + Booking */}
          <div className="space-y-12">

            {/* Contact Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h2 className="text-xl font-medium text-white mb-6">Contact Details</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 font-light mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white hover:text-white/70 transition-colors text-sm break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white/80 text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4 font-light">
                  Fastest response — message us directly on WhatsApp:
                </p>
                <a
                  href="https://wa.me/27823562239?text=Hi%21%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#25D366]/90 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Booking Calendar */}
            <motion.div
              id="booking"
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <CalendarDays className="w-5 h-5 text-white/70" />
                  <h2 className="text-xl font-medium text-white">Book a Free Consultation</h2>
                </div>
                <p className="text-sm text-white/50 font-light mb-8">
                  Choose a preferred day and time. We'll confirm availability with you on WhatsApp within minutes.
                </p>

                <div className="grid gap-8 sm:grid-cols-[1fr_180px]">
                  {/* Calendar */}
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    disabled={{ before: startOfDay(new Date()) }}
                    className="mx-auto w-full max-w-sm text-white [&_.rdp-day_button:hover]:bg-white/10 [&_.rdp-day_button.rdp-day_selected]:bg-white [&_.rdp-day_button.rdp-day_selected]:text-black"
                  />

                  {/* Time Slots */}
                  <div>
                    <h3 className="text-sm font-medium text-white/60 mb-4">Preferred time</h3>
                    <div className="flex flex-col gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          aria-pressed={selectedTime === time}
                          onClick={() => setSelectedTime(time)}
                          className={`min-h-11 rounded-lg border px-4 text-sm transition-all duration-200 ${
                            selectedTime === time
                              ? "border-white bg-white text-black font-semibold"
                              : "border-white/15 text-white/70 hover:border-white/40 hover:bg-white/5"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 text-xs leading-relaxed text-white/40">
                      Selected:<br />
                      <span className="text-white/70">{format(selectedDate, "EEE, d MMM")} at {selectedTime}</span>
                    </p>
                  </div>
                </div>

                {/* Book via WhatsApp */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={`https://wa.me/27823562239?text=${bookingMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-12 px-8 py-3 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#25D366]/90 transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Request this time on WhatsApp
                  </a>
                  <p className="mt-3 text-xs text-white/35 font-light">
                    We'll confirm your slot within minutes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Sidebar — Trust & Reviews */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-medium text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm font-light">
                <div className="flex justify-between text-white/70">
                  <span>Monday – Friday</span>
                  <span>08:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Saturday</span>
                  <span>09:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-white/40">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs text-[#25D366]">WhatsApp available 24/7</span>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="text-3xl font-light text-white mb-1">&lt; 1 hour</div>
              <div className="text-sm text-white/50 font-light">Average WhatsApp response time</div>
            </div>

            {/* Client Reviews */}
            <div className="space-y-4">
              <h3 className="text-base font-medium text-white">What clients say</h3>
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="p-5 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex gap-1 mb-3" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-3">
                    "{t.text}"
                  </p>
                  <footer className="text-xs text-white/40">
                    {t.author} · {t.business}
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Pricing Quick Ref */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-medium text-white mb-4">Pricing at a glance</h3>
              <div className="space-y-3 text-sm font-light">
                {[
                  { label: "Professional Website", price: "R2,500" },
                  { label: "E-Commerce Store", price: "From R5,000" },
                  { label: "Monthly Maintenance", price: "From R250/mo" },
                  { label: "Logo & Brand", price: "Custom quote" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-white/60">{item.label}</span>
                    <span className="text-white font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
