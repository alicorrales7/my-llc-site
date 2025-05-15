import React from "react";
const services = [
  {
    title: "Backend Development",
    desc: "Robust APIs, scalable systems, and secure databases for your business logic.",
  },
  {
    title: "Frontend Development",
    desc: "Modern, responsive interfaces with React, Vue, or your favorite framework.",
  },
  {
    title: "Mobile Applications",
    desc: "Native and cross-platform apps for iOS and Android.",
  },
  {
    title: "AI-Powered Tools",
    desc: "Integrate AI to automate, predict, and enhance your digital products.",
  },
  {
    title: "Web Platforms",
    desc: "eCommerce, landing pages, dashboards, and more—tailored to your needs.",
  },
];

const Services = () => (
  <section className="py-20 px-4 relative z-10 bg-transparent">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Our Services
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#23232a]/70 backdrop-blur rounded-2xl p-8 flex flex-col items-start shadow-xl transition-all min-h-[180px] group"
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-white/80 font-light text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
