import React from "react";

export default function About() {
  return (
    <section id="about" className="floka-section about">
      <div className="container about-inner">
        <div className="about-media">
          <img src="/placeholders/about-placeholder.png" alt="About" />
        </div>
        <div className="about-copy">
          <h2>We craft meaningful digital products</h2>
          <p>
            Our focus is on delivering experiences that are useful, usable and desirable.
            We work closely with clients to design and build products that scale.
          </p>
        </div>
      </div>
    </section>
  );
}
