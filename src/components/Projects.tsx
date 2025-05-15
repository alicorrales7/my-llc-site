import React from "react";

const projects = [
  {
    title: "FuelTrack API",
    desc: "RESTful API for fleet fuel management, with analytics and real-time alerts.",
    tech: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "RBT Notes",
    desc: "Minimal note-taking app with markdown support and instant sync.",
    tech: ["React", "Firebase"],
  },
  {
    title: "GearLoop Storefront",
    desc: "E-commerce platform for outdoor gear, featuring headless CMS integration.",
    tech: ["Next.js", "Stripe", "Sanity"],
  },
  {
    title: "V-Titán AI Coach",
    desc: "AI-powered virtual coach for fitness and wellness routines.",
    tech: ["Python", "TensorFlow", "React Native"],
  },
];

const Projects = () => (
  <section className="py-20 px-4 relative z-10 bg-transparent">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#23232a]/70 backdrop-blur rounded-2xl p-8 shadow-xl transition-all min-h-[160px] group"
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/80 font-light mb-4 text-base">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-[#18181b] text-blue-400 text-xs px-3 py-1 rounded-full font-medium border border-blue-700/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
