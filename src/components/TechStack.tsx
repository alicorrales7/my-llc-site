import React from "react";

const tech = [
  { name: "Node.js", color: "#8cc84b" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "MongoDB", color: "#47a248" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "AWS", color: "#ff9900" },
  { name: "Express / NestJS", color: "#e0234e" },
  { name: "Next.js / SolidJS", color: "#0070f3" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "JWT Auth", color: "#f4b400" },
  { name: "WebSockets", color: "#00b8b8" },
  { name: "OpenAI GPT", color: "#10a37f" },
  { name: "Whisper API", color: "#6e56cf" },
  { name: "Custom AI models", color: "#ff6f00" },
  { name: "React Native", color: "#61dafb" },
  { name: "Swift", color: "#fa7343" },
];

const TechStack = () => (
  <section id="technology" className="py-20 px-4 relative bg-transparent">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">
        Technology
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tech.map((t) => (
          <span
            key={t.name}
            className="px-4 py-2 rounded-full text-sm font-medium bg-[#23232a]/70 backdrop-blur text-white transition-colors select-none text-center shadow border"
            style={{ borderColor: t.color, borderWidth: 1 }}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
