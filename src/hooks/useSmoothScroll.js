export default function useSmoothScroll() {
  return (selector) => {
    try {
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (e) {
      // noop
    }
  };
}
