import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 w-full px-6 sm:px-8 py-6 z-50 flex justify-between items-center transition-colors duration-500 ${isOpen ? 'text-black' : 'text-white mix-blend-difference'}`}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold tracking-tighter cursor-pointer flex items-center gap-3 relative z-[60]"
          onClick={(e) => handleScroll(e, 'home')}
        >
          <motion.svg 
            width="38" height="38" viewBox="0 0 40 40" fill="none"
            className="text-current flex-shrink-0"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Dynamic Box */}
            <motion.rect 
              x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.5"
              variants={{
                rest: { rotate: 0, scale: 1 },
                hover: { rotate: 45, scale: 1.1, stroke: "#E3FF04", rx: 18 }
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            {/* Vertical Stem */}
            <motion.path d="M15 12V28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
              variants={{ hover: { stroke: "#E3FF04" } }}
            />
            {/* Top horizontal Bar */}
            <motion.path d="M15 13H26" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
              variants={{
                rest: { x: 0 },
                hover: { x: 6, stroke: "#E3FF04" }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            {/* Middle horizontal bar */}
            <motion.path d="M15 21H22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
              variants={{
                rest: { x: 0 },
                hover: { x: 10, stroke: "#E3FF04" }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.05 }}
            />
          </motion.svg>
          <span className="hidden sm:block">FLOKA.</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-6 sm:gap-10 relative z-[60]"
        >
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 sm:gap-10 text-xl font-medium tracking-wide uppercase items-center">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:opacity-70 transition-opacity">Home</a>
            <a href="#page" onClick={(e) => handleScroll(e, 'page')} className="hover:opacity-70 transition-opacity">Page</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="hover:opacity-70 transition-opacity">Portfolio</a>
            <a href="#blog" onClick={(e) => handleScroll(e, 'blog')} className="hover:opacity-70 transition-opacity">Blog</a>
            <button onClick={(e) => handleScroll(e, 'contact')} className="hover:opacity-70 transition-opacity cursor-pointer">
              Let's Talk
            </button>
          </nav>
          
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-[6px] font-medium group cursor-pointer ml-2 items-end"
          >
            <span className={`h-[2px] transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-[8px] bg-black' : 'w-8 group-hover:w-6 bg-white'}`}></span>
            <span className={`h-[2px] transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 bg-black' : 'w-8 bg-white'}`}></span>
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-[40] flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          >
            <nav className="flex flex-col gap-10 text-2xl font-sm tracking-tight uppercase text-center text-black">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-neutral-500 transition-colors">Home</a>
              <a href="#page" onClick={(e) => handleScroll(e, 'page')} className="hover:text-neutral-500 transition-colors">Page</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="hover:text-neutral-500 transition-colors">Portfolio</a>
              <a href="#blog" onClick={(e) => handleScroll(e, 'blog')} className="hover:text-neutral-500 transition-colors">Blog</a>
              <button onClick={(e) => handleScroll(e, 'contact')} className="hover:text-neutral-500 transition-colors uppercase">
                Let's Talk
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
