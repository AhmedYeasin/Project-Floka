import React, { useRef, useEffect, useCallback, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

class Particle {
  constructor(x, y) {
    this.x = x + (Math.random() * 10 - 5);
    this.y = y + (Math.random() * 10 - 5);
    this.baseX = x;
    this.baseY = y;
    this.density = (Math.random() * 40) + 5;
    this.size = Math.random() * 1.5 + 0.5;
    this.color = Math.random() > 0.5 ? '#E3FF04' : '#ffffff';
  }
  
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  
  update(mouse) {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;
    
    if (distance < mouse.radius && distance > 0) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 15; 
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 15; 
      }
    }
  }
}

export default function Hero() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  // Mouse position strictly maintained in Framework Refs
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });
  const [isReady, setIsReady] = useState(false);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Scan identical typography
    ctx.fillStyle = 'white';
    const fontSize = Math.min(window.innerWidth * 0.8, 800);
    ctx.font = `900 ${fontSize}px "Inter", "Poppins", sans-serif`; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('F', canvas.width / 2, canvas.height / 2);
    
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const newParticles = [];
    
    const step = canvas.width < 768 ? 6 : 10; 
    
    for (let y = 0; y < textCoordinates.height; y += step) {
      for (let x = 0; x < textCoordinates.width; x += step) {
        if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
          newParticles.push(new Particle(x, y));
        }
      }
    }
    
    particlesRef.current = newParticles;
    setIsReady(true);
  }, []);

  useEffect(() => {
    initParticles();
    
    const handleResize = () => {
      initParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initParticles]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  };

  // This relies directly on the Framer Motion framework engine core loops
  useAnimationFrame(() => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
        particles[i].update(mouse);
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
    }
  };

  return (
    <section 
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-20 px-4 sm:px-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Interactive Particle Canvas driven natively by framer-motion */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0 cursor-crosshair opacity-80"
      ></canvas>

      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-neutral-800/20 to-transparent blur-3xl opacity-50 rounded-full mix-blend-screen pointer-events-none z-0"></div>
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="overflow-hidden mb-6">
          <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">Digital Agency & Portfolio</p>
        </motion.div>
        
        <div className="overflow-hidden flex items-center justify-center">
          <motion.h1 
            variants={itemVariants}
            className="text-[14vw] sm:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-white drop-shadow-2xl"
          >
            Creative
          </motion.h1>
        </div>
        
        <div className="overflow-hidden flex items-center justify-center relative">
          <motion.h1 
            variants={itemVariants}
            className="text-[14vw] sm:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-white flex gap-4 drop-shadow-2xl"
          >
            <span className="italic font-light opacity-80 text-neutral-400">Digital</span> Studio
          </motion.h1>
        </div>
        
        <motion.div variants={itemVariants} className="overflow-hidden mt-12 max-w-xl mx-auto">
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            We build bold identities that speak your story—visually and verbally. From websites to packaging, we design experiences that connect.
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 mt-16 flex flex-col items-center justify-center text-xs uppercase tracking-widest text-gray-500 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="relative h-16 w-[1px] bg-gray-800 overflow-hidden">
            <motion.span 
              className="absolute top-0 left-0 w-full h-full bg-white origin-top"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
