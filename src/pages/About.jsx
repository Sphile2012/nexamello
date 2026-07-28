import { motion } from "framer-motion";
import { Users, Award, Globe, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

export default function About() {
  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Countries Served" },
    { value: "5+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We serve clients worldwide with the same dedication and quality, regardless of location."
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Fast turnaround times without compromising on quality. Most projects delivered in 1-3 days."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, using the latest technologies and best practices."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our success. We build lasting relationships through exceptional service."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-white/70 font-light">About Us</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
              Building the<br />
              <span className="font-normal">Digital Future</span>
            </h1>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              We're a team of passionate web developers and designers creating exceptional digital experiences for businesses around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative px-6 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-light text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative px-6 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-8">
              Our<span className="font-normal"> Story</span>
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Founded in South Africa, Nexa Web Solutions started with a simple mission: make professional web design accessible to businesses of all sizes. What began as a local service has grown into a global operation, serving clients across 50+ countries.
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              We believe that every business deserves a world-class online presence. That's why we combine cutting-edge technology with affordable pricing, delivering websites that look premium but remain accessible.
            </p>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              Today, we're proud to have helped over 100 businesses establish their digital footprint, from small startups to established enterprises, all while maintaining our commitment to quality, speed, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative px-6 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Our<span className="font-normal"> Values</span>
            </h2>
            <p className="text-xl text-white/50 font-light">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white/70" />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">{value.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Join our growing<br />
              <span className="font-normal">community of clients</span>
            </h2>
            <p className="text-xl text-white/50 font-light mb-10">
              Let's build something amazing together
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to learn more about your services.");
                window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
              }}
              className="px-12 py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
