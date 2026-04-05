import React from "react";

export default function Hero() {
  return (
    <section id="home" className="floka-hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>We build beautiful websites</h1>
          <p>
            We are a digital studio that creates elegant websites for ambitious brands.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Start a project</a>
            <a className="btn ghost" href="#portfolio">See our work</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/placeholders/hero-placeholder.png" alt="Hero preview" />
        </div>
      </div>
    </section>
  );
}
