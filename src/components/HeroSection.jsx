import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to take my business global with a world-class website.");
    window.open(`https://wa.me/27823562239?text=${message}`, '_blank');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotation = 0;

    const resizeCanvas = () => {
      const size = Math.min(window.innerWidth, window.innerHeight, 800);
      canvas.width = size;
      canvas.height = size;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      opacity: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.015 + 0.005
    }));

    // Satellites
    const satellites = Array.from({ length: 3 }, (_, i) => ({
      angle: (i * 120),
      radius: 1.4,
      speed: 0.3 + i * 0.1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.32;

      // Animated stars
      stars.forEach(star => {
        star.opacity = 0.3 + Math.sin(Date.now() * star.speed) * 0.4;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer glow
      const outerGlow = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.4);
      outerGlow.addColorStop(0, 'rgba(59, 130, 246, 0)');
      outerGlow.addColorStop(0.7, 'rgba(59, 130, 246, 0.1)');
      outerGlow.addColorStop(1, 'rgba(59, 130, 246, 0.25)');
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.4, 0, Math.PI * 2);
      ctx.fill();

      // Earth gradient
      const earthGradient = ctx.createRadialGradient(-radius * 0.25, -radius * 0.25, 0, 0, 0, radius);
      earthGradient.addColorStop(0, '#5dade2');
      earthGradient.addColorStop(0.4, '#3498db');
      earthGradient.addColorStop(0.7, '#2874a6');
      earthGradient.addColorStop(1, '#1a5490');
      
      ctx.fillStyle = earthGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Continents with more detail
      ctx.strokeStyle = 'rgba(46, 204, 113, 0.5)';
      ctx.fillStyle = 'rgba(46, 204, 113, 0.3)';
      ctx.lineWidth = 1;

      const drawLandmass = (points, rot) => {
        ctx.beginPath();
        let started = false;
        points.forEach(point => {
          const angle = ((point.lon + rotation + rot) * Math.PI) / 180;
          const lat = (point.lat * Math.PI) / 180;
          const x = radius * Math.cos(lat) * Math.sin(angle);
          const y = radius * Math.sin(lat);
          const z = radius * Math.cos(lat) * Math.cos(angle);

          if (z > 0) {
            if (!started) {
              ctx.moveTo(x, y);
              started = true;
            } else {
              ctx.lineTo(x, y);
            }
          }
        });
        if (started) {
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      };

      // Detailed continents
      const continents = [
        [{ lat: 35, lon: 10 }, { lat: 25, lon: 35 }, { lat: -30, lon: 30 }, { lat: -35, lon: 20 }, { lat: 5, lon: 5 }],
        [{ lat: 70, lon: -95 }, { lat: 50, lon: -75 }, { lat: 25, lon: -80 }, { lat: 10, lon: -80 }, { lat: -10, lon: -70 }, { lat: -50, lon: -70 }],
        [{ lat: 70, lon: 85 }, { lat: 60, lon: 140 }, { lat: 10, lon: 130 }, { lat: -10, lon: 110 }, { lat: 35, lon: 70 }],
        [{ lat: -15, lon: 130 }, { lat: -35, lon: 150 }, { lat: -40, lon: 140 }, { lat: -25, lon: 120 }],
      ];

      continents.forEach(cont => drawLandmass(cont, 0));

      // Connection lines (global network)
      const connections = [
        [[40.7, -74], [51.5, -0.1]], [[51.5, -0.1], [35.7, 139.7]],
        [[35.7, 139.7], [-33.9, 151.2]], [[-33.9, 151.2], [-26.2, 28.0]],
        [[-26.2, 28.0], [40.7, -74]], [[1.3, 103.8], [35.7, 139.7]]
      ];

      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(251, 191, 36, 0.6)';

      const time = Date.now() * 0.001;
      connections.forEach((conn, i) => {
        const [[lat1, lon1], [lat2, lon2]] = conn;
        
        const angle1 = ((lon1 + rotation) * Math.PI) / 180;
        const latRad1 = (lat1 * Math.PI) / 180;
        const x1 = radius * Math.cos(latRad1) * Math.sin(angle1);
        const y1 = radius * Math.sin(latRad1);
        const z1 = radius * Math.cos(latRad1) * Math.cos(angle1);

        const angle2 = ((lon2 + rotation) * Math.PI) / 180;
        const latRad2 = (lat2 * Math.PI) / 180;
        const x2 = radius * Math.cos(latRad2) * Math.sin(angle2);
        const y2 = radius * Math.sin(latRad2);
        const z2 = radius * Math.cos(latRad2) * Math.cos(angle2);

        if (z1 > 0 && z2 > 0) {
          // Animated pulse
          const pulse = (Math.sin(time * 2 + i) + 1) / 2;
          ctx.strokeStyle = `rgba(251, 191, 36, ${0.3 + pulse * 0.3})`;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          const steps = 20;
          for (let t = 0; t <= steps; t++) {
            const ratio = t / steps;
            const midX = x1 + (x2 - x1) * ratio;
            const midY = y1 + (y2 - y1) * ratio;
            const arc = Math.sin(ratio * Math.PI) * 20;
            ctx.lineTo(midX, midY - arc);
          }
          ctx.stroke();

          // Moving dot
          const dotPos = (time + i * 0.5) % 2;
          if (dotPos < 1) {
            const ratio = dotPos;
            const dotX = x1 + (x2 - x1) * ratio;
            const dotY = y1 + (y2 - y1) * ratio - Math.sin(ratio * Math.PI) * 20;
            
            ctx.beginPath();
            ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(251, 191, 36, 0.9)';
            ctx.fill();
          }
        }
      });

      ctx.shadowBlur = 0;

      // Satellites orbiting
      satellites.forEach(sat => {
        sat.angle += sat.speed;
        const satAngle = (sat.angle * Math.PI) / 180;
        const satX = Math.cos(satAngle) * radius * sat.radius;
        const satY = Math.sin(satAngle) * radius * sat.radius;

        ctx.beginPath();
        ctx.arc(satX, satY, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.restore();

      rotation += 0.08;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fixed Earth Background */}
      <motion.div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{ scale, opacity }}
      >
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto"
          style={{ filter: 'drop-shadow(0 0 60px rgba(59, 130, 246, 0.4))' }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Sliding Company Name */}
          <motion.div 
            className="mb-12 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <motion.div
              animate={{ x: ['-100%', '0%'] }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="text-sm sm:text-base text-white/30 font-light tracking-[0.3em] whitespace-nowrap"
            >
              NEXA TECH SOLUTIONS
            </motion.div>
          </motion.div>

          {/* Minimal Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-white/70 font-light tracking-wide">Global Digital Solutions</span>
            </div>
          </motion.div>

          {/* Main Headline - Tesla Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-none"
          >
            Websites That<br />
            <span className="font-normal">Go Global</span>
          </motion.h1>

          {/* Minimal Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg sm:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 tracking-wide"
          >
            Transforming businesses worldwide through elegant design and flawless execution
          </motion.p>

          {/* Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleWhatsApp}
              className="group px-10 py-4 bg-white text-black rounded-full font-medium text-base hover:bg-white/90 transition-all duration-300 flex items-center gap-3"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
