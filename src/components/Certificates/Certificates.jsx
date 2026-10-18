import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Certificates.css";

const certificates = [
  {
    year: "2023",
    title: "Data Structures & Algorithms in C/C++",
    provider: "Udemy",
  },
  {
    year: "2023",
    title: "Programming in Java",
    provider: "NPTEL",
  },
  {
    year: "2024",
    title: "SQL Intermediate",
    provider: "HackerRank",
  },
  {
    year: "2024",
    title: "Cloud Computing",
    provider: "NPTEL",
  },
  {
    year: "2025",
    title: "Introduction to Software Engineering",
    provider: "IBM · Coursera",
  },
];

const Certificates = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="certificates-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="editorial-section-label">
            <span>08</span>
            <span>LEARNING</span>
          </div>

          <h2>Learning archive.</h2>

          <p>
            Courses and certifications that supported
            my journey from fundamentals to software
            development.
          </p>
        </motion.div>


        {/* =====================================================
            CERTIFICATE ARCHIVE
        ===================================================== */}

        <div className="certificates-list">

          {certificates.map((certificate, index) => (
            <motion.article
              className="certificate-row"
              key={`${certificate.year}-${certificate.title}`}
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

              <div className="certificate-year">
                {certificate.year}
              </div>

              <div className="certificate-title">
                <h3>{certificate.title}</h3>
                <span>{certificate.provider}</span>
              </div>

              <div className="certificate-mark">
                CERTIFIED
              </div>

              <button
                type="button"
                className="certificate-view"
                onClick={() => {
                  // Add certificate URL later.
                }}
              >
                VIEW ↗
              </button>

            </motion.article>
          ))}

        </div>


        {/* =====================================================
            LEARNING NOTE
        ===================================================== */}

        <motion.div
          className="learning-note"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 15 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span>CONTINUOUS LEARNING</span>

          <p>
            Certificates mark the milestones.
            Building is where the learning continues.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;