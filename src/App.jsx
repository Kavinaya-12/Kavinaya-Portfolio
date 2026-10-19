import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statement from "./components/Statement/Statement";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Publications from "./components/Publications/Publications";
import Certificates from "./components/Certificates/Certificates";
import Skills from "./components/Skills/Skills";
import CredibilityStrip from "./components/CredibilityStrip/CredibilityStrip";
import Achievements from "./components/Achievements/Achievements";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollExperience from "./components/ScrollExperience";
import "./App.css";

const App = () => (
  <div className="page-shell">
    <Navbar />
    <main id="top">
      <Hero />
      <Statement />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Publications />
      <Certificates />
      <Achievements />
      <CredibilityStrip />
      <Contact />
    </main>
    <a className="back-to-top" href="#top" aria-label="Back to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 21 20-9L2 3l3 8 11 1-11 1-3 8Z" /></svg></a>
    <ScrollExperience />
    <Footer />
  </div>
);

export default App;
