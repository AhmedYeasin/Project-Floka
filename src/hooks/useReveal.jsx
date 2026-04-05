import { useEffect, useRef } from "react";

export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    el.querySelectorAll(".reveal, .service-card, .plan-card, .team-card, .testimonial, .post-card, .portfolio-item, .hero-media, .hero-copy").forEach(node => {
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
