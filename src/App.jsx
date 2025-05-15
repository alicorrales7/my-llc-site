import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleBlur = ([entry]) => {
      if (!entry.isIntersecting) {
        document.body.classList.add("bg-blur");
      } else {
        document.body.classList.remove("bg-blur");
      }
    };
    const handleHide = ([entry]) => {
      if (entry.isIntersecting) {
        document.body.classList.add("bg-image-hidden");
      } else {
        document.body.classList.remove("bg-image-hidden");
      }
    };
    const heroObs = new window.IntersectionObserver(handleBlur, { threshold: 0.5 });
    const contactObs = new window.IntersectionObserver(handleHide, { threshold: 0.2 });
    if (heroRef.current) heroObs.observe(heroRef.current);
    if (contactRef.current) contactObs.observe(contactRef.current);
    return () => {
      if (heroRef.current) heroObs.unobserve(heroRef.current);
      if (contactRef.current) contactObs.unobserve(contactRef.current);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={heroRef} id="hero-anchor">
        <Hero />
      </div>
      <Services />
      <Projects />
      <About />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <div ref={contactRef} id="contact-anchor">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;


