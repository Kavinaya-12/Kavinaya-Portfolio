import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "journey", "research", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a
          href="#top"
          className="navbar-logo"
          onClick={closeMenu}
        >
          KAVINAYA S
        </a>

        <nav className="navbar-links">
          <a className={activeSection === "about" ? "active" : ""} aria-current={activeSection === "about" ? "location" : undefined} href="#about">ABOUT</a>
          <a className={activeSection === "projects" ? "active" : ""} aria-current={activeSection === "projects" ? "location" : undefined} href="#projects">PROJECTS</a>
          <a className={activeSection === "journey" ? "active" : ""} aria-current={activeSection === "journey" ? "location" : undefined} href="#journey">JOURNEY</a>
          <a className={activeSection === "research" ? "active" : ""} aria-current={activeSection === "research" ? "location" : undefined} href="#research">RESEARCH</a>
          <a className={activeSection === "skills" ? "active" : ""} aria-current={activeSection === "skills" ? "location" : undefined} href="#skills">SKILLS</a>
          <a className={activeSection === "contact" ? "active" : ""} aria-current={activeSection === "contact" ? "location" : undefined} href="#contact">CONTACT</a>
        </nav>

        <a
          href="/Kavinaya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-resume"
        >
          RESUME <span>↗</span>
        </a>

        <button
          className={`navbar-menu-button ${
            menuOpen ? "active" : ""
          }`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        <a href="#projects" onClick={closeMenu}>
          PROJECTS
        </a>

        <a href="#journey" onClick={closeMenu}>
          JOURNEY
        </a>

        <a href="#research" onClick={closeMenu}>
          RESEARCH
        </a>

        <a href="#skills" onClick={closeMenu}>
          SKILLS
        </a>

        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>

        <a
          href="/Kavinaya_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          RESUME ↗
        </a>
      </div>
    </header>
  );
};

export default Navbar;
