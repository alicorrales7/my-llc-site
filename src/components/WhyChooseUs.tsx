import React from "react";

const bullets = [
  "Custom solutions",
  "Scalable architecture",
  "Agile communication",
  "Startup-friendly",
];

const WhyChooseUs = () => (
  <section className="py-20 px-4 relative z-10 bg-transparent">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Why Choose Us
      </h2>
      <ul className="space-y-4 pl-4">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></span>
            <span className="text-white text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;
