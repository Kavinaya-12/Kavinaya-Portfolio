import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "./Certificates.css";

const certificates = [
  {
    year: "2023",
    title: "Data Structures & Algorithms in C/C++",
    provider: "Udemy",
    link: "https://drive.google.com/file/d/1h5Ntk0DuQGtAnV7b5pSUUQNa6EZDHx69/view?usp=drive_link",
  },
  {
    year: "2023",
    title: "Programming in Java",
    provider: "NPTEL",
    link: "https://drive.google.com/file/d/1C8WAFnj9-VqdxDbFth5MuL1GsSOXOEEh/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "SQL Intermediate",
    provider: "HackerRank",
    link: "https://drive.google.com/file/d/1w2588KqkxdMum6xESbSq7E1b_PCQPmXG/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Cloud Computing",
    provider: "NPTEL",
    link: "https://drive.google.com/file/d/13iy3RrpWoYn4q256NifsS11avz4bOWfR/view?usp=drive_link",
  },
  {
    year: "2025",
    link: "https://drive.google.com/file/d/10H-Cs-pSWplYViXXBungXeU0glsNCBBE/view?usp=drive_link",
    title: "Introduction to Software Engineering",
    provider: "IBM · Coursera",
  },
];

const Certificates = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">

        {}

        <Motion.div
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
            <span>07</span>
            <span>LEARNING</span>
          </div>

          <h2>Learning archive.</h2>

          <p>
            Courses and certifications that supported
            my journey from fundamentals to software
            development.
          </p>
        </Motion.div>

        {}

        <div className="certificates-list">

          {certificates.map((certificate, index) => (
            <Motion.article
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

              {certificate.link ? (
                <a
                  className="certificate-view"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW <ExternalLink className="ui-inline-icon" aria-hidden="true" />
                </a>
              ) : (
                <span className="certificate-view certificate-view-unavailable" title="The credential URL was not provided">
                  LINK UNAVAILABLE
                </span>
              )}

            </Motion.article>
          ))}

        </div>

        {}

        <Motion.div
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

        </Motion.div>

      </div>
    </section>
  );
};

export default Certificates;
