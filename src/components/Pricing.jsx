import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-current shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 opacity-40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const plans = [
  { 
    name: "Basic Plan", 
    desc: "Perfect for small personal projects.",
    price: { monthly: "$49", project: "$499" }, 
    featured: false,
    features: [
      { name: "Web Design", included: true },
      { name: "Brand Identity", included: true },
      { name: "Hosting & Domain", included: false },
      { name: "24/7 Support", included: false },
      { name: "SEO Optimization", included: false }
    ]
  },
  { 
    name: "Standard Plan", 
    desc: "Ideal for growing businesses and agencies.",
    price: { monthly: "$99", project: "$999" }, 
    featured: true,
    features: [
      { name: "Web Design", included: true },
      { name: "Brand Identity", included: true },
      { name: "Hosting & Domain", included: true },
      { name: "24/7 Support", included: true },
      { name: "SEO Optimization", included: false }
    ]
  },
  { 
    name: "Premium Plan", 
    desc: "Advanced features for large scale enterprises.",
    price: { monthly: "$149", project: "$1499" }, 
    featured: false,
    features: [
      { name: "Web Design", included: true },
      { name: "Brand Identity", included: true },
      { name: "Hosting & Domain", included: true },
      { name: "24/7 Support", included: true },
      { name: "SEO Optimization", included: true }
    ]
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="bg-[#f2f2f5] text-black w-full py-32 px-4 sm:px-8 xl:px-16 overflow-hidden">
      <div className="text-center mb-16 flex flex-col items-center">
        <div className="uppercase text-sm tracking-widest font-medium text-neutral-500 mb-4">Pricing Plans</div>
        <motion.h2 
          className="text-4xl md:text-5xl font-medium leading-none tracking-tighter mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Choose your <span className="italic font-light text-neutral-400">Plan</span>
        </motion.h2>

        {/* Toggle Switch */}
        <motion.div 
          className="flex items-center bg-white rounded-full border border-neutral-200 p-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={() => setBilling("monthly")} 
            className={`px-8 py-3 rounded-full font-medium text-sm transition-colors duration-300 ${billing === "monthly" ? "bg-black text-white shadow-lg" : "text-neutral-500 hover:text-black"}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBilling("project")} 
            className={`px-8 py-3 rounded-full font-medium text-sm transition-colors duration-300 ${billing === "project" ? "bg-black text-white shadow-lg" : "text-neutral-500 hover:text-black"}`}
          >
            Per Project
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
        {plans.map((p, index) => (
          <motion.div 
            className={`rounded-[2rem] p-10 flex flex-col relative group transition-all duration-500 cursor-pointer border ${p.featured ? 'bg-black text-white border-black md:-translate-y-4 shadow-2xl py-12' : 'bg-white text-black border-neutral-200 hover:border-neutral-400 hover:shadow-xl'}`}
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {p.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E3FF04] text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-medium mb-3">{p.name}</h3>
            <p className={`font-light text-sm mb-8 ${p.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>{p.desc}</p>
            
            <div className="text-6xl font-medium tracking-tighter mb-8 flex items-end">
              <AnimatePresence mode="wait">
                <motion.span
                  key={billing}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {p.price[billing]}
                </motion.span>
              </AnimatePresence>
              <span className={`text-lg font-light tracking-normal pb-2 ml-2 ${p.featured ? 'text-neutral-400' : 'text-neutral-400'}`}>
                {billing === "monthly" ? "/mo" : "/project"}
              </span>
            </div>
            
            <div className={`w-full h-[1px] mb-8 ${p.featured ? 'bg-white/10' : 'bg-black/5'}`}></div>

            <ul className="flex flex-col gap-5 mb-12 flex-1">
              {p.features.map(f => (
                <li key={f.name} className={`flex items-center gap-3 font-light ${f.included ? '' : 'opacity-50'}`}>
                  {f.included ? <CheckIcon /> : <CrossIcon />}
                  {f.name}
                </li>
              ))}
            </ul>
            
            <motion.button 
              className={`w-full py-5 rounded-full tracking-widest text-xs font-semibold transition-colors duration-300 uppercase ${p.featured ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
