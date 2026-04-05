import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Maya Anderson", role: "Head of Idea", img: "/assets/images/team-1.jpg", bg: "bg-neutral-300" },
  { name: "Liam Rodriguez", role: "Lead Designer", img: "/assets/images/team-2.jpg", bg: "bg-neutral-400" },
  { name: "Noah Patel", role: "Dev Lead", img: "/assets/images/team-3.jpg", bg: "bg-neutral-500" },
];

export default function Team() {
  return (
    <section id="team" className="bg-white text-black w-full py-32 px-4 sm:px-8 xl:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24">
        <div>
          <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Leadership</div>
          <motion.h2 
            className="text-5xl md:text-[5rem] font-medium leading-none tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Meet the <span className="italic font-light text-neutral-400">Team</span>
          </motion.h2>
        </div>
        <motion.button 
          className="mt-8 md:mt-0 px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors rounded-full uppercase tracking-widest text-xs font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          View All Members
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((t, i) => (
          <motion.div 
            className="team-card group cursor-pointer" 
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={`w-full aspect-[3/4] ${t.bg} rounded-[2rem] overflow-hidden mb-6 relative`}>
              {/* Image placeholder since assets might not exist */}
              <div className="absolute inset-0 bg-neutral-800 mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="px-2">
              <h4 className="text-2xl font-medium tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-300">{t.name}</h4>
              <p className="text-neutral-500 font-light tracking-wide">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
