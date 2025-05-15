import React from "react";

const SectionIntro = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Empowering the Future of Digital Development
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            We specialize in backend systems, frontend applications, mobile
            apps, and AI-powered solutions. Every project is tailored to fit
            your business needs.
          </p>
        </div>

        {/* Placeholder for future image/illustration */}
        <div className="flex-1">
          {/* Image or visual can go here in the future */}
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
