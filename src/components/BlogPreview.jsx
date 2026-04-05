import React from "react";
import { motion } from "framer-motion";
import blog1 from "../assets/blog-1.webp";
import blog2 from "../assets/blog-2.jpg";

const posts = [
  { title: "Design trends 2026", excerpt: "A quick look at what’s shaping interfaces and digital experiences this year.", date: "April 10, 2026", img: blog1 },
  { title: "How we build", excerpt: "Our internal process for shipping digital products efficiently and with high quality.", date: "March 22, 2026", img: blog2 },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-[#f2f2f5] text-black w-full py-32 px-4 sm:px-8 xl:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
          <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Journal</div>
          <motion.h2 
            className="text-5xl md:text-[5rem] font-medium leading-[1.1] tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Latest <span className="italic font-light text-neutral-400">Insights</span>
          </motion.h2>
        </div>
        <motion.button 
          className="mt-8 md:mt-0 px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors rounded-full uppercase tracking-widest text-xs font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          View All Posts
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {posts.map((p, i) => (
          <motion.article 
            className="group cursor-pointer flex flex-col gap-6" 
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="w-full aspect-[16/10] bg-neutral-300 rounded-[2rem] overflow-hidden relative">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            <div>
              <div className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-4">{p.date}</div>
              <h3 className="text-3xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">{p.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed">{p.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
