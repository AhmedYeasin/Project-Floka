import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    id: 1, 
    title: 'Nuvio clothing', 
    category: 'Branding', 
    ratio: 'aspect-[4/3]', 
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home-2-port-1-900x675.jpg' 
  },
  { 
    id: 2, 
    title: 'Floka studio', 
    category: 'Web Design', 
    ratio: 'aspect-[3/4]', 
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home-2-port-2-660x495.jpg' 
  },
  { 
    id: 3, 
    title: 'Scent packaging', 
    category: 'Product Design', 
    ratio: 'aspect-[3/4]', 
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home-2-port-3-900x675.jpg' 
  },
  { 
    id: 4, 
    title: 'Gamer gear', 
    category: '3D Render', 
    ratio: 'aspect-[4/3]', 
    image: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home-2-port-4-900x675.jpg' 
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black text-white w-full min-h-screen py-32 px-4 sm:px-8 xl:px-16 overflow-hidden">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-24">
        <div>
          <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Selected Works</div>
          <motion.h2 
            className="text-5xl md:text-[5rem] font-medium leading-[1.1] tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured<br/><span className="italic font-light opacity-70">Projects</span>
          </motion.h2>
        </div>
        <motion.button 
          className="mt-8 md:mt-0 px-8 py-4 border border-white hover:bg-white hover:text-black transition-colors rounded-full uppercase tracking-widest text-xs font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          View All Works
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`w-full group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className={`w-full ${project.ratio} rounded-[2rem] bg-neutral-900 overflow-hidden relative mb-6`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center pointer-events-none">
                <span className="text-white text-lg tracking-widest uppercase scale-75 group-hover:scale-100 transition-transform duration-500 font-medium">
                  View Project
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start px-2">
              <h3 className="text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
              <span className="text-neutral-500 uppercase text-xs tracking-widest mt-2">{project.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}