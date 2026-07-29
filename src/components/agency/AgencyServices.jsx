import { motion } from "framer-motion";
import { 
  Palette, 
  Globe, 
  Share2, 
  TrendingUp, 
  Search, 
  Image, 
  Video, 
  FileText 
} from "lucide-react";

export default function AgencyServices() {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "High-performance websites delivered in 3-5 days that convert visitors into customers and drive business growth.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Logo & Brand Identity",
      description: "Complete brand identity packages including logo design, color palettes, typography, and brand guidelines.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Full social media management across all platforms—content creation, scheduling, engagement, and growth strategies.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Campaigns",
      description: "Integrated campaigns across Google Ads, Meta Ads, and more that deliver measurable results and ROI.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "SEO & Local Visibility",
      description: "Get found on Google with expert SEO strategies that drive organic traffic and qualified leads to your business.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Image,
      title: "Graphic Design",
      description: "Flyers, brochures, posters, business cards, and all marketing materials designed to make your brand stand out.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Video,
      title: "Video & Motion Graphics",
      description: "Professional video production and motion graphics that capture attention and tell your story visually.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "Content & Copywriting",
      description: "Compelling content and persuasive copy that converts—from website copy to email campaigns and blog posts.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="relative py-32 bg-black">
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
              <span className="text-sm text-white/70 font-light">What We Do</span>
            </div>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
            Our<span className="font-normal"> Services</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Full-service creative and digital advertising solutions that drive real business results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex w-16 h-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} p-0.5`}>
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-white/80 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed">
                {service.description}
              </p>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd like to discuss your services.");
              window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
            }}
            className="px-10 py-5 bg-white/5 border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
