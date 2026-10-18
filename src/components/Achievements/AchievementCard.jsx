import React from "react";
import "./Achievements.css";
import "../../App.css";

const AchievementCard = ({
  achievement,
  index,
}) => {
  return (
    <article className="achievement-card">

      <div className="achievement-index">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="achievement-content">

        <strong>
          {achievement.value}
        </strong>

        <h3>
          {achievement.title}
        </h3>

        <p>
          {achievement.description}
        </p>

        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {achievement.linkText}
          </a>
        )}

      </div>

    </article>
  );
};

export default AchievementCard;