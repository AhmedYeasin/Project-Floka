import React from 'react';
import { motion } from 'framer-motion';
const awards = [
  { id: 1, year: '2025', title: 'Site of the Day', platform: 'AWWWARDS', project: 'Nuvio Branding' },
  { id: 2, year: '2024', title: 'Best UI/UX', platform: 'CSS Design Awards', project: 'Floka Studio' },
  { id: 3, year: '2023', title: 'FWA of the Day', platform: 'The FWA', project: 'Scent Packaging' },
  { id: 4, year: '2023', title: 'E-commerce Site of the Year', platform: 'Webby Awards', project: 'Gamer Gear' }
];
export default function Awards() {
  return (
    <section className="bg-black text-white w-full py-32 px-4 sm:px-8 xl:px-16 border-t border-white/10">
      <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-16">Recognition</div>
      
      <div className="flex flex-col">
        {awards.map((award, index) => (
          <motion.div 
            key={award.id}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 px-4 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full md:w-1/4 flex gap-4 md:gap-8 items-center mb-4 md:mb-0">
              <span className="text-xl font-light text-neutral-500 group-hover:text-white transition-colors">{award.year}</span>
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 bg-white text-black">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 group-hover:-translate-x-2 transition-transform duration-300">{award.title}</h3>
              <p className="text-neutral-400 font-light">{award.platform}</p>
            </div>
            
            <div className="w-full md:w-1/4 text-left md:text-right mt-4 md:mt-0 uppercase tracking-widest text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {award.project}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
