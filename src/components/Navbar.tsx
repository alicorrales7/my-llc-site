import React, { useState, useEffect } from "react";
import BELogo from "../assets/logo/BE.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={BELogo}
            alt="Building Eight Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform"
            style={{ borderRadius: "8px" }}
          />
          <span className="text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-blue-400 transition-colors">
            Building Eight
          </span>
        </a>
        <nav className="flex items-center gap-x-8">
          <a
            href="#technology"
            className="text-white/90 hover:text-blue-400 font-light transition border-b-2 border-transparent hover:border-blue-400 pb-1"
          >
            Technology
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-blue-400 font-light transition border-b-2 border-transparent hover:border-blue-400 pb-1"
          >
            About
          </a>
          <a
            href="#contact"
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-semibold transition shadow-none border-none"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
