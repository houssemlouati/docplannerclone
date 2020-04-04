import React from "react";

const FeatureCard = props =>
  props.statistic.map(stat => {
    return (
      <div className={stat.style}>
        <img src={stat.icon} alt="" />
        <h2 className="feature-card-title">{stat.title}</h2>
        <p className="feature-card-description">{stat.description}</p>
      </div>
    );
  });

export default FeatureCard;
