import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: '01', title: "Branding", body: "Identity systems, styleguides and positioning that define who you are and speak to your audience." },
  { id: '02', title: "Web Design", body: "UX/UI, product design and interactive prototyping driven by real user needs and modern aesthetics." },
  { id: '03', title: "Development", body: "Robust frontend, backend and scalable integrations built with modern tech stacks." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-black w-full py-32 px-4 sm:px-8 xl:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-24">
        <div>
          <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Our Expertise</div>
          <motion.h2 
            className="text-5xl md:text-[5rem] font-medium leading-[1.1] tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Digital <br/><span className="italic font-light text-neutral-400">Services</span>
          </motion.h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, index) => (
          <motion.div 
            key={s.title}
            className="border border-neutral-200 rounded-[2rem] p-10 hover:bg-black hover:text-white transition-colors duration-500 group cursor-pointer flex flex-col justify-between min-h-[320px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-xl font-light text-neutral-400 mb-16 group-hover:text-neutral-500 transition-colors">{s.id}</div>
            <div>
              <h3 className="text-3xl font-medium mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-300">{s.title}</h3>
              <p className="text-neutral-500 group-hover:text-neutral-400 transition-colors leading-relaxed font-light">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
