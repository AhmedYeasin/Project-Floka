import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const services = [
  { id: 1, title: 'Product Design', desc: 'Digital designs that help brands move faster and convert better.' },
  { id: 2, title: 'Game Design', desc: 'Immersive worlds and engaging mechanics that keep players hooked.' },
  { id: 3, title: 'Web Design', desc: 'Scalable and performant interfaces for modern web businesses.' },
  { id: 4, title: 'Branding', desc: 'Creating identities that speak to your audience and stand the test of time.' }
];
export default function Expertise() {
  const [activeItem, setActiveItem] = useState(services[0].id);
  return (
    <section className="bg-black text-white w-full min-h-screen py-32 px-4 sm:px-8 xl:px-16 flex flex-col lg:flex-row gap-16 item border-t border-white/10">
      
      {/* Left Column - Active Details */}
      <div className="w-full lg:w-1/3 flex flex-col justify-end">
        <AnimatePresence mode="wait">
          {services.map((service) => activeItem === service.id && (
            <motion.div 
              key={service.id}
              className="bg-neutral-900 rounded-3xl p-10 flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="text-xl font-medium">{service.title}</h4>
              <p className="text-neutral-400 font-light leading-relaxed">{service.desc}</p>
              <button className="flex items-center justify-between w-full mt-4 bg-white text-black py-4 px-6 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors">
                <span>Read More</span>
                <span>+</span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Right Column - Large Hoverable List */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center gap-0">
        <p className="text-xl md:text-3xl font-light text-white mb-16 leading-relaxed max-w-2xl">
          Here to help with everything from small updates to full-scale redesigns, tailored to your evolving needs.
        </p>
        
        <div className="flex flex-col">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`border-b border-white/10 py-6 md:py-10 cursor-pointer transition-colors duration-500 flex items-center`}
              onMouseEnter={() => setActiveItem(service.id)}
            >
              <motion.h3 
                className={`text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] font-medium tracking-tighter transition-all duration-500
                  ${activeItem === service.id ? 'text-white' : 'text-neutral-800 hover:text-neutral-600'}
                `}
              >
                {service.title}
              </motion.h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
