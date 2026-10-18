import React from "react";
import "./Certificates.css";
import "../../App.css";

const CertificateCard = ({
  certificate,
}) => {
  return (
    <article className="certificate-card">

      <div className="certificate-content">

        <div className="certificate-topline">
          <span>
            {certificate.year}
          </span>

          <span className="certificate-line"></span>
        </div>

        <h3>
          {certificate.title}
        </h3>

        <p>
          {certificate.provider}
        </p>

        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View certificate
          </a>
        )}

      </div>

    </article>
  );
};

export default CertificateCard;