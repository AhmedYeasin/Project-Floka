import React from "react";

const services = [
  { title: "Branding", body: "Identity systems, styleguides and positioning." },
  { title: "Design", body: "UX/UI, product design and prototyping." },
  { title: "Development", body: "Frontend, backend and integrations." },
];

export default function Services() {
  return (
    <section id="services" className="floka-section">
      <div className="container">
        <h2>What we do</h2>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">▣</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
