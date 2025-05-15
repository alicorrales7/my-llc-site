import React from "react";

const testimonials = [
  {
    quote:
      "Building Eight delivered our MVP in record time. The process was smooth, and the code quality was top-notch.",
    name: "Sofia M.",
    company: "Founder, Finwise",
  },
  {
    quote:
      "Their team is responsive, creative, and always focused on our business goals. Highly recommended!",
    name: "Carlos R.",
    company: "CTO, HealthLoop",
  },
  {
    quote:
      "We trusted them with our AI project and the results exceeded expectations. True professionals.",
    name: "Elena T.",
    company: "Product Lead, SportifyAI",
  },
];

const Testimonials = () => (
  <section className="py-20 px-4 relative z-10 bg-transparent">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Testimonials
      </h2>
      <div className="flex flex-col gap-16 items-center">
        {testimonials.map((t) => (
          <div key={t.name} className="w-full text-center">
            <div className="text-5xl text-blue-400/40 leading-none mb-4">“</div>
            <p className="text-lg md:text-xl text-white/90 font-light mb-6 max-w-2xl mx-auto">
              {t.quote}
            </p>
            <div className="text-blue-400 font-semibold text-base">
              {t.name}
            </div>
            <div className="text-gray-400 text-sm">{t.company}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
