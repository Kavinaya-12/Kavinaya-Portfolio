import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Projects.css";
import biobazaarImage from "../../assets/biobazaar.png";
import chatbotImage from "../../assets/mindmateai.png";
import linkinbioImage from "../../assets/linkinbio.png";
import weatherImage from "../../assets/weather.png";
import taskflowproImage from "../../assets/taskflopro.png";
import helmetImage from "../../assets/helmet.png";
import billingImage from "../../assets/billing.png";

const projects = [
  { number: "01", title: "BioBazaar", image: biobazaarImage, subtitle: "Organic E-Commerce Platform", description: "A full-stack organic e-commerce platform with authentication, product collections, cart and order functionality, built with the MERN stack.", technologies: "MERN STACK  |  MONGODB  |  EXPRESS  |  REACT  |  NODE  |  JWT", liveUrl: "https://biobazar-mu.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/bio-bazaar" },
  { number: "02", title: "Mindmate AI", image: chatbotImage, subtitle: "AI-Powered Conversational Application", description: "A conversational application combining a React interface with a Java and Spring Boot backend to support an AI-powered interaction experience.", technologies: "SPRING BOOT  |  REACT  |  GEMINI AI  |  JAVA", liveUrl: "https://mindmate-ai-three.vercel.app/",githubUrl: "https://github.com/Kavinaya-12/Gemini_chatbot/tree/main/gemini-chat" },
  { number: "03", title: "Link Hub", image: linkinbioImage, subtitle: "Personalized Profile Platform", description: "A personalized link-in-bio platform where users can create public profiles, manage links and present their online presence through a simple dashboard.", technologies: "MERN STACK  |  MONGODB  |  EXPRESS  |  REACT  |  NODE", liveUrl: "https://linkinbio-mern.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/linkinbio-mern" },
  { number: "04", title: "Weather App", image: weatherImage, subtitle: "Weather API Application", description: "A responsive weather application that uses a weather API to display current conditions and forecast data.", technologies: "HTML  |  CSS  |  JAVASCRIPT", liveUrl: "https://weather-prediction-sand.vercel.app/", githubUrl: "https://github.com/Kavinaya-12/weather_prediction" },
  { number: "05", title: "TaskFlow-Pro", image:taskflowproImage, subtitle: "MERN Task and Assignment Management", description: "A MERN-stack project for managing tasks and assignments.", technologies: "MERN STACK",liveUrl:"https://taskflow-pro-jade.vercel.app", githubUrl:"https://github.com/Kavinaya-12/taskflow-pro", imageLabel: "TASKFLOW-PRO" },
  { number: "06", title: "IoT Multi-Mode Smart Helmet",image:helmetImage, subtitle: "Research  |  Worker and Rider Safety", description: "A research project describing Mining, Construction and Rider modes for gas and landslide hazards, construction falls and site alerts, and rider accident and vital-sign monitoring. ESP32/ESP8266 processing connects to a PHP backend and cloud monitoring interfaces.", technologies: "IOT  |  ESP32 / ESP8266  |  PHP  |  CLOUD", imageLabel: "SMART HELMET" },
  { number: "07", title: "Accessible Online Payment Billing Machine",image:billingImage, subtitle: "Research  |  Accessibility Simulation", description: "Simulation work exploring voice-activated transaction amount input, Braille keypad PIN entry and real-time audio feedback for accessible payments.", technologies: "ACCESSIBILITY  |  VOICE INPUT  |  BRAILLE  |  AUDIO", imageLabel: "PAYMENT ACCESSIBILITY" },
];

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
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
            <span>03</span>
            <span>WORK</span>
          </div>

          <h2>Selected work.</h2>

          <p>
            A collection of applications, experiments
            and engineering projects.
          </p>
        </motion.div>


        {/* =====================================================
            PROJECT FILTER LABELS
        ===================================================== */}

        <div className="project-filters">
          <span className="active">ALL</span>
          <span>FULL STACK</span>
          <span>JAVA</span>
          <span>WEB</span>
        </div>


        {/* =====================================================
            PROJECT LIST
        ===================================================== */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
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
              onPointerMove={(event) => {
                if (event.pointerType !== "mouse") return;
                const preview = event.currentTarget.querySelector(".project-cursor-preview");
                const bounds = event.currentTarget.getBoundingClientRect();
                if (preview) preview.style.transform = `translate3d(${event.clientX - bounds.left + 18}px, ${event.clientY - bounds.top + 18}px, 0)`;
              }}
            >

              {/* PROJECT INFORMATION */}

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
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo -&gt;</a>}
                  {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source -&gt;</a> : <span className="project-link-pending">Source link pending</span>}
                </div>

              </div>


<div className="project-visual">
  <div className="project-image">
    {project.image ? <img src={project.image} alt={`${project.title} project screenshot`} loading="lazy" /> : <div className="project-image-placeholder"><span>{project.imageLabel}</span><small>PROJECT IMAGE PLACEHOLDER</small></div>}
  </div>
</div>

<div className="project-cursor-preview" aria-hidden="true">
  {project.image && <img src={project.image} alt="" loading="lazy" />}
</div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;
