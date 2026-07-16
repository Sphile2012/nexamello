import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Nexa Web Solutions! I'd like to get a professional website for my business. 🚀");
    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
      {/* Radial white lines background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(0, 0, 0, 0.03) 1deg, transparent 2deg, transparent 10deg)`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-800 leading-tight">
              Need A{" "}
              <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded font-semibold">
                Professional
              </span>
            </h1>
            <h2 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-blue-600 leading-none tracking-tight">
              Website
            </h2>
            <p className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-normal">
              For Your Business
            </p>
          </motion.div>

          {/* Multiple Website Mockups Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-6xl mx-auto perspective-1000"
          >
            {/* 3D Perspective Container */}
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Main Center Screen - Largest */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-30 mx-auto w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-gray-800"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-8">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 h-full">
                    {/* Sample furniture e-commerce layout */}
                    <div className="col-span-3 bg-white rounded p-2 sm:p-4 shadow">
                      <div className="text-xs sm:text-sm font-semibold text-gray-800">Featured Products</div>
                    </div>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-white rounded p-2 shadow flex flex-col items-center justify-center">
                        <div className="w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded mb-1 sm:mb-2" />
                        <div className="text-[8px] sm:text-xs text-gray-600">Product {i + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Left Side Screens */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute left-0 top-1/4 w-1/4 hidden md:block"
                style={{ transform: 'translateZ(10px) rotateY(15deg)' }}
              >
                <div className="bg-white rounded shadow-xl overflow-hidden border-4 border-gray-700">
                  <div className="aspect-[9/14] bg-gradient-to-br from-purple-100 to-blue-100 p-2">
                    <div className="space-y-2">
                      <div className="bg-white rounded h-8" />
                      <div className="bg-white rounded h-20" />
                      <div className="bg-white rounded h-12" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side Screens */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute right-0 top-1/4 w-1/4 hidden md:block"
                style={{ transform: 'translateZ(10px) rotateY(-15deg)' }}
              >
                <div className="bg-white rounded shadow-xl overflow-hidden border-4 border-gray-700">
                  <div className="aspect-[9/14] bg-gradient-to-br from-green-100 to-teal-100 p-2">
                    <div className="space-y-2">
                      <div className="bg-white rounded h-12" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white rounded h-16" />
                        <div className="bg-white rounded h-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Left Screen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute left-8 sm:left-16 bottom-0 w-1/5 hidden lg:block"
                style={{ transform: 'translateZ(20px) rotateY(10deg)' }}
              >
                <div className="bg-gray-900 rounded shadow-xl overflow-hidden border-4 border-gray-800">
                  <div className="aspect-[9/14] bg-gradient-to-br from-gray-800 to-black p-2">
                    <div className="space-y-1">
                      <div className="bg-gray-700 rounded h-6" />
                      <div className="bg-gray-700 rounded h-10" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Right Screen */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute right-8 sm:right-16 bottom-0 w-1/5 hidden lg:block"
                style={{ transform: 'translateZ(20px) rotateY(-10deg)' }}
              >
                <div className="bg-white rounded shadow-xl overflow-hidden border-4 border-gray-700">
                  <div className="aspect-[9/14] bg-gradient-to-br from-pink-100 to-rose-100 p-2">
                    <div className="space-y-1">
                      <div className="bg-white rounded h-8" />
                      <div className="bg-white rounded h-12" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Blue Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative mt-8 mx-auto max-w-2xl"
            >
              <div className="bg-blue-600 text-white px-8 py-6 rounded-xl shadow-2xl relative">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                  Design that speaks<br />louder than words
                </p>
                {/* Expand Icon */}
                <button
                  onClick={handleWhatsApp}
                  className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg shadow-xl flex items-center justify-center hover:scale-110 transition-transform group"
                >
                  <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 group-hover:text-blue-600 transition-colors" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="space-y-6"
          >
            <button
              onClick={handleWhatsApp}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Get Your Website Today
            </button>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional websites for businesses across South Africa and worldwide. <br className="hidden sm:inline" />
              <span className="font-semibold text-blue-600">Fast delivery. Affordable pricing. Premium quality.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
