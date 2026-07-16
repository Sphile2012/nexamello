import { motion } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";

export default function HeroSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Nexa Web Solutions! I'd like to discuss getting a website that gets me clients. 🚀");
    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/20 via-slate-900 to-slate-900" />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white px-4">
              I DESIGN WEBSITES
              <br />
              THAT GET YOU{" "}
              <span className="relative inline-block">
                <span className="text-yellow-400">CLIENTS</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-1 sm:h-1.5 bg-yellow-400"
                />
              </span>
              {" "}
              <span className="inline-block">🚀</span>
            </h1>
          </motion.div>

          {/* Laptop Mockup with Before/After Split */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-4xl mx-auto px-4 sm:px-8"
          >
            {/* Laptop Container */}
            <div className="relative">
              {/* Laptop Screen */}
              <div className="relative bg-slate-800 rounded-t-2xl border-4 border-slate-700 shadow-2xl overflow-hidden">
                {/* Screen bezel */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-slate-700 rounded-b-lg z-10" />
                
                {/* Split Screen Content */}
                <div className="relative aspect-[16/10] bg-slate-900 flex">
                  {/* Left Side - Before */}
                  <div className="w-1/2 bg-gradient-to-br from-slate-700 to-slate-800 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center border-r border-slate-600/50">
                    <div className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-3">Welcome to Our Website</div>
                    <div className="text-white font-bold text-sm sm:text-lg lg:text-2xl mb-3 sm:mb-4">Cheap Web Services!</div>
                    <div className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-6 text-center max-w-xs">
                      Basic websites starting from R500. Contact us today!
                    </div>
                    <button className="bg-slate-600 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-slate-500 transition-colors">
                      Contact Us!
                    </button>
                  </div>

                  {/* Vertical Divider with glow */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400/50 via-yellow-400 to-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.5)] transform -translate-x-1/2 z-10" />

                  {/* Right Side - After */}
                  <div className="w-1/2 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center">
                    <div className="text-white font-bold text-lg sm:text-2xl lg:text-4xl mb-2 sm:mb-4">Grow Your</div>
                    <div className="text-white font-bold text-lg sm:text-2xl lg:text-4xl mb-3 sm:mb-6">Business Online</div>
                    <div className="text-cyan-400 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 text-center">
                      Get More Leads & Sales Today
                    </div>
                    <button className="bg-blue-600 text-white text-xs sm:text-sm lg:text-base px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/50 font-semibold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="relative h-3 sm:h-4 bg-slate-700 rounded-b-2xl shadow-xl">
                <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-2xl" />
              </div>
              
              {/* Laptop Stand */}
              <div className="mx-auto w-32 sm:w-40 h-1 sm:h-1.5 bg-slate-700 rounded-t-lg" />
            </div>

            {/* Expand Icon - Bottom Right */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={handleWhatsApp}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-slate-200 hover:bg-slate-300 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Expand"
            >
              <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" />
            </motion.button>

            {/* Refresh Icon - Bottom Right (Second Icon) */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              onClick={handleWhatsApp}
              className="absolute -bottom-20 -right-2 sm:-bottom-24 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-slate-200 hover:bg-slate-300 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Refresh"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-lg sm:text-xl lg:text-2xl font-medium tracking-wide"
          >
            Modern <span className="text-white/60">•</span> Fast <span className="text-white/60">•</span> High-Converting
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={handleWhatsApp}
            className="relative px-8 sm:px-12 py-4 sm:py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-2xl hover:shadow-slate-700/50 border border-slate-600 hover:border-slate-500 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              DM Me to Get Yours
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </motion.button>

          {/* AI Modified Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-full text-white/80 text-sm sm:text-base"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="font-medium">AI modified</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
