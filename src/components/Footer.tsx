import React from "react";
import BELogo from "../assets/logo/BE.png";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-[#23232a]/50 relative z-10 bg-transparent">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <img
          src={BELogo}
          alt="Building Eight Logo"
          className="w-8 h-8 object-contain"
          style={{ borderRadius: "6px" }}
        />
        <span className="text-white font-bold text-xl tracking-tight">
          Building Eight
        </span>
      </div>
      <div className="flex gap-6">
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition font-light"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition font-light"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition font-light"
        >
          GitHub
        </a>
      </div>
      <div className="flex gap-6">
        <a
          href="#"
          className="text-gray-400 hover:text-blue-400 transition font-light"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-400 hover:text-blue-400 transition font-light"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-400 hover:text-blue-400 transition font-light"
        >
          Contact
        </a>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-6 font-light">
      © {new Date().getFullYear()} Building Eight. All rights reserved.
    </div>
  </footer>
);

export default Footer;
