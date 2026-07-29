import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Bloom Skills & Beauty",
      category: "Branding & Website",
      description: "Complete rebrand with booking system for luxury nail salon",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80",
      link: "https://bloomskillsandbeauty.com",
      tags: ["Branding", "Web Design", "Booking System"]
    },
    {
      title: "Drive Agency",
      category: "Digital Platform",
      description: "Car finance matchmaking service connecting buyers nationwide",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
      link: "https://luyandatest.netlify.app",
      tags: ["Web App", "Lead Generation", "UX/UI"]
    },
    {
      title: "Bright Future Holders",
      category: "Training Platform",
      description: "MICT SETA-accredited e-learning platform with e-commerce",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      link: "https://brightfutureholders.co.za",
      tags: ["E-Commerce", "LMS", "Branding"]
    },
    {
      title: "Creative Campaign",
      category: "Social Media Marketing",
      description: "Multi-platform campaign driving 300% engagement growth",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
      link: "#",
      tags: ["Social Media", "Content", "Analytics"]
    }
  ];

  return (
    <section id="work" className="relative py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-sm text-white/70 font-light tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
            Projects That
            <br />
            <span className="font-normal">Made an Impact</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Real results for real brands. See how we've helped businesses grow.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-3 text-white">
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-light">View Project</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white font-light">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-normal text-white group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-light hover:bg-white/10 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
