import React from "react";
import "./Statement.css";

const statementWords = [
  "I", "build", "thoughtful", "digital", "experiences", "and", "reliable",
  "software", "systems", "with", "a", "focus", "on", "clean", "structure,",
  "practical", "problem", "solving,", "and", "continuous", "learning.",
];
const Statement = () => (
  <section className="statement-section" id="statement" aria-label="Introduction">
    <div className="container statement-inner">
      <div className="statement-copy-panel">
        <div className="editorial-section-label"><span>01</span><span>THE POINT OF VIEW</span></div>
        <p className="statement-copy statement-bubble" aria-label={statementWords.join(" ")}>
          {statementWords.map((word, index) => <React.Fragment key={`${word}-${index}`}>
            <span className={`statement-word${word === "experiences" ? " statement-italic" : ""}`} aria-hidden="true">{word}</span>{" "}
          </React.Fragment>)}
        </p>
      </div>
      <div className="statement-visual" aria-hidden="true">
        <svg className="thought-orb-scene" viewBox="0 0 520 400" focusable="false">
          <defs>
            <radialGradient id="thought-orb-fill" cx="34%" cy="25%" r="78%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity=".94" />
              <stop offset="58%" stopColor="#e8f3ff" stopOpacity=".62" />
              <stop offset="100%" stopColor="#d8d0f1" stopOpacity=".48" />
            </radialGradient>
            <linearGradient id="thought-ring-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8bb4dc" stopOpacity=".16" />
              <stop offset="48%" stopColor="#ffffff" stopOpacity=".94" />
              <stop offset="100%" stopColor="#c2a9db" stopOpacity=".38" />
            </linearGradient>
            <linearGradient id="thought-mist-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity=".08" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity=".8" />
              <stop offset="100%" stopColor="#f3d9d6" stopOpacity=".22" />
            </linearGradient>
            <filter id="thought-mist-blur" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          <g className="thought-mist">
            <path d="M38 302 C107 270 154 329 222 302 S351 276 480 306" fill="none" stroke="url(#thought-mist-stroke)" strokeWidth="36" strokeLinecap="round" filter="url(#thought-mist-blur)" />
            <path d="M70 318 C144 291 196 342 266 316 S386 294 455 318" fill="none" stroke="#ffffff" strokeOpacity=".62" strokeWidth="2" strokeLinecap="round" />
            <circle cx="112" cy="302" r="18" fill="#ffffff" fillOpacity=".44" />
            <circle cx="132" cy="296" r="25" fill="#ffffff" fillOpacity=".52" />
            <circle cx="158" cy="304" r="17" fill="#f5e0dc" fillOpacity=".42" />
          </g>

          <g className="orbital-ring orbital-ring-back">
            <ellipse cx="278" cy="184" rx="158" ry="62" transform="rotate(-24 278 184)" fill="none" stroke="url(#thought-ring-stroke)" strokeWidth="1.5" />
            <circle cx="130" cy="119" r="5" fill="#f4d8c7" />
          </g>

          <circle className="thought-orb" cx="278" cy="184" r="83" fill="url(#thought-orb-fill)" stroke="#ffffff" strokeOpacity=".9" strokeWidth="1.5" />
          <ellipse cx="250" cy="148" rx="38" ry="13" transform="rotate(-28 250 148)" fill="#ffffff" fillOpacity=".48" />
          <path d="m257 173-14 13 14 13 M299 173l14 13-14 13 M288 168l-20 37" fill="none" stroke="#7d83bd" strokeOpacity=".82" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="278" cy="224" r="3" fill="#d99bb1" />
          <circle cx="290" cy="224" r="3" fill="#e6c88a" />
          <circle cx="302" cy="224" r="3" fill="#99b8d6" />

          <g className="orbital-ring orbital-ring-front">
            <ellipse cx="278" cy="184" rx="174" ry="75" transform="rotate(20 278 184)" fill="none" stroke="url(#thought-ring-stroke)" strokeWidth="1.2" />
            <circle cx="444" cy="245" r="4.5" fill="#c9b8e7" />
            <circle cx="112" cy="132" r="3" fill="#f3cbb5" />
          </g>

          <g className="thought-code-mark" transform="translate(378 76) rotate(7)">
            <rect width="76" height="52" rx="16" fill="#ffffff" fillOpacity=".62" stroke="#ffffff" strokeOpacity=".9" />
            <path d="m30 19-8 7 8 7 M46 19l8 7-8 7 M42 17l-7 18" fill="none" stroke="#8584bd" strokeOpacity=".82" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <circle cx="395" cy="167" r="2.5" fill="#ffffff" fillOpacity=".88" />
          <circle cx="165" cy="217" r="2" fill="#e6bdc8" fillOpacity=".9" />
        </svg>
      </div>
    </div>
  </section>
);

export default Statement;
