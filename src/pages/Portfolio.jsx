import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";

export default function Portfolio() {
  const projects = [
    {
      title: "Bright Future Holders",
      category: "Training Platform",
      description: "MICT SETA-accredited training platform with course management, e-commerce, and student authentication.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      link: "https://brightfutureholders.co.za",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Bloom Skills & Beauty",
      category: "Salon & Training",
      description: "Professional nail salon website with booking system, service showcase, and beginner nail course enrollment.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      link: "https://bloomskillsandbeauty.com",
      tech: ["React", "Booking System", "Payment Gateway", "CMS"]
    },
    {
      title: "Drive Agency",
      category: "Car Finance Matchmaking",
      description: "South Africa's car matchmaking service connecting buyers with dealerships and finance options.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      link: "https://luyandatest.netlify.app",
      tech: ["React", "Tailwind CSS", "Forms", "Lead Generation"]
    },
    {
      title: "Personal Portfolio",
      category: "Portfolio Website",
      description: "Modern portfolio showcasing web development projects with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      link: "https://uphumehmjoli.netlify.app",
      tech: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "E-Commerce Platform",
      category: "Online Store",
      description: "Full-featured e-commerce solution with product management, cart, and secure checkout.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      link: "#",
      tech: ["React", "Redux", "Stripe", "Firebase"]
    },
    {
      title: "Restaurant Website",
      category: "Business Website",
      description: "Elegant restaurant website with online reservations, menu display, and contact forms.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      link: "#",
      tech: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      title: "Real Estate Platform",
      category: "Property Listings",
      description: "Property listing platform with advanced search, filters, and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      link: "#",
      tech: ["React", "Next.js", "PostgreSQL"]
    },
    {
      title: "Corporate Website",
      category: "Business Website",
      description: "Professional corporate website with service pages, team profiles, and blog.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      link: "#",
      tech: ["WordPress", "PHP", "MySQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-sm text-white/70 font-light">Our Work</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6">
              Selected<span className="font-normal"> Projects</span>
            </h1>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              Websites that make an impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 text-white">
                          <ExternalLink className="w-5 h-5" />
                          <span className="text-sm font-light">View Project</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="text-sm text-white/40 font-light">{project.category}</div>
                    <h3 className="text-2xl font-normal text-white group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/50 font-light leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Ready to start<br />
              <span className="font-normal">your project?</span>
            </h2>
            <p className="text-xl text-white/50 font-light mb-10">
              Let's create something exceptional together
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to discuss a project similar to your portfolio.");
                window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
              }}
              className="px-12 py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all duration-300"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
