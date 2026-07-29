import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

export default function AgencyPricing() {
  const packages = [
    {
      name: "Professional Website",
      price: "R2,500",
      period: "once-off",
      description: "Professional website delivered in 3-5 days to establish your online presence",
      features: [
        "Professional website (3-5 days delivery)",
        "Up to 10 pages",
        "Mobile-responsive design",
        "SEO-friendly structure",
        "Contact form & WhatsApp integration",
        "Hosting included",
        "SSL security certificate",
        "30-day support included"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "E-Commerce Website",
      price: "From R5,000",
      period: "once-off",
      description: "Complete online store with payment gateway and product management",
      features: [
        "Full e-commerce setup",
        "Product management system",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Order management",
        "Inventory tracking",
        "Mobile-responsive design",
        "SEO optimization & analytics"
      ],
      popular: false,
      cta: "Start Selling"
    },
    {
      name: "Monthly Maintenance",
      price: "From R250",
      period: "/month",
      description: "Keep your website updated, secure, and running smoothly with ongoing support",
      features: [
        "Content updates & changes",
        "Security monitoring",
        "Regular backups",
        "Plugin & software updates",
        "Technical support",
        "Performance optimization",
        "Uptime monitoring",
        "Priority response time"
      ],
      popular: false,
      cta: "Keep It Running"
    },
    {
      name: "Custom Solution",
      price: "Custom Quote",
      period: "",
      description: "Tailored solutions for unique business requirements and large-scale projects",
      features: [
        "Custom features & functionality",
        "Advanced integrations",
        "Multi-language support",
        "Custom design & branding",
        "API development",
        "Advanced analytics",
        "Priority support",
        "Scalable architecture"
      ],
      popular: false,
      cta: "Contact Us"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-sm text-white/70 font-light">Pricing</span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
            Simple<span className="font-normal"> Pricing</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Websites from R2,500 • E-commerce from R5,000 • Maintenance from R250/month
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${pkg.popular ? 'lg:-mt-4 lg:mb-0' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative h-full p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 scale-105' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}>
                {/* Package Name */}
                <div className="text-sm text-white/50 font-light mb-2">{pkg.name}</div>
                
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-light text-white">{pkg.price}</span>
                  <span className="text-xl text-white/40">{pkg.period}</span>
                </div>

                {/* Description */}
                <p className="text-white/50 font-light mb-8">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/70 font-light text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package.`);
                    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
                  }}
                  className={`w-full py-5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group ${
                    pkg.popular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 font-light mb-6">
            All packages include hosting, SSL security, mobile-responsive design, and 30-day support.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd like to discuss a custom solution.");
              window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
            }}
            className="px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Need Something Custom?
          </button>
        </motion.div>
      </div>
    </section>
  );
}
