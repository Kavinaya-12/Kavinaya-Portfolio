import React from "react";
import "./Statement.css";

const statementWords = [
  "I", "build", "thoughtful", "digital", "experiences", "and", "reliable",
  "software", "systems", "with", "a", "focus", "on", "clean", "structure,",
  "practical", "problem", "solving,", "and", "continuous", "learning.",
];
const statementChunks = [statementWords.slice(0, 5), statementWords.slice(5, 9), statementWords.slice(9)];

const Statement = () => (
  <section className="statement-section" id="statement" aria-label="Introduction">
    <div className="container statement-inner">
      <div className="editorial-section-label"><span>01</span><span>THE POINT OF VIEW</span></div>
      <div className="statement-copy" aria-label={statementWords.join(" ")}>
        {statementChunks.map((chunk, chunkIndex) => <p className="statement-bubble" key={chunkIndex}>
          {chunk.map((word, index) => <React.Fragment key={`${word}-${index}`}>
            <span className={`statement-word${word === "experiences" ? " statement-italic" : ""}`} aria-hidden="true">{word}</span>{" "}
          </React.Fragment>)}
        </p>)}
      </div>
    </div>
  </section>
);

export default Statement;
