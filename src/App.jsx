import React from "react";
import "./components/floka.css";
import CTA from "./components/Cta";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Team from "./components/Team";

import Testimonials from "./components/Testimonial";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Expertise from "./components/Expertise";
import FunFacts from "./components/FunFacts";
import HowItWorks from "./components/HowItWorks";
import Awards from "./components/Awards";


export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Header/>
        <Hero />
        <About/>
        <Portfolio />
        <Services />
        <Expertise/>
        <FunFacts/>
        <Team />
        <Testimonials />
        <HowItWorks/>
        <Pricing />
        <BlogPreview />
        <Awards/>
        <CTA></CTA>
      </main>
      <Footer />
    </>
  );
}
