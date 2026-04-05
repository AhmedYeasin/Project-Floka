import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <footer className="bg-[#E3FF04] text-black w-full pt-32 pb-10 px-4 sm:px-8 xl:px-16 mt-20 relative overflow-hidden flex flex-col justify-between min-h-screen">
      
      {/* Top Main CTA */}
      <div className="flex flex-col items-center text-center mt-20 relative z-10 w-full mb-32">
        <motion.p 
          className="uppercase tracking-widest text-sm font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Have an idea?
        </motion.p>
        <motion.h2 
          className="text-[15vw] sm:text-[18vw] font-black uppercase leading-[0.8] tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        >
          Let's Talk
        </motion.h2>
        <motion.div 
          className="mt-16 w-32 h-32 rounded-full bg-black text-white flex items-center justify-center uppercase text-xs font-bold tracking-widest hover:scale-110 transition-transform cursor-pointer shadow-2xl"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Start Project
        </motion.div>
      </div>
      {/* Bottom Footer Details */}
      <div className="border-t border-black/20 pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10 w-full">
        
        <div className="w-full md:w-1/3">
          <p className="text-3xl font-bold tracking-tighter mb-6">FLOKA.</p>
          <p className="font-light text-lg mb-6">101 Days Rd, Grange QLD 4051<br/>Australia</p>
          <div className="flex flex-col gap-2 font-medium">
            <a href="mailto:info@floka-design.com" className="hover:underline">info@floka-design.com</a>
            <a href="tel:0731101031" className="hover:underline">07 3110 1031</a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex md:justify-center">
          <div className="flex flex-col gap-4 font-semibold uppercase tracking-widest text-sm">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Dribbble</a>
            <a href="#" className="hover:underline">Twitter / X</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col md:items-end font-medium text-sm text-black/60">
          <p className="mb-2">© 2026 Floka Studio.</p>
          <p>Created with dedication.</p>
        </div>
      </div>
    </footer>
  );
}
