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
    <section className="py-10 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Skill Icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition-transform"
            title={skill.name}
          >
            <div className="text-4xl text-blue-600 mb-2">{skill.icon}</div>
            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export { SkillsSection };