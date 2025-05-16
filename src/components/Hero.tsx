import React from "react";

const HERO_BG_URL =
  "https://res.cloudinary.com/ddoxiiuks/image/upload/v1747350348/hero-image_vucidq.jpg";
const BE_LOGO_URL =
  "https://res.cloudinary.com/ddoxiiuks/image/upload/v1747350375/BE_suyb5q.png";

const Hero = () => (
  <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
    {/* Imagen de fondo */}
    <img
      src={HERO_BG_URL}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-100 -z-10"
      draggable={false}
    />
    {/* Overlay oscuro para legibilidad */}
    <div className="absolute inset-0 bg-black/70 -z-0" />
    {/* Contenido: logo a la izquierda, texto a la derecha */}
    <div className="relative z-10 flex flex-col md:flex-row h-full w-full max-w-7xl mx-auto px-8 items-center justify-center gap-2 md:gap-2">
      {/* Logo a la izquierda */}
      <div className="flex-1 flex items-center justify-center md:justify-end w-full md:w-auto mb-2 md:mb-0">
        <img
          src={BE_LOGO_URL}
          alt="Building Eight Logo"
          className="w-full md:w-[44rem] max-w-full h-auto object-contain drop-shadow-xl rounded-2xl bg-black/30 p-2"
          style={{ maxHeight: "480px" }}
        />
      </div>
      {/* Texto a la derecha */}
      <div className="flex-1 flex flex-col justify-center items-start min-h-[60vh] md:min-h-[80vh] md:pl-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight text-left leading-tight">
          Building Eight
        </h1>
        <p className="text-xl md:text-3xl text-white font-light text-left max-w-2xl">
          Software development for the next generation: backend, frontend,
          mobile, and AI solutions. Minimal, robust, and beautiful.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
