import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import billingresearchImage from "../../assets/billing-research.png";
import helmetresearchImage from "../../assets/helmet-research.png";
import "./Publications.css";

const papers = [
  { title: "Accessible Online Payment Billing Machine for the Visually Impaired", summary: "The proposed billing machine combines voice-activated transaction amount input, a Braille keypad for PIN entry and real-time audio feedback to support accessible, secure and more independent financial transactions.", url: "https://ieeexplore.ieee.org/document/11337527" },
  { title: "IoT-enabled Multi-Mode Smart Helmet", summary: "The proposed Mining, Construction and Rider modes address landslide and gas hazards, construction falls and site alerts, and rider accidents and vital signs including temperature, humidity, heart rate and SpO2. ESP32/ESP8266 processing connects to a cloud server through a PHP backend, with web and mobile monitoring described.", url: "https://ieeexplore.ieee.org/document/11597624" },
];

const Publications = () => {
  const shouldReduceMotion = useReducedMotion();
  return <section className="publications-section" id="research"><div className="container">
    <motion.div className="publications-header" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
      <div className="editorial-section-label"><span>05</span><span>RESEARCH</span></div><h2>My research work.</h2>
    </motion.div>
    {papers.map((paper, index) => <motion.article className="publication-editorial" key={paper.url} initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: index * 0.08 }}>
      <div className="publication-information"><div className="publication-number">0{index + 1}</div><div className="publication-type">IEEE RESEARCH PAPER</div><h3>{paper.title}</h3><p>{paper.summary}</p><a href={paper.url} target="_blank" rel="noopener noreferrer" className="publication-link">Read paper on IEEE Xplore -&gt;</a></div>
      <div className="publication-visual"><div className="publication-image-placeholder"><span>RESEARCH IMAGE</span><small>IMAGE PLACEHOLDER</small></div></div>
    </motion.article>)}
  </div></section>;
};
export default Publications;
