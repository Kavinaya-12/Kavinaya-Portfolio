import React from "react";
import "./CredibilityStrip.css";

const credibilityData = [
  {
    label: "B.E. ECE",
    value: "2022-2026",
  },
  {
    label: "MERN STACK",
    value: "React / Node.js / Express / MongoDB",
  },
  {
    label: "JAVA + DSA",
    value: "Java and DSA",
  },
  {
    label: "IEEE RESEARCH",
    value: "CISCON 2025",
  },
];

const CredibilityStrip = () => {
  return (
    <section className="credibility-strip">

      <div className="container credibility-shell">

        {credibilityData.map((item, index) => (
          <div
            className="credibility-item"
            key={item.label}
          >

            <div className="credibility-icon">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="credibility-content">

              <span className="credibility-label">
                {item.label}
              </span>

              <span className="credibility-value">
                {item.value}
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CredibilityStrip;