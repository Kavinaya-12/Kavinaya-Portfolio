import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
const ProjectCard = ({
  project,
  index,
}) => {
  return (
    <motion.article
      className="project-card"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
    >

      <div className="project-image">

        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
          />
        ) : (
          <div className="project-image-placeholder">
            <span>
              {project.title}
            </span>
          </div>
        )}

      </div>


      <div className="project-content">

        <div className="project-number">
          {project.id}
        </div>

        <div className="project-details">

          <h3>
            {project.title}
          </h3>

          <div className="project-type">
            {project.type}
          </div>

          <div className="project-tags">

            {project.tech.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}

          </div>

          <p>
            {project.description}
          </p>

          <div className="project-actions">

            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="small-primary-btn"
            >
              Live Demo ↗
            </a>

            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="small-secondary-btn"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>

    </motion.article>
  );
};

export default ProjectCard;