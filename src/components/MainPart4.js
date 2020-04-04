import React from "react";
import FeatureCard from "./FeatureCard";

let stat = [
  {
    title: "Leader in 10 countries",
    icon: "https://www.docplanner.com/img/flag.png",
    description:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
    style: "feature-card1"
  },
  {
    title: "1 million appointments",
    icon: "https://www.docplanner.com/img/visits.png",
    description: "booked last month",
    style: "feature-card2"
  },
  {
    title: "30 million unique patients",
    icon: "https://www.docplanner.com/img/patients.png",
    description: "visit us every month",
    style: "feature-card3"
  },
  {
    title: "2 million active doctors",
    icon: "https://www.docplanner.com/img/doctors.png",
    description: "trust in our solutions",
    style: "feature-card4"
  }
];

const TextStat = () => (
  <div className="textStat">
    <h1>
      The world's
      <br />
      biggest healthcare platform
    </h1>
    <p>
      We work from 6 offices all over the world, bringing Docplanner Group to
      life in almost 20 countries.
    </p>
  </div>
);

const ImageStat = () => (
  <div class="imageStat">
    <img src="https://www.docplanner.com/img/logo.png" alt="" />
  </div>
);

const MainPart4 = () => (
  <div className="section4">
    <div>
      <TextStat />
      <ImageStat />
    </div>
    <div class="statistic">
      <FeatureCard statistic={stat} />
    </div>
  </div>
);

export default MainPart4;
