import React from "react";
import { ArrowUp, Code2, Globe2, Mail } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <a href="#top" className="footer-name">
            KAVINAYA S
          </a>

          <p>
            ECE graduate building toward
            software development.
          </p>
        </div>

        <div className="footer-links">
          <a href="mailto:kavinaya095@gmail.com">
            <Mail className="footer-link-icon" aria-hidden="true" /> EMAIL
          </a>

          <a
            href="https://github.com/Kavinaya-12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 className="footer-link-icon" aria-hidden="true" /> GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/kavinaya-subramaniam-4baa16259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe2 className="footer-link-icon" aria-hidden="true" /> LINKEDIN
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 KAVINAYA S</span>

          <a href="#top">
            BACK TO TOP <ArrowUp className="ui-inline-icon" aria-hidden="true" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
