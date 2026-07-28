import { motion } from "framer-motion";
import { Globe2, Zap, ArrowRight, MapPin, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Nexa Web Solutions! I'd like to discuss getting a professional website that reaches customers worldwide. 🌍");
    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotation = 0;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const size = Math.min(container.offsetWidth, container.offsetHeight, 600);
      canvas.width = size;
      canvas.height = size;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars background
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01
    }));

    // Connection points on globe (major cities)
    const connectionPoints = [
      { lat: 40.7128, lon: -74.0060, name: "New York" },
      { lat: 51.5074, lon: -0.1278, name: "London" },
      { lat: -33.8688, lon: 151.2093, name: "Sydney" },
      { lat: 35.6762, lon: 139.6503, name: "Tokyo" },
      { lat: -26.2041, lon: 28.0473, name: "Johannesburg" },
      { lat: 1.3521, lon: 103.8198, name: "Singapore" },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      // Draw stars with twinkling effect
      stars.forEach(star => {
        star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.2, Math.min(0.8, star.opacity));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Apply mouse tilt effect
      const tiltX = (mousePosition.y - 0.5) * 0.2;
      const tiltY = (mousePosition.x - 0.5) * -0.2;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Draw atmospheric glow
      const gradient = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius * 1.2);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
      gradient.addColorStop(0.8, 'rgba(59, 130, 246, 0.15)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.3)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Draw Earth sphere with gradient
      const earthGradient = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, 0, 0, 0, radius);
      earthGradient.addColorStop(0, '#4a9eff');
      earthGradient.addColorStop(0.5, '#2563eb');
      earthGradient.addColorStop(1, '#1e3a8a');
      
      ctx.fillStyle = earthGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw continents (simplified shapes)
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
      ctx.fillStyle = 'rgba(34, 197, 94, 0.25)';
      ctx.lineWidth = 1.5;

      const drawContinent = (points, offsetRotation = 0) => {
        ctx.beginPath();
        points.forEach((point, i) => {
          const angle = ((point.lon + rotation + offsetRotation) * Math.PI) / 180;
          const lat = (point.lat * Math.PI) / 180;
          const x = radius * Math.cos(lat) * Math.sin(angle);
          const y = radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.cos(angle);

          if (z > 0) {
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };

      // Simplified continent shapes
      const africa = [
        { lat: 30, lon: 10 }, { lat: 15, lon: 40 }, { lat: -35, lon: 25 }, { lat: -30, lon: 15 }
      ];
      const americas = [
        { lat: 60, lon: -100 }, { lat: 40, lon: -80 }, { lat: -55, lon: -70 }, { lat: -50, lon: -90 }
      ];
      const asia = [
        { lat: 70, lon: 90 }, { lat: 50, lon: 140 }, { lat: 0, lon: 120 }, { lat: 20, lon: 70 }
      ];

      drawContinent(africa);
      drawContinent(americas);
      drawContinent(asia);

      // Draw glowing connection lines between cities
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';

      for (let i = 0; i < connectionPoints.length; i++) {
        for (let j = i + 1; j < connectionPoints.length; j++) {
          const p1 = connectionPoints[i];
          const p2 = connectionPoints[j];

          const angle1 = ((p1.lon + rotation) * Math.PI) / 180;
          const lat1 = (p1.lat * Math.PI) / 180;
          const x1 = radius * Math.cos(lat1) * Math.sin(angle1);
          const y1 = radius * Math.sin(lat1);
          const z1 = radius * Math.cos(lat1) * Math.cos(angle1);

          const angle2 = ((p2.lon + rotation) * Math.PI) / 180;
          const lat2 = (p2.lat * Math.PI) / 180;
          const x2 = radius * Math.cos(lat2) * Math.sin(angle2);
          const y2 = radius * Math.sin(lat2);
          const z2 = radius * Math.cos(lat2) * Math.cos(angle2);

          if (z1 > 0 && z2 > 0) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }

      ctx.shadowBlur = 0;

      // Draw connection points (cities)
      connectionPoints.forEach(point => {
        const angle = ((point.lon + rotation) * Math.PI) / 180;
        const lat = (point.lat * Math.PI) / 180;
        const x = radius * Math.cos(lat) * Math.sin(angle);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.cos(angle);

        if (z > 0) {
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(251, 191, 36, 0.9)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Pulsing effect
          const pulse = Math.sin(Date.now() * 0.003 + point.lon) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 6 + pulse * 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(251, 191, 36, ${0.3 * pulse})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      ctx.restore();

      rotation += 0.15;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
            >
              <Globe2 className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-semibold">Global Web Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
              We Design and Develop{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Websites
              </span>
              <br />
              That Go{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                  Worldwide
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Your website is more than just an online presence—it's the digital face of your business. 
              We create <span className="text-blue-400 font-semibold">modern, responsive, and high-performance</span> websites 
              built to reach audiences across the globe.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Countries Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">100+</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">99%</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleWhatsApp}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-blue-500/50 text-blue-300 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
              >
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Fast Delivery (1-3 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Worldwide Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-[600px] max-h-[600px] rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] max-w-[540px] max-h-[540px] rounded-full border border-cyan-500/30" />
            </div>

            {/* Canvas for 3D Globe */}
            <canvas
              ref={canvasRef}
              className="relative z-10 max-w-full h-auto cursor-move"
              style={{ filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.3))' }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Globe2, title: "Global Reach", desc: "Clients in 50+ countries" },
            { icon: Zap, title: "Fast Delivery", desc: "1-3 day turnaround" },
            { icon: Users, title: "Expert Team", desc: "10+ years experience" },
            { icon: TrendingUp, title: "Proven Results", desc: "99% satisfaction rate" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-900/70"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
