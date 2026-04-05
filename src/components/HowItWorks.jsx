import React from 'react';
import { motion } from 'framer-motion';
const steps = [
  { id: '01', title: 'Discovery & Strategy', desc: 'We start by understanding your brand, audience, and goals. Digging deep to build a solid foundation.' },
  { id: '02', title: 'Concept & Design', desc: 'Our team crafts visual directions that align with the strategy, creating modern and bold designs.' },
  { id: '03', title: 'Development', desc: 'Bringing the designs to life with robust, scalable front-end and back-end structural code.' },
  { id: '04', title: 'Launch & Grow', desc: 'Testing, optimizing, and finally launching your project to the public, ready for scale.' }
];
export default function HowItWorks() {
  return (
    <section className="bg-black text-white w-full py-32 px-4 sm:px-8 xl:px-16 overflow-hidden relative">
      <div className="text-center mb-24 relative z-10">
         <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Process</div>
         <h2 className="text-5xl md:text-[5rem] font-medium leading-none tracking-tighter">
           How It Works
         </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="flex flex-col group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-[#E3FF04] text-5xl md:text-[4.5rem] font-medium tracking-tighter mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              {step.id}
            </div>
            <div className="w-full h-[1px] bg-white/20 mb-8 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white w-0 group-hover:w-full transition-all duration-700 ease-out"
              ></motion.div>
            </div>
            <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
            <p className="text-neutral-400 font-light leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
