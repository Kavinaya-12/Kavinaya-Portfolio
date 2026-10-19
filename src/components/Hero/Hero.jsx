import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import resume from "../../assets/Kavinaya_Resume.pdf";
import heroPortrait from "../../assets/image.png";
import "./Hero.css";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="home">
      <div className="hero-god-rays" aria-hidden="true" />
      <div className="hero-horizon-mist" aria-hidden="true" />
      <svg className="hero-sky-cloud hero-sky-cloud-one" viewBox="0 0 120 54" aria-hidden="true"><path d="M22 45C9 45 3 37 3 28c0-10 8-18 19-18 4 0 8 1 11 4C38 3 48 0 59 3c10 2 16 10 17 20 3-2 7-3 11-3 12 0 21 8 21 18 0 5-3 7-9 7H22Z"/></svg>
      <svg className="hero-sky-cloud hero-sky-cloud-two" viewBox="0 0 120 54" aria-hidden="true"><path d="M22 45C9 45 3 37 3 28c0-10 8-18 19-18 4 0 8 1 11 4C38 3 48 0 59 3c10 2 16 10 17 20 3-2 7-3 11-3 12 0 21 8 21 18 0 5-3 7-9 7H22Z"/></svg>
      <div className="container">
        <div className="hero-editorial">

          <Motion.div
            className="hero-editorial-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="editorial-label">
              <span>00</span>
              <span>INTRODUCTION</span>
            </div>

            <h1 className="hero-name" aria-label="KAVINAYA S.">
              <span>{Array.from("KAVINAYA").map((letter, index) => <span className="hero-letter" key={`${letter}-${index}`}>{letter}</span>)}</span> <span className="hero-letter hero-initial">S.</span>
            </h1>

            <div className="hero-role">
              FULL STACK DEVELOPER
            </div>

            <p className="hero-tagline">Thoughtful code, a little daydream.</p>

            <div className="hero-tech-line">
              MERN · JAVA · DSA
            </div>

            <p className="hero-description">
              I build thoughtful digital experiences and reliable
              software systems with a focus on clean structure,
              practical problem solving, and continuous learning.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="editorial-primary-btn">
                View My Work <ArrowUpRight className="ui-inline-icon" aria-hidden="true" />
              </a>

              <a href="#contact" className="editorial-secondary-btn">
                Let&apos;s connect <ArrowUpRight className="ui-inline-icon" aria-hidden="true" />
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-secondary-btn"
              >
                Resume <ArrowUpRight className="ui-inline-icon" aria-hidden="true" />
              </a>
            </div>

            <a className="hero-scroll-hint" href="#statement">
              <span>Scroll to explore</span>
              <ArrowDown className="scroll-hint-arrow" aria-hidden="true" />
            </a>
          </Motion.div>

          <Motion.div
            className="hero-editorial-image"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
           <div className="hero-portrait-frame">
  <img
    src={heroPortrait}
    alt="Kavinaya S. — Full Stack Developer"
    className="hero-portrait"
  />
</div>

            <div className="image-caption">
              <span>KAVINAYA S.</span>
              <span>ECE / SOFTWARE</span>
            </div>
          </Motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
