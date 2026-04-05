import React from 'react';
import { motion } from 'framer-motion';
import vision1 from '../assets/vision1.jpg'
import client2 from '../assets/client2.jpg'

export default function About() {
  return (
    <section id="page" className="bg-[#f2f2f5] text-black w-full min-h-screen py-32 px-4 sm:px-8 xl:px-16 flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
      {/* Left Column - Image & Vision */}
      <div className="w-full md:w-5/12 flex flex-col gap-10">
        <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">About Company</div>
        
        <motion.div 
          className="rounded-[2.5rem] overflow-hidden w-full aspect-[4/5] bg-neutral-300 relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* We will leave this placeholder as a dark grey gradient for now */}
          <div className="w-full h-full group-hover:scale-105 transition-transform duration-1000">

          <img src={vision1} alt="" />
          </div>
        </motion.div>
        
        {/* Vision Box */}
        <motion.div 
          className="bg-white rounded-[1rem] p-8 mt-[-8rem] z-10 w-5/6 shadow-xl shadow-neutral-200/50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our vision</h3>
          <p className="text-neutral-500 leading-relaxed font-light">
            Digital designs that help brands move faster and convert better. We build the future.
          </p>
        </motion.div>
      </div>
      {/* Right Column - Statement & Details */}
      <div className="w-full md:w-7/12 flex flex-col gap-16 md:pt-16">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
        >
          Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12 text-neutral-600 font-light text-lg">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 border-2 border-[#f2f2f5] z-30">
                  <img src={vision1} alt="" className='rounded-full'/>
                </div>
                <div className="w-12 h-12 border-2 border-[#f2f2f5] z-20">
                  <img src={client2} alt="" className='rounded-full'/>
                </div>
                <div className="w-12 h-12 rounded-full bg-neutral-600 border-2 border-[#f2f2f5] z-10"></div>
              </div>
              <span className="font-medium text-black">12k+ reviews</span>
            </div>
            <p className="leading-relaxed">
              Passionate about creativity. Obsessed with results. Creativity is nothing without purpose. We craft with intention, driven by insights and designed to connect.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="leading-relaxed md:mt-[4.5rem]">
              We build bold identities that speak your story—visually and verbally. From websites to packaging, we design experiences that are beautiful and functional. We don't just make things look good.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
