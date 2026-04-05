import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const testimonials = [
  { id: 1, text: "The team at Floka truly elevated our digital presence. Their attention to detail, profound understanding of modern design, and swift execution was unparalleled. We saw a 40% increase in conversions within the first month.", author: "Sarah Jenkins", role: "CMO, Nuvio" },
  { id: 2, text: "Working with them felt like an extension of our own team. They didn't just build a website; they crafted an experience that perfectly encapsulates our brand identity. Absolute professionals from start to finish.", author: "Michael Chen", role: "Founder, TechNova" },
  { id: 3, text: "Creative, bold, and incredibly fast. They took our vague ideas and turned them into a stunning reality. I highly recommend Floka for any serious digital transformation project.", author: "Emma Watson", role: "Director, GreenLeaf" }
];
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const nextParams = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevParams = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  return (
    <section className="bg-black text-white w-full py-32 px-4 sm:px-8 xl:px-16 border-t border-white/10 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        
        <div className="w-full md:w-1/3">
          <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Feedbacks</div>
          <motion.h2 
            className="text-4xl md:text-5xl font-medium leading-none tracking-tighter"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            What clients<br/>say about us
          </motion.h2>
          
          <div className="flex gap-4 mt-12">
            <button onClick={prevParams} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              &larr;
            </button>
            <button onClick={nextParams} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              &rarr;
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-16 relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex flex-col h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
            >
              <svg className="w-12 h-12 text-[#E3FF04] mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight mb-12">
                "{testimonials[index].text}"
              </p>
              <div className="mt-auto">
                <p className="font-medium text-lg">{testimonials[index].author}</p>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mt-1">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}