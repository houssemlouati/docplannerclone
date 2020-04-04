import React from "react";

let city = [
  {
    city: "Warsaw",
    image: "https://www.docplanner.com/images/warsaw.png"
  },
  {
    city: "Barcelona",
    image: "https://www.docplanner.com/images/barcelona.png"
  },
  {
    city: "Istanbul",
    image: "https://www.docplanner.com/images/istanbul.png"
  },
  {
    city: "Rome",
    image: "https://www.docplanner.com/images/rome.png"
  },
  {
    city: "Mexico City",
    image: "https://www.docplanner.com/images/mexico-city.png"
  },
  {
    city: "Curitiba",
    image: "https://www.docplanner.com/images/curitiba.png"
  }
];

const City = ({ city, image }) => (
  <div className="section6-img">
    <a href="">
      <img src={image} alt="" />
      <div className="city-name">
        {city}
        <bottun className="openings">See openings</bottun>
      </div>
    </a>
  </div>
);

const MainPart6 = () => (
  <div className="section6">
    {city.map(city => {
      return <City city={city.city} image={city.image} />;
    })}
  </div>
);

export default MainPart6;
