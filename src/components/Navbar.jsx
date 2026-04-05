import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-[#F3F2EE] min-h-screen font-plus selection:bg-black selection:text-white">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-black/5">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="font-bold text-2xl tracking-tighter flex items-center gap-1">
            <span className="bg-black text-white px-1">F</span>loka
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[13px] font-semibold uppercase tracking-wider text-black/80">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">Pages</a>
          <a href="#" className="hover:text-black transition-colors">Portfolio</a>
          <a href="#" className="hover:text-black transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-8">
          <a href="mailto:info@floka.com" className="text-[14px] font-medium hidden lg:block">
            info@floka.com
          </a>
          <button className="flex flex-col gap-1.5 cursor-pointer group">
            <div className="w-6 h-0.5 bg-black rounded-full transition-all group-hover:w-4"></div>
            <div className="w-4 h-0.5 bg-black rounded-full transition-all group-hover:w-6"></div>
          </button>
        </div>
      </nav>

      {/* Hero Container */}
      <main className="p-4 md:p-6">
        <div className="relative h-[85vh] rounded-[40px] overflow-hidden bg-zinc-900 flex items-center justify-center">
          
          {/* Background Image with Overlay */}
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Text Content */}
          <div className="relative z-10 text-center select-none">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold text-outline uppercase tracking-tighter">
                Creative
              </span>
              <span className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold text-white uppercase tracking-tighter -mt-[2vw]">
                Studio
              </span>
            </motion.h1>
          </div>

          {/* Bottom Floating Badge */}
          <div className="absolute bottom-10 left-10">
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 group cursor-pointer transition-all hover:bg-white/10">
              <span className="text-white/60 text-xs font-medium">Buy on</span>
              <span className="text-white text-sm font-bold flex items-center gap-1">
                <span className="text-green-400">envato</span>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;