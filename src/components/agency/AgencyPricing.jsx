import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

export default function AgencyPricing() {
  const packages = [
    {
      name: "Website Package",
      price: "R2,500",
      period: "once-off",
      description: "Professional website delivered in 3-5 days to establish your online presence",
      features: [
        "Professional website (3-5 days delivery)",
        "Mobile-responsive design",
        "SEO-friendly structure",
        "Contact form & WhatsApp integration",
        "Hosting included (first year)",
        "SSL security certificate",
        "Google Business setup",
        "30-day support included"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Growth Package",
      price: "R7,500",
      period: "/month",
      description: "Complete digital marketing to attract customers and grow your business",
      features: [
        "Website included (if needed)",
        "Social media management (3 platforms)",
        "8-12 posts per month",
        "Google Ads or Meta Ads management",
        "SEO optimization",
        "Graphic design (flyers, posts, ads)",
        "Monthly strategy & analytics reports",
        "Priority WhatsApp support"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Full-Service Package",
      price: "R15,000",
      period: "/month",
      description: "Everything your business needs to dominate your market and scale fast",
      features: [
        "Complete brand identity & website",
        "Multi-channel marketing campaigns",
        "Unlimited content & graphic design",
        "Video production & motion graphics",
        "Google Ads + Meta Ads + SEO",
        "Email marketing campaigns",
        "24/7 dedicated account manager",
        "Weekly strategy calls & optimization"
      ],
      popular: false,
      cta: "Scale Fast"
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
            Choose Your<span className="font-normal"> Package</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Flexible pricing plans designed to scale with your business
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            Serving startups, SMEs, restaurants, salons, real estate, healthcare, retail, and professional services across South Africa.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd like to discuss a custom solution.");
              window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
            }}
            className="px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
