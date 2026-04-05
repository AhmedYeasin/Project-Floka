import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Navbar() {
  const scrollTo = useSmoothScroll();
  return (
    <header className="floka-navbar">
      <div className="container nav-inner">
        <div className="brand">Floka</div>
        <nav className="nav-links">
          <button onClick={() => scrollTo("#home")}>Home</button>
          <button onClick={() => scrollTo("#services")}>Services</button>
          <button onClick={() => scrollTo("#portfolio")}>Portfolio</button>
          <button onClick={() => scrollTo("#pricing")}>Pricing</button>
          <button onClick={() => scrollTo("#team")}>Team</button>
          <button onClick={() => scrollTo("#blog")}>Blog</button>
          <a className="btn-cta" href="#contact">Get Started</a>
        </nav>
        <button className="nav-toggle" aria-label="menu">☰</button>
      </div>
    </header>
  );
}
