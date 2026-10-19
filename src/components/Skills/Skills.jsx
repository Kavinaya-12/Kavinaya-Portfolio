import React from "react";
import { Code2, Database, Layers3, PanelsTopLeft, Server, Wrench } from "lucide-react";
import "./Skills.css";

const categories = [
  { title: "Languages", Icon: Code2, tone: "pink", skills: ["Java", "JavaScript", "C"] },
  { title: "Frontend", Icon: PanelsTopLeft, tone: "butter", skills: ["React", "HTML", "CSS", "Bootstrap"] },
  { title: "Backend", Icon: Server, tone: "matcha", skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"] },
  { title: "Database", Icon: Database, tone: "blue", skills: ["MongoDB", "MySQL", "SQL"] },
  { title: "Foundations", Icon: Layers3, tone: "lilac", skills: ["Data Structures & Algorithms", "OOP", "JWT Authentication", "API Integration"] },
  { title: "Tools", Icon: Wrench, tone: "cream", skills: ["Git / GitHub", "VS Code", "MongoDB Compass", "Eclipse", "Creative Code"] },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="editorial-section-label"><span>03</span><span>SKILLS</span></div>
          <h2>Skills toolkit.</h2>
        </div>

        <div className="skill-bento-grid">
          {categories.map((category) => (
            <article
              className={`skill-bento-card skill-tone-${category.tone}`}
              key={category.title}
            >
              <h3><category.Icon className="skill-category-icon" aria-hidden="true" /> {category.title}</h3>
              <div className="skill-bento-pills">
                {category.skills.map((skill) => (
                  <span
                    className="skill-sticker-pill"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-current">
          <div className="skills-current-label">CURRENTLY DEEPENING</div>
          <div className="skills-current-list">
            <span>Java</span><span>Spring Boot</span><span>DSA</span><span>Full Stack Development</span>
          </div>
          <div className="skills-current-note">Building every day.</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
