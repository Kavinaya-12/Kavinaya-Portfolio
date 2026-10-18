import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import aboutWorkspace from "../../assets/about-workspace.png";
import "./About.css";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* =====================================================
            ABOUT INTRO
        ===================================================== */}

        <motion.div
          className="about-intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* LEFT CONTENT */}
          <div className="about-copy">

            <div className="editorial-section-label">
              <span>01</span>
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
              Explore my skills →
            </a>

          </div>

          {/* RIGHT IMAGE PLACEHOLDER */}
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

        </motion.div>


        {/* =====================================================
            APPROACH
        ===================================================== */}

        <motion.div
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
            <span>HOW I LIKE TO BUILD</span>
          </div>

          <h2>
            My approach.
          </h2>

          <div className="approach-grid">

            {/* 01 */}
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


            {/* 02 */}
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


            {/* 03 */}
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

        </motion.div>


        {/* =====================================================
            EDUCATION SNAPSHOT
        ===================================================== */}

        <motion.div
          className="about-education"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="education-content">

            <div className="editorial-section-label">
              <span>03</span>
              <span>EDUCATION</span>
            </div>

            <div className="education-list">
              <article className="education-entry"><h3>Sri Eshwar College of Engineering</h3><p>B.E. Electronics &amp; Communication Engineering</p><span className="education-period">2022-2026 | CGPA: 8.0</span></article>
              <article className="education-entry"><h3>Rajalakshmi Genguswamy Matriculation Higher Secondary School</h3><p>Higher Secondary Certificate (HSC)</p><span className="education-period">2021-2022 | 78.8%</span></article>
              <article className="education-entry"><h3>Rajalakshmi Genguswamy Matriculation Higher Secondary School</h3><p>Secondary School Leaving Certificate (SSLC)</p><span className="education-period">2019-2020 | 81%</span></article>
            </div>
          </div>


          <div className="education-image-placeholder">
            <span>CAMPUS / EDUCATION</span>
            <small>IMAGE PLACEHOLDER</small>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
