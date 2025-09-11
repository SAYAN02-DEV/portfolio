import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS", icon: <SiCss3 />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "React", icon: <SiReact />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "Tailwind", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },

  { name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
  { name: "Express", icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend" },
  { name: "GraphQL", icon: <SiGraphql />, category: "backend" },

  { name: "GitHub", icon: <SiGithub />, category: "tools" },
  { name: "Docker", icon: <SiDocker />, category: "tools" },
  { name: "Figma", icon: <SiFigma />, category: "tools" },
];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  const categories = ["frontend", "backend", "tools"];

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-primary/10 hover:scale-105 border border-border"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              title={skill.name}
            >
              <div className="text-5xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { SkillsSection };