import React, { useState, useEffect } from "react";

const BE_LOGO_URL =
  "https://res.cloudinary.com/ddoxiiuks/image/upload/v1747350375/BE_suyb5q.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú al navegar
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo (siempre home link) */}
        <a href="/" className="flex items-center gap-3 group z-50">
          <img
            src={BE_LOGO_URL}
            alt="Building Eight Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform rounded-lg"
          />
          <span className="hidden sm:inline text-white font-bold text-xl md:text-2xl tracking-tight group-hover:text-blue-400 transition-colors">
            Building Eight
          </span>
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-x-8">
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
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 z-50 relative"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
        {/* Mobile menu panel */}
        <nav
          className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-[#18181b] z-50 shadow-lg flex flex-col gap-8 pt-24 px-8 transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile menu"
        >
          <a
            href="#technology"
            className="text-white/90 hover:text-blue-400 font-medium text-lg border-b border-[#23232a] py-2"
            onClick={handleNavClick}
          >
            Technology
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-blue-400 font-medium text-lg border-b border-[#23232a] py-2"
            onClick={handleNavClick}
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-semibold text-lg mt-4 transition shadow-none border-none text-center"
            onClick={handleNavClick}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
