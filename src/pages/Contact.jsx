import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { addDays, format, startOfDay } from "date-fns";
import { CalendarDays, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
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

const faqs = [
  {
    q: "How long does a website take?",
    a: "Standard websites are done in 3–5 days. E-commerce stores take 5–10 days depending on the number of products.",
  },
  {
    q: "Is hosting included?",
    a: "Yes — hosting and SSL are included in every package. No surprise fees after launch.",
  },
  {
    q: "Can I make changes after launch?",
    a: "Absolutely. WhatsApp us and we'll sort it out. Small updates are usually done same day.",
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
                <span className="text-sm text-white/60 font-light">Contact Us</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
              Get in touch —<br />
              <span className="font-normal bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                we move fast
              </span>
            </h1>
            <p className="text-lg text-white/50 font-light max-w-xl">
              WhatsApp us, or pick a time below and we'll confirm within the hour.
              No long forms, no waiting days for a reply.
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
                <p className="text-sm text-white/50 font-light mb-4">
                  Fastest way to reach us — message directly on WhatsApp:
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
                  Pick a day and time that suits you. We'll confirm on WhatsApp — usually within the hour.
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

            {/* What to expect */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-medium text-white mb-5">What to expect</h3>
              <div className="space-y-4">
                {[
                  { step: "01", text: "You WhatsApp or book a slot below" },
                  { step: "02", text: "We chat about what you need — no forms, no decks" },
                  { step: "03", text: "We send a clear quote, usually same day" },
                  { step: "04", text: "Work starts within 24 hours of sign-off" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-semibold text-blue-400 mt-0.5 w-5 flex-shrink-0">{item.step}</span>
                    <span className="text-sm text-white/65 font-light leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-3">
              <h3 className="text-base font-medium text-white">Quick answers</h3>
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm font-medium text-white mb-1.5">{faq.q}</p>
                  <p className="text-xs text-white/50 font-light leading-relaxed">{faq.a}</p>
                </div>
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
