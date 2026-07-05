import { motion } from "framer-motion";
import { Monitor, Settings, BarChart3, ShoppingCart, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-gradient">
      {/* Animated background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Title with gradient text */}
            <h1 className="font-sans font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-cyan-400 italic font-light">Professional</span>
              <br />
              <span className="text-white">Website</span>
              <br />
              <span className="text-white">Development</span>
            </h1>

            {/* Services list */}
            <div className="mb-8">
              <h2 className="text-blue-400 text-2xl sm:text-3xl font-semibold mb-6">We Are Offering</h2>
              
              <div className="space-y-4">
                {[
                  { icon: Monitor, text: 'Custom Web Application' },
                  { icon: Settings, text: 'Website Maintenance' },
                  { icon: BarChart3, text: 'Web Analytics and Reporting' },
                  { icon: ShoppingCart, text: 'E-Commerce Development' },
                  { icon: Search, text: 'SEO Optimization' },
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-base sm:text-lg">{service.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Explore Now
            </motion.a>
          </motion.div>

          {/* Right side - Device mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Laptop mockup */}
              <div className="relative z-10 perspective-1000">
                <div className="laptop-container">
                  <div className="laptop-screen">
                    <div className="h-full bg-gradient-to-br from-blue-900 to-indigo-900 rounded-t-lg p-4">
                      <div className="text-xs text-white/60 mb-2">Custom Web Solution</div>
                      <div className="text-xl font-bold text-white mb-4">Grow your Business</div>
                      <div className="text-cyan-400 text-lg mb-2">Organic IT Solution</div>
                      <div className="text-cyan-400 text-lg">Technology</div>
                      <div className="mt-6">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm">
                          Get Started →
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-base" />
                </div>
              </div>

              {/* Mobile mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-8 bottom-12 z-20"
              >
                <div className="mobile-container">
                  <div className="mobile-screen">
                    <div className="h-full bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-4 text-white">
                      <div className="text-sm font-bold mb-2">Grow your Business</div>
                      <div className="text-xs text-cyan-400 mb-3">Organic IT Solution Technology</div>
                      <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs">
                        Get Started →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Expand icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-xl z-30 cursor-pointer hover:bg-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom social bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8 text-white/80 text-sm flex-wrap px-4"
        >
          <a href="https://www.linkedin.com/company/nexa-tech-solutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            nexatechsolutions
          </a>
          <a href="https://wa.me/27823562239" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            082-356-2239
          </a>
          <a href="mailto:poomeigh503@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            poomeigh503@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
