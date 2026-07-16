import { motion } from "framer-motion";
import { Maximize2, Sparkles, Crown, Star, Zap } from "lucide-react";

export default function HeroSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Nexa Web Solutions! I'd like to discuss getting a premium website that gets me clients. 🚀");
    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Ornate background with gold accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
      </div>

      {/* Decorative corner flourishes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-amber-600/30 pointer-events-none"
        style={{
          borderImage: 'linear-gradient(135deg, #d4af37 0%, transparent 50%) 1'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-8 right-8 w-32 h-32 border-t-2 border-r-2 border-amber-600/30 pointer-events-none"
        style={{
          borderImage: 'linear-gradient(225deg, #d4af37 0%, transparent 50%) 1'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-8 left-8 w-32 h-32 border-b-2 border-l-2 border-amber-600/30 pointer-events-none"
        style={{
          borderImage: 'linear-gradient(45deg, #d4af37 0%, transparent 50%) 1'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-amber-600/30 pointer-events-none"
        style={{
          borderImage: 'linear-gradient(315deg, #d4af37 0%, transparent 50%) 1'
        }}
      />
      
      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12 lg:space-y-16">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-950/80 to-amber-900/80 border-2 border-amber-600/30 backdrop-blur-sm"
          >
            <Crown className="w-5 h-5 text-amber-400" />
            <span className="text-amber-200 font-dm font-semibold text-sm tracking-wider uppercase">Premium Web Design</span>
            <Crown className="w-5 h-5 text-amber-400" />
          </motion.div>

          {/* Main Heading with Gothic Font */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 relative"
          >
            {/* Decorative line above */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent to-amber-500"
              />
              <Star className="w-4 h-4 text-amber-400" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-gradient-to-l from-transparent to-amber-500"
              />
            </div>

            <h1 className="font-gothic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight px-4" style={{
              background: 'linear-gradient(135deg, #f4e4c1 0%, #e5c287 25%, #d4af37 50%, #e5c287 75%, #f4e4c1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(212, 175, 55, 0.3)',
              filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.4))'
            }}>
              Websites
            </h1>
            
            <p className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed max-w-4xl mx-auto tracking-wide">
              That Transform{" "}
              <span className="relative inline-block">
                <span className="text-amber-400 italic">Visitors</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"
                />
              </span>
              {" "}Into{" "}
              <span className="relative inline-block">
                <span className="text-amber-300 font-extrabold">Clients</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -top-2 -right-6 text-amber-400"
                >
                  ✨
                </motion.span>
              </span>
            </p>

            {/* Decorative line below */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.7 }}
                className="h-[2px] bg-gradient-to-r from-transparent to-amber-500"
              />
              <Star className="w-4 h-4 text-amber-400" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.7 }}
                className="h-[2px] bg-gradient-to-l from-transparent to-amber-500"
              />
            </div>
          </motion.div>

          {/* Elegant Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl font-dm max-w-3xl leading-relaxed"
          >
            Elevate your brand with{" "}
            <span className="text-amber-400 font-semibold">handcrafted websites</span>{" "}
            that blend timeless elegance with modern performance.{" "}
            <span className="text-white font-medium">Built for success. Designed to convert.</span>
          </motion.p>

          {/* Laptop Mockup - Premium Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-5xl mx-auto px-4 sm:px-8 mt-8"
          >
            {/* Glow effect behind laptop */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent blur-3xl" />
            
            {/* Laptop Container with ornate border */}
            <div className="relative">
              {/* Decorative corner embellishments */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-500/60" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500/60" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber-500/60" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-500/60" />

              {/* Laptop Screen */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-3xl border-4 border-amber-900/40 shadow-2xl shadow-amber-900/20 overflow-hidden">
                {/* Screen bezel */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-slate-700 rounded-b-lg z-10" />
                
                {/* Split Screen Content - Premium Design */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-950 to-slate-900 flex">
                  {/* Left Side - Before (Basic) */}
                  <div className="w-1/2 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center border-r border-slate-600/50 relative">
                    <div className="absolute top-4 left-4 text-xs text-slate-500 font-mono">BEFORE</div>
                    <div className="text-slate-400 text-xs sm:text-sm mb-3 font-dm">Generic Template #247</div>
                    <div className="text-slate-300 font-bold text-sm sm:text-xl lg:text-2xl mb-4 text-center">Cheap Web Design</div>
                    <div className="text-slate-400 text-xs sm:text-sm mb-6 text-center max-w-xs leading-relaxed">
                      Basic layouts. Slow loading. No conversions.
                    </div>
                    <button className="bg-slate-600 text-slate-300 text-xs sm:text-sm px-4 py-2 rounded hover:bg-slate-500 transition-colors font-dm">
                      Learn More
                    </button>
                  </div>

                  {/* Vertical Divider with premium glow */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-600 via-amber-400 to-amber-600" />
                    <motion.div
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-200 to-transparent"
                    />
                  </div>

                  {/* Right Side - After (Premium) */}
                  <div className="w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950/30 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center relative overflow-hidden">
                    {/* Premium badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40">
                      <Crown className="w-3 h-3 text-amber-400" />
                      <span className="text-xs text-amber-300 font-dm font-semibold">PREMIUM</span>
                    </div>
                    
                    <div className="absolute top-4 left-4 text-xs text-amber-500/70 font-mono">AFTER</div>
                    <div className="text-amber-400/80 text-xs sm:text-sm mb-2 font-dm tracking-wide">✦ NEXA WEB SOLUTIONS ✦</div>
                    <div className="text-white font-bold text-lg sm:text-2xl lg:text-4xl mb-2 text-center">Grow Your</div>
                    <div className="text-amber-300 font-bold text-lg sm:text-2xl lg:text-4xl mb-4 text-center font-playfair italic">Business Online</div>
                    <div className="text-slate-300 text-xs sm:text-sm lg:text-base mb-6 text-center max-w-xs leading-relaxed">
                      <span className="text-amber-400 font-semibold">Premium Design.</span> Lightning Fast. Conversion Focused.
                    </div>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs sm:text-sm lg:text-base px-6 py-2.5 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/50 font-dm font-semibold tracking-wide">
                      Get Started ✨
                    </button>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="relative h-4 sm:h-5 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-3xl shadow-2xl border-2 border-amber-900/30">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-amber-800/20 to-amber-900/10" />
              </div>
              
              {/* Laptop Stand */}
              <div className="mx-auto w-40 sm:w-48 h-1.5 sm:h-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-lg shadow-lg" />
            </div>

            {/* Floating action button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/40 transition-all duration-300 cursor-pointer border-4 border-amber-900/30"
              aria-label="Get Started"
            >
              <Zap className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </motion.button>
          </motion.div>

          {/* Tagline with ornate styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center gap-4 sm:gap-6 text-slate-300 text-base sm:text-lg lg:text-xl font-dm font-light tracking-wider"
          >
            <span className="text-amber-400">◆</span>
            <span>Elegant</span>
            <span className="text-amber-400/60">•</span>
            <span>Fast</span>
            <span className="text-amber-400/60">•</span>
            <span>Profitable</span>
            <span className="text-amber-400">◆</span>
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={handleWhatsApp}
              className="relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white rounded-full font-dm font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 border-2 border-amber-400/30 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Crown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Claim Your Premium Website
                <Crown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          {/* Credentials Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/60 backdrop-blur-sm border border-amber-600/20 rounded-full"
          >
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-slate-300 text-sm font-dm">
              <span className="text-amber-400 font-semibold">50+ Premium Sites</span> Delivered Worldwide
            </span>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
    </section>
  );
}
