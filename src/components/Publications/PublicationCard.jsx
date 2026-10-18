import React from "react";
import "./Publications.css";
import "../../../src/App.css";

const PublicationCard = ({
  publication,
}) => {
  return (
    <article className="publication-card">

      <div className="publication-preview">

        <div className="publication-paper">
          <span>
            IEEE
          </span>

          <span>
            RESEARCH
          </span>
        </div>

      </div>


      <div className="publication-content">

        <div className="publication-label">
          {publication.label}
        </div>

        <h3>
          {publication.title}
        </h3>

        <p className="publication-conference">
          {publication.conference}
        </p>

        <div className="publication-doi">
          <span>DOI</span>
          <strong>
            {publication.doi}
          </strong>
        </div>

        <p className="publication-summary">
          {publication.summary}
        </p>

        <div className="publication-tags">

          {publication.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}

        </div>

        <div className="publication-actions">

          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="small-primary-btn"
          >
            Read Publication ↗
          </a>

        </div>

      </div>

    </article>
  );
};

export default PublicationCard;