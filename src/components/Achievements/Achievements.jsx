import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { Code2, Medal, Presentation, Trophy } from "lucide-react";
import "./Achievements.css";

const achievements = [
  {
    number: "01",
    title: "Hackcolossus 4.0",
    category: "Competition",
    result: "TOP 17 / 200 TEAMS",
    description:
      "Secured a place among the top 17 teams out of 200 participating teams.",
    Icon: Trophy,
  },
  {
    number: "02",
    title: "Mini Project Expo",
    category: "Project showcase",
    result: "2ND PLACE",
    description:
      "Recognized with second place for a project presentation at the Mini Project Expo.",
    Icon: Presentation,
  },
  {
    number: "03",
    title: "CodeChef",
    category: "Problem solving",
    result: "200+ PROBLEMS",
    description:
      "Solved more than 200 programming problems using C and Java.",
    Icon: Code2,
  },
  {
    number: "04",
    title: "SkillRack",
    category: "Problem solving",
    result: "600 PROBLEMS",
    description:
      "Completed 600 programming problems while consistently practicing problem solving.",
    Icon: Code2,
  },
  {
    number: "05",
    title: "LeetCode",
    category: "Problem solving",
    result: "200+ PROBLEMS",
    description:
      "Practiced data structures and algorithmic problem solving through 200+ completed problems.",
    Icon: Medal,
  },
];

const Achievements = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <Motion.div
          className="achievements-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="editorial-section-label">
            <span>08</span>
            <span>ACHIEVEMENTS</span>
          </div>
          <h2>Proof of progress.</h2>
          <p>
            A few milestones from competitions, project showcases and
            continuous problem-solving practice.
          </p>
        </Motion.div>

        <ol className="progress-journey" aria-label="Achievements and learning milestones">
          {achievements.map((item, index) => (
            <Motion.li
              className="progress-milestone"
              key={item.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="progress-number" aria-hidden="true">
                {item.number}
              </span>
              <span className="progress-marker" aria-hidden="true">
                <item.Icon />
              </span>
              <article className="progress-card">
                <div className="progress-card-heading">
                  <div>
                    <span className="progress-category">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <span className="progress-result">{item.result}</span>
                </div>
                <p>{item.description}</p>
              </article>
            </Motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Achievements;
