import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);
  useEffect(() => {
    if (inView) {
      let startTimeout;
      let animationFrame;
      const startTime = Date.now();
      const updateCounter = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);

        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);

        const currentCount = Math.floor(easeProgress * (to - from) + from);
        setCount(currentCount);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        } else {
          setCount(to);
        }
      };
      startTimeout = setTimeout(() => {
        animationFrame = requestAnimationFrame(updateCounter);
      }, 300);
      return () => {
        clearTimeout(startTimeout);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [inView, from, to, duration]);
  return <span ref={ref}>{count}</span>;
};
export default function FunFacts() {
  const stats = [
    { value: 120, suffix: "+", label: "Completed Projects" },
    { value: 15, suffix: "", label: "Awards Won" },
    { value: 24, suffix: "/7", label: "Client Support" },
    { value: 99, suffix: "%", label: "Satisfaction Rate" },
  ];
  return (
    <section className="bg-[#E3FF04] text-black w-full py-24 sm:py-32 px-4 sm:px-8 xl:px-16 rounded-[3rem] sm:rounded-[5rem] my-10 mx-auto max-w-[95%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tighter tabular-nums flex items-end">
              <AnimatedCounter from={0} to={stat.value} duration={2.5} />
              <span className="text-5xl lg:text-[4rem] text-black/60 font-light">
                {stat.suffix}
              </span>
            </h3>
            <p className="uppercase text-sm tracking-widest font-semibold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
