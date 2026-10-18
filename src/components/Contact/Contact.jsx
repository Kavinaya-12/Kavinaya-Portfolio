import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <motion.div
          className="contact-top"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="editorial-section-label">
            <span>09</span>
            <span>CONTACT</span>
          </div>
        </motion.div>


        <motion.div
          className="contact-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <a href="mailto:kavinaya095@gmail.com" className="contact-talk contact-magnetic say-hi-button" onClick={(event) => { const button = event.currentTarget; button.classList.add("confetti-pop"); window.setTimeout(() => button.classList.remove("confetti-pop"), 700); }}>Say hi <span aria-hidden="true">↗</span><svg className="contact-starburst" viewBox="0 0 44 44" aria-hidden="true"><path d="M22 1v9m0 24v9M1 22h9m24 0h9M7.15 7.15l6.36 6.36m17 17 6.36 6.36m0-29.72-6.36 6.36m-17 17-6.36 6.36" /></svg></a>
          <p className="contact-mantra">Let&apos;s work together.</p>
          <h2>
            Let&apos;s build
            <br />
            something <em>meaningful.</em>
          </h2>
        </motion.div>



        <motion.div
          className="contact-content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="contact-intro">
            <p>
              I&apos;m open to opportunities, collaborations
              and conversations around software development.
            </p>

            <span>
              Based in Tamil Nadu · Open to opportunities
            </span>
          </div>


          <div className="contact-links">

            <a
              href="mailto:kavinaya095@gmail.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>kavinaya095@gmail.com</strong>
              <span className="contact-arrow">↗</span>
            </a>


            <a
              href="https://www.linkedin.com/in/kavinaya-subramaniam-4baa16259/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
              <strong>Connect with me</strong>
              <span className="contact-arrow">↗</span>
            </a>


            <a
              href="https://github.com/Kavinaya-12/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GITHUB</span>
              <strong>View my work</strong>
              <span className="contact-arrow">↗</span>
            </a>

          </div>

        </motion.div>


        <motion.div
          className="contact-bottom"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <span>AVAILABLE FOR THE NEXT CHAPTER</span>

          <div className="contact-line"></div>

          <span>2026</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
