import React from "react";

const techs = [
  { name: "Node.js", color: "text-green-400" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "MongoDB", color: "text-green-500" },
  { name: "AWS", color: "text-orange-400" },
  { name: "SolidJS", color: "text-blue-300" },
  { name: "TailwindCSS", color: "text-teal-300" },
];

const Technology = () => (
  <section id="technology" className="bg-[#101014] py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Technology We Use
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {techs.map((tech) => (
          <span
            key={tech.name}
            className={`text-lg md:text-2xl font-semibold ${tech.color} bg-[#23232a] px-6 py-4 rounded-xl shadow text-center transition-transform hover:-translate-y-1 hover:scale-105 hover:bg-[#23232a]/80 cursor-pointer`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Technology;
