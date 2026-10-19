import React, { useMemo, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import "./Projects.css";
import biobazaarImage from "../../assets/biobazaar.png";
import chatbotImage from "../../assets/mindmateai.png";
import linkinbioImage from "../../assets/linkinbio.png";
import weatherImage from "../../assets/weather.png";
import taskflowproImage from "../../assets/taskflopro.png";
import helmetImage from "../../assets/helmet.png";
import billingImage from "../../assets/billing.png";

const projects = [
  { number: "01", title: "BioBazaar", image: biobazaarImage, subtitle: "Organic E-Commerce Platform", description: "A full-stack organic e-commerce platform with authentication, product collections, cart and order functionality, built with the MERN stack.", technologies: "MERN STACK  |  MONGODB  |  EXPRESS  |  REACT  |  NODE  |  JWT", categories: ["full-stack", "web"], liveUrl: "https://biobazar-mu.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/bio-bazaar" },
  { number: "02", title: "Mindmate AI", image: chatbotImage, subtitle: "AI-Powered Conversational Application", description: "A conversational application combining a React interface with a Java and Spring Boot backend to support an AI-powered interaction experience.", technologies: "SPRING BOOT  |  REACT  |  GEMINI AI  |  JAVA", categories: ["full-stack", "java", "web"], liveUrl: "https://mindmate-ai-three.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/Gemini_chatbot/tree/main/gemini-chat" },
  { number: "03", title: "Link Hub", image: linkinbioImage, subtitle: "Personalized Profile Platform", description: "A personalized link-in-bio platform where users can create public profiles, manage links and present their online presence through a simple dashboard.", technologies: "MERN STACK  |  MONGODB  |  EXPRESS  |  REACT  |  NODE", categories: ["full-stack", "web"], liveUrl: "https://linkinbio-mern.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/linkinbio-mern" },
  { number: "04", title: "Weather App", image: weatherImage, subtitle: "Weather API Application", description: "A responsive weather application that uses a weather API to display current conditions and forecast data.", technologies: "HTML  |  CSS  |  JAVASCRIPT", categories: ["web"], liveUrl: "https://weather-prediction-sand.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/weather_prediction" },
  { number: "05", title: "TaskFlow-Pro", image: taskflowproImage, subtitle: "MERN Task and Assignment Management", description: "A MERN-stack project for managing tasks and assignments.", technologies: "MERN STACK", categories: ["full-stack", "web"], liveUrl: "https://taskflow-pro-jade.vercel.app", githubUrl: "https://github.com/Kavinaya-12/taskflow-pro" },
  { number: "06", title: "IoT Multi-Mode Smart Helmet", image: helmetImage, subtitle: "Research  |  Worker and Rider Safety", description: "A research project describing Mining, Construction and Rider modes for gas and landslide hazards, construction falls and site alerts, and rider accident and vital-sign monitoring. ESP32/ESP8266 processing connects to a PHP backend and cloud monitoring interfaces.", technologies: "IOT  |  ESP32 / ESP8266  |  PHP  |  CLOUD", categories: ["iot"] },
  { number: "07", title: "Accessible Online Payment Billing Machine", image: billingImage, subtitle: "Research  |  Accessibility Simulation", description: "Simulation work exploring voice-activated transaction amount input, Braille keypad PIN entry and real-time audio feedback for accessible payments.", technologies: "ACCESSIBILITY  |  VOICE INPUT  |  BRAILLE  |  AUDIO", categories: [] },
];

const filters = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "java", label: "Java" },
  { id: "web", label: "Web" },
  { id: "iot", label: "IoT" },
];

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all");
  const filterButtons = useRef([]);
  const visibleProjects = useMemo(
    () => activeFilter === "all" ? projects : projects.filter((project) => project.categories.includes(activeFilter)),
    [activeFilter],
  );

  const handleFilterKeyDown = (event, currentIndex) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? filters.length - 1
        : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + filters.length) % filters.length;
    const nextFilter = filters[nextIndex];

    setActiveFilter(nextFilter.id);
    filterButtons.current[nextIndex]?.focus();
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        <Motion.div
          className="projects-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="editorial-section-label">
            <span>05</span>
            <span>WORK</span>
          </div>

          <h2>Selected work.</h2>

          <p>
            A collection of applications, experiments
            and engineering projects.
          </p>
        </Motion.div>

        <div className="project-filters" aria-label="Filter projects" role="toolbar">
          {filters.map((filter, index) => (
            <button
              className={activeFilter === filter.id ? "active" : ""}
              type="button"
              key={filter.id}
              aria-pressed={activeFilter === filter.id}
              aria-label={`Show ${filter.label} projects`}
              ref={(element) => { filterButtons.current[index] = element; }}
              onClick={() => setActiveFilter(filter.id)}
              onKeyDown={(event) => handleFilterKeyDown(event, index)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-list">

          {visibleProjects.map((project, index) => (
            <Motion.article
              className="project-editorial"
              key={project.number}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="project-information">

                <div className="project-number">
                  {project.number}
                </div>

                <h3>{project.title}</h3>

                <div className="project-subtitle">
                  {project.subtitle}
                </div>

                <div className="project-technologies">
                  {project.technologies}
                </div>

                <p>
                  {project.description}
                </p>

                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink className="ui-inline-icon" aria-hidden="true" /></a>}
                  {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source <Code2 className="ui-inline-icon" aria-hidden="true" /></a> : <span className="project-link-pending">Source link pending</span>}
                </div>

              </div>

              <div className="project-visual">
                <div className="project-image">
                  {project.image ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy" /> : <div className="project-image-placeholder"><span>{project.title}</span></div>}
                </div>
              </div>

            </Motion.article>
          ))}

          {visibleProjects.length === 0 && <p className="project-empty-state">No projects are currently listed in this category.</p>}

        </div>

      </div>
    </section>
  );
};

export default Projects;
