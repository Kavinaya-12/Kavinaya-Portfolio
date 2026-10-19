import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutWorkspace from "../../assets/about-workspace.png";
import "./About.css";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about-section" id="about">
      <div className="container">

        <Motion.div
          className="about-intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="about-copy">

            <div className="editorial-section-label">
              <span>02</span>
              <span>ABOUT</span>
            </div>

            <h2>
              A little about me.
            </h2>

            <p>
              I&apos;m Kavinaya — an Electronics &amp; Communication
              Engineering graduate who found my strongest interest
              in software development.
            </p>

            <p>
              I enjoy turning ideas into practical applications,
              especially with JavaScript, React and the MERN stack.
              I also enjoy working with Java and strengthening my
              problem-solving skills through Data Structures and
              Algorithms.
            </p>

            <p>
              My current focus is becoming a stronger software
              developer — improving my problem-solving foundations,
              understanding backend systems more deeply, and building
              products with better structure and user experience.
            </p>

            <a
              href="#skills"
              className="about-text-link"
            >
              Explore my skills <ArrowRight className="ui-inline-icon" aria-hidden="true" />
            </a>

          </div>

          <div className="about-image-column">

           <div className="about-workspace-image">
  <img
    src={aboutWorkspace}
    loading="lazy"
    alt="A warm, minimal workspace representing learning and software development"
  />
</div>

            <div className="editorial-image-caption">
              <span>KAVINAYA S.</span>
              <span>SOFTWARE DEVELOPER</span>
            </div>

          </div>

        </Motion.div>

        <Motion.div
          className="about-approach"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="editorial-section-label">
            <span>02</span>
            <span>✦ APPROACH</span>
          </div>

          <h2>
            My approach.
          </h2>

          <div className="approach-grid">

            <div className="approach-item">

              <span className="approach-number">
                01
              </span>

              <div>
                <h3>UNDERSTAND</h3>

                <p>
                  I start by breaking a problem into smaller,
                  understandable pieces before deciding how
                  to build it.
                </p>
              </div>

            </div>

            <div className="approach-item">

              <span className="approach-number">
                02
              </span>

              <div>
                <h3>BUILD</h3>

                <p>
                  I turn ideas into working applications,
                  focusing on practical implementation and
                  clear structure.
                </p>
              </div>

            </div>

            <div className="approach-item">

              <span className="approach-number">
                03
              </span>

              <div>
                <h3>REFINE</h3>

                <p>
                  I improve the interface, functionality and
                  implementation until the result feels
                  reliable and complete.
                </p>
              </div>

            </div>

          </div>

        </Motion.div>
      </div>
    </section>
  );
};

export default About;
