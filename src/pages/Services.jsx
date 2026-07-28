import { motion } from "framer-motion";
import { Globe, Code, Palette, Zap, Shield, TrendingUp, Smartphone, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Next.js, and WordPress.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Secure & Scalable"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love and convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Perfect experience across all devices - desktop, tablet, and mobile.",
      features: ["Touch Friendly", "Fast Loading", "App-like Feel", "Cross-browser"]
    },
    {
      icon: Globe,
      title: "E-Commerce",
      description: "Complete online stores with payment integration, inventory, and analytics.",
      features: ["Product Management", "Secure Checkout", "Order Tracking", "Payment Gateway"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Get found on Google with our proven SEO strategies and optimization.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Analytics"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Keep your website secure, updated, and running smoothly 24/7.",
      features: ["Security Updates", "Backups", "Bug Fixes", "24/7 Monitoring"]
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "R500",
      period: "once-off",
      description: "Perfect for personal portfolios and small businesses",
      features: ["4 Pages", "Mobile Responsive", "Contact Form", "Basic SEO", "Free SSL"],
      popular: false
    },
    {
      name: "Professional",
      price: "R2,500",
      period: "once-off",
      description: "Ideal for growing businesses and organizations",
      features: ["10+ Pages", "Custom Design", "CMS Integration", "Advanced SEO", "E-Commerce Ready", "Analytics"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Full-scale solutions for large businesses",
      features: ["Unlimited Pages", "Custom Features", "API Integration", "Dedicated Support", "Performance Optimization", "Ongoing Maintenance"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-white/70 font-light">What We Offer</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
              Our<span className="font-normal"> Services</span>
            </h1>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white/70" />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">{service.title}</h3>
                <p className="text-white/50 font-light mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative px-6 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Simple<span className="font-normal"> Pricing</span>
            </h2>
            <p className="text-xl text-white/50 font-light">
              Choose the package that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                  pkg.popular
                    ? 'bg-white/10 border-white/30 scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-normal text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-white">{pkg.price}</span>
                    <span className="text-white/50 font-light">{pkg.period}</span>
                  </div>
                  <p className="text-white/50 font-light mt-4">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package.`);
                    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
                  }}
                  className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
