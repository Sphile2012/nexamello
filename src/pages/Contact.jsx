import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";

const contactDetails = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+27 82 356 2239",
    href: "https://wa.me/27823562239",
  },
  {
    icon: Mail,
    label: "Email",
    value: "poomeigh503@gmail.com",
    href: "mailto:poomeigh503@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Africa, serving clients globally",
  },
];

export default function Contact() {
  return (
    import { useEffect, useState } from "react";
    import { useLocation } from "react-router-dom";
    import { motion } from "framer-motion";
    import { addDays, format, startOfDay } from "date-fns";
    import { CalendarDays, Mail, MapPin, MessageSquare, Star } from "lucide-react";
    import { Calendar } from "@/components/ui/calendar";
    import Navbar from "../components/Navbar";

    const availableTimes = ["10:00 AM", "12:00 PM", "2:00 PM"];

    export default function Contact() {
      const location = useLocation();
      const [selectedDate, setSelectedDate] = useState(() => addDays(startOfDay(new Date()), 1));
      const [selectedTime, setSelectedTime] = useState(availableTimes[0]);

      useEffect(() => {
        if (location.hash === "#booking") {
          document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location.hash]);

      const bookingMessage = encodeURIComponent(
        `Hi! I'd like to request a consultation for ${format(selectedDate, "EEEE, d MMMM yyyy")} at ${selectedTime}. Please confirm availability.`
      );

      return (
        <main className="min-h-screen bg-black text-white">
          <Navbar />
          <section className="px-4 pb-16 pt-28 sm:px-6">
            <div className="mx-auto w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <h1 className="mb-4 text-4xl font-light sm:text-5xl">
                  Book a <span className="font-normal">consultation</span>
                </h1>
                <p className="mb-10 max-w-2xl text-lg text-white/60">
                  Choose a preferred time. We'll confirm availability with you on WhatsApp.
                </p>
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-16">
                  <div id="booking" className="scroll-mt-24 border-y border-white/10 py-6">
                    <div className="mb-5 flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-white/70" aria-hidden="true" />
                      <h2 className="text-xl font-medium">Choose a day</h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-[minmax(260px,1fr)_minmax(180px,0.8fr)]">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => date && setSelectedDate(date)}
                        disabled={{ before: startOfDay(new Date()) }}
                        className="mx-auto w-full max-w-sm text-white"
                      />
                      <div>
                        <h3 className="mb-3 text-sm font-medium text-white/65">Preferred time</h3>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              type="button"
                              aria-pressed={selectedTime === time}
                              onClick={() => setSelectedTime(time)}
                              className={`min-h-11 rounded border px-3 text-sm transition-colors ${selectedTime === time ? "border-white bg-white text-black" : "border-white/15 text-white/75 hover:border-white/40 hover:bg-white/5"}`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-white/45">
                          Selected: {format(selectedDate, "EEE, d MMM")} at {selectedTime}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/27823562239?text=${bookingMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[#25D366] px-5 py-3 text-center font-semibold text-black transition-colors hover:bg-[#25D366]/90 sm:w-auto"
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      Request this time on WhatsApp
                    </a>
                  </div>

                  <aside className="space-y-9">
                    <div>
                      <h2 className="mb-4 text-lg font-medium">Contact details</h2>
                      <div className="space-y-4">
                        <a href="https://wa.me/27823562239" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-white/70">
                          <MessageSquare className="h-5 w-5 shrink-0 text-[#25D366]" aria-hidden="true" />
                          +27 82 356 2239
                        </a>
                        <a href="mailto:poomeigh503@gmail.com" className="flex items-center gap-3 break-all text-white hover:text-white/70">
                          <Mail className="h-5 w-5 shrink-0 text-white/60" aria-hidden="true" />
                          poomeigh503@gmail.com
                        </a>
                        <div className="flex items-center gap-3 text-white/75">
                          <MapPin className="h-5 w-5 shrink-0 text-white/60" aria-hidden="true" />
                          South Africa, serving clients globally
                        </div>
                      </div>
                    </div>

                    <blockquote className="border-l-2 border-white/25 pl-5">
                      <div className="mb-3 flex gap-1 text-amber-300" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <p className="text-base leading-relaxed text-white/75">
                        "NexaWeb built our website in just 2 days! Customers now find us on Google and bookings have increased by 40%. Absolutely worth every rand."
                      </p>
                      <footer className="mt-3 text-sm text-white/45">
                        Sipho Dlamini, Dlamini Auto Repairs · Johannesburg
                      </footer>
                    </blockquote>
                  </aside>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      );
    }