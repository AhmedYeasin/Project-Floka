import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slider({ items = [], onOpen }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="floka-slider">
      <button className="slide-nav prev" onClick={() => setIndex(i => (i - 1 + items.length) % items.length)}>‹</button>

      <div className="slide-viewport" style={{ flex: 1, minHeight: 280 }}>
        <AnimatePresence initial={false}>
          <motion.button
            key={items[index].id}
            className="slide-thumb"
            onClick={() => onOpen?.(index)}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer" }}
          >
            <img src={items[index].img} alt={items[index].title} style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 10 }} />
            <div className="slide-caption">{items[index].title}</div>
          </motion.button>
        </AnimatePresence>
      </div>

      <button className="slide-nav next" onClick={() => setIndex(i => (i + 1) % items.length)}>›</button>
    </div>
  );
}
