import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="bg-white text-black w-full py-32 px-4 sm:px-8 xl:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-[#f2f2f5] rounded-[3rem] overflow-hidden shadow-sm">
        {/* Left Info */}
        <motion.div 
          className="w-full md:w-5/12 p-12 md:p-20 bg-black text-white flex flex-col justify-between relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black to-black pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6 tracking-tight">
              Let's make something <br/><span className="italic font-light text-neutral-400">amazing</span>
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-12">
              Ready to take your digital presence to the next level? Drop us a line.
            </p>
          </div>
          <div className="relative z-10">
            <div className="text-sm text-neutral-500 uppercase tracking-widest font-medium mb-2">Direct Contact</div>
            <a href="mailto:hello@floka.example" className="text-2xl hover:text-neutral-300 transition-colors">hello@floka.example</a>
            <div className="mt-4 text-neutral-500 font-light">+1 (234) 567 890</div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div 
          className="w-full md:w-7/12 p-12 md:p-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-10">Get a Quote</div>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium tracking-wide">Name</label>
              <input type="text" className="bg-transparent border-b border-black/20 pb-2 outline-none focus:border-black transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium tracking-wide">Email</label>
              <input type="email" className="bg-transparent border-b border-black/20 pb-2 outline-none focus:border-black transition-colors" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium tracking-wide">Message</label>
              <textarea rows="3" className="bg-transparent border-b border-black/20 pb-2 outline-none focus:border-black transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <motion.button 
              className="mt-6 self-start px-10 py-5 bg-black text-white hover:bg-neutral-800 transition-colors rounded-full tracking-widest text-xs font-semibold uppercase relative overflow-hidden group"
            >
              <span className="relative z-10 transition-transform group-hover:scale-105 block">Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
