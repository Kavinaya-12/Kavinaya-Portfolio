import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import "./Journey.css";

const journey = [
  { year: "2019-2020", title: "SSLC", institution: "Rajalakshmi Genguswamy Matriculation Higher Secondary School", description: "Secondary School Leaving Certificate | 81%" },
  { year: "2021-2022", title: "HSC", institution: "Rajalakshmi Genguswamy Matriculation Higher Secondary School", description: "Higher Secondary Certificate | 78.8%" },
  { year: "2022-2026", title: "B.E. Electronics & Communication Engineering", institution: "Sri Eshwar College of Engineering", description: "CGPA: 8.0" },
  { year: "Jan 2024", title: "Web Development Intern", institution: "Octanet", description: "Worked on responsive user interfaces using HTML, CSS and JavaScript." },
  { year: "Mar 2024", title: "MERN Intern", institution: "Better Tomorrow", description: "Built secure APIs and worked with MongoDB and JWT authentication." },
  { year: "Nov 2024", title: "Advanced MERN Training", institution: "Better Tomorrow", description: "Training in Redux Toolkit, backend logic, secure APIs, MongoDB, JWT authentication and integrations." },
  { year: "2025", title: "Full-stack development and research", description: "Continued full-stack development and research work, including the accessible payment system and smart helmet papers." },
  { year: "2026", title: "Degree completion and software development", description: "Completed B.E. ECE and continued progressing toward software development." },
];

const Journey = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="journey-section" id="journey">
      <div className="container">
        <Motion.div className="journey-header" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="editorial-section-label"><span>04</span><span>JOURNEY</span></div>
          <h2>Where I&apos;ve grown.</h2>
        </Motion.div>

        <div className="journey-timeline">
          <svg className="journey-doodle-path" viewBox="0 0 140 900" preserveAspectRatio="none" aria-hidden="true"><path d="M70 0 C20 90 120 130 65 220 S115 340 65 450 115 580 65 690 100 790 70 900" /></svg>
          {journey.map((item, index) => (
            <Motion.article className="journey-item" key={`${item.year}-${item.title}`} initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}>
              <div className="journey-year">{item.year}</div>
              <div className="journey-marker-column"><span className="journey-dot" /></div>
              <div className="journey-content">
                <h3>{item.title}</h3>
                {item.institution && <div className="journey-institution">{item.institution}</div>}
                <p>{item.description}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
