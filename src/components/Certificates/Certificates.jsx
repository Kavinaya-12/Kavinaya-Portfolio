import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { BookOpen, Braces, Cloud, Database, Workflow, ExternalLink } from "lucide-react";
import "./Certificates.css";

const certificates = [
  {
    year: "2023",
    title: "Data Structures & Algorithms in C/C++",
    provider: "Udemy",
    category: "Problem solving",
    Icon: Braces,
    link: "https://drive.google.com/file/d/1h5Ntk0DuQGtAnV7b5pSUUQNa6EZDHx69/view?usp=drive_link",
  },
  {
    year: "2023",
    title: "Programming in Java",
    provider: "NPTEL",
    category: "Programming",
    Icon: BookOpen,
    link: "https://drive.google.com/file/d/1C8WAFnj9-VqdxDbFth5MuL1GsSOXOEEh/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "SQL Intermediate",
    provider: "HackerRank",
    category: "Data",
    Icon: Database,
    link: "https://drive.google.com/file/d/1w2588KqkxdMum6xESbSq7E1b_PCQPmXG/view?usp=drive_link",
  },
  {
    year: "2024",
    title: "Cloud Computing",
    provider: "NPTEL",
    category: "Cloud computing",
    Icon: Cloud,
    link: "https://drive.google.com/file/d/13iy3RrpWoYn4q256NifsS11avz4bOWfR/view?usp=drive_link",
  },
  {
    year: "2025",
    title: "Introduction to Software Engineering",
    provider: "IBM · Coursera",
    category: "Software engineering",
    Icon: Workflow,
    link: "https://drive.google.com/file/d/10H-Cs-pSWplYViXXBungXeU0glsNCBBE/view?usp=drive_link",
  },
];

const Certificates = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <Motion.div
          className="certificates-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="editorial-section-label">
            <span>07</span>
            <span>LEARNING</span>
          </div>
          <p className="archive-signature">Little discoveries, lasting growth.</p>
          <h2>Learning archive.</h2>
          <p className="archive-description">
            Courses and certifications that supported my journey from
            fundamentals to software development.
          </p>
        </Motion.div>

        <div className="archive-grid">
          {certificates.map((certificate, index) => (
            <Motion.article
              className="archive-card"
              key={`${certificate.year}-${certificate.title}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="archive-card-topline">
                <span className="archive-card-icon" aria-hidden="true">
                  <certificate.Icon />
                </span>
                <span className="archive-category">{certificate.category}</span>
              </div>
              <h3>{certificate.title}</h3>
              <div className="archive-card-meta">
                <span>{certificate.provider}</span>
                <span>{certificate.year}</span>
              </div>
              <a
                className="archive-card-link"
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.title} certificate from ${certificate.provider}`}
              >
                View credential <ExternalLink aria-hidden="true" />
              </a>
            </Motion.article>
          ))}
        </div>

        <Motion.div
          className="learning-note"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>CONTINUOUS LEARNING</span>
          <p>
            Certificates mark the milestones. Building is where the learning
            continues.
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default Certificates;
