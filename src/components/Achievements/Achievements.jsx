import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Achievements.css";

const achievements = [
  {
    number: "01",
    title: "Hackcolossus 4.0",
    result: "TOP 17 / 200 TEAMS",
    description:
      "Secured a place among the top 17 teams out of 200 participating teams.",
  },
  {
    number: "02",
    title: "Mini Project Expo",
    result: "2ND PLACE",
    description:
      "Recognized with second place for a project presentation at the Mini Project Expo.",
  },
  {
    number: "03",
    title: "CodeChef",
    result: "200+ PROBLEMS",
    description:
      "Solved more than 200 programming problems using C and Java.",
  },
  {
    number: "04",
    title: "SkillRack",
    result: "600 PROBLEMS",
    description:
      "Completed 600 programming problems while consistently practicing problem solving.",
  },
  {
    number: "05",
    title: "LeetCode",
    result: "200+ PROBLEMS",
    description:
      "Practiced data structures and algorithmic problem solving through 200+ completed problems.",
  },
];

const achievementCaptions = [
  "A little plot twist.",
  "Second place. Main character energy.",
  "The reps add up.",
  "Consistency has entered the chat.",
  "Still warming up.",
];

const Achievements = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="achievements-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="editorial-section-label">
            <span>07</span>
            <span>ACHIEVEMENTS</span>
          </div>

          <h2>Proof of progress.</h2>

          <p>
            A few milestones from competitions,
            project showcases and continuous
            problem-solving practice.
          </p>
        </motion.div>


        {/* =====================================================
            ACHIEVEMENT LIST
        ===================================================== */}

        <div className="achievements-list">

          {achievements.map((item, index) => (
            <motion.article
              className="achievement-row"
              key={item.number}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="achievement-number">
                {item.number}
              </div>

              <div className="achievement-main">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              <div className="achievement-result">
                {item.result}
              </div>

              <span className="achievement-caption">{achievementCaptions[index]}</span>

            </motion.article>
          ))}

        </div>



      </div>
    </section>
  );
};

export default Achievements;
