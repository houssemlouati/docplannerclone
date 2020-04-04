import React from "react";
import GreenTitle from "./GreenTitle";
import GrayParagraph from "./GrayParagraph";

let paragraphs = [
  {
    paragraph:
      "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
  },
  {
    paragraph:
      "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
  }
];

const LogoStar = () => (
  <div className="logo-star">
    <img src="https://www.docplanner.com/img/sygnet.png" alt="" />
  </div>
);

const MainPart1 = () => (
  <div className="section1">
    <LogoStar />
    <GreenTitle title="Making the healthcare experience more human" />
    <div className="section1-desc">
      {paragraphs.map(parag => {
        return <GrayParagraph paragraph={parag.paragraph} />;
      })}
    </div>
  </div>
);

export default MainPart1;
