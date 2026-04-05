import React from "react";
import Slider from "./Slider";

const items = [
  { title: "Project One", img: "/placeholders/portfolio-1.png" },
  { title: "Project Two", img: "/placeholders/portfolio-2.png" },
  { title: "Project Three", img: "/placeholders/portfolio-3.png" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="floka-section">
      <div className="container">
        <h2>Selected work</h2>
        <Slider items={items} />
      </div>
    </section>
  );
}
