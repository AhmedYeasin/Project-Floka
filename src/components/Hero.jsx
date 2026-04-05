import React from 'react';
import { motion } from 'framer-motion';
export default function Hero() {
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
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-20 px-4 sm:px-8">
      {/* Background ambient light / gradient (optional element from design) */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-neutral-800/20 to-transparent blur-3xl opacity-50 rounded-full mix-blend-screen pointer-events-none"></div>
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sup-title */}
        <motion.div variants={itemVariants} className="overflow-hidden mb-6">
          <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">Digital Agency & Portfolio</p>
        </motion.div>
        {/* Huge Title Text */}
        <div className="overflow-hidden flex items-center justify-center">
          <motion.h1 
            variants={itemVariants}
            className="text-[14vw] sm:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-white"
          >
            Creative
          </motion.h1>
        </div>
        <div className="overflow-hidden flex items-center justify-center relative">
          <motion.h1 
            variants={itemVariants}
            className="text-[14vw] sm:text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-white flex gap-4"
          >
            <span className="italic font-light opacity-80 text-neutral-400">Digital</span> Studio
          </motion.h1>
        </div>
        {/* Description */}
        <motion.div variants={itemVariants} className="overflow-hidden mt-12 max-w-xl">
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            We build bold identities that speak your story—visually and verbally. From websites to packaging, we design experiences that connect.
          </p>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 mt-16 flex flex-col items-center justify-center text-xs uppercase tracking-widest text-gray-500 gap-2"
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
