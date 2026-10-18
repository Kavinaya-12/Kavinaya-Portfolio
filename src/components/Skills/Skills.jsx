import React from "react";
import "./Skills.css";

const categories = [
  { title: "Languages", emoji: "🧠", tone: "pink", skills: [["Java", "☕"], ["JavaScript", "✨"], ["C", "🔹"]] },
  { title: "Frontend", emoji: "🎨", tone: "butter", skills: [["React", "⚛️"], ["HTML", "🌐"], ["CSS", "🪄"], ["Bootstrap", "🧷"]] },
  { title: "Backend", emoji: "🛠️", tone: "matcha", skills: [["Node.js", "🌱"], ["Express.js", "🚂"], ["Spring Boot", "🌷"], ["REST APIs", "🔌"]] },
  { title: "Database", emoji: "🗂️", tone: "blue", skills: [["MongoDB", "🍃"], ["MySQL", "🐬"], ["SQL", "📚"]] },
  { title: "Foundations", emoji: "🧩", tone: "lilac", skills: [["Data Structures & Algorithms", "🧠"], ["OOP", "🧱"], ["JWT Authentication", "🔐"], ["API Integration", "🧵"]] },
  { title: "Tools", emoji: "🧰", tone: "cream", skills: [["Git / GitHub", "🐙"], ["VS Code", "💻"], ["MongoDB Compass", "🧭"], ["Eclipse", "🌘"], ["Creative Code", "🪄"]] },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <div className="editorial-section-label"><span>06</span><span>SKILLS</span></div>
          <h2>Skills toolkit.</h2>
        </div>

        <div className="skill-bento-grid">
          {categories.map((category) => (
            <article
              className={`skill-bento-card skill-tone-${category.tone}`}
              key={category.title}
            >
              <h3><span aria-hidden="true">{category.emoji}</span> {category.title}</h3>
              <div className="skill-bento-pills">
                {category.skills.map(([skill, emoji]) => (
                  <span
                    className="skill-sticker-pill"
                    key={skill}
                  >
                    <span aria-hidden="true">{emoji}</span> {skill}
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
