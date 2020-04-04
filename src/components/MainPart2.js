import React from "react";
import ServiceCard from "./ServiceCard";

let services = [
  {
    category: "For patients",
    title: "Find a doctor, book a visit and solve any health-related doubt",
    background: "#5dc6b0",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    list: [
      {
        value: "",
        name: "Choose country"
      },
      {
        value: "",
        name: "Argentina"
      },
      {
        value: "",
        name: "Australia"
      },
      {
        value: "",
        name: "Brazil"
      },
      {
        value: "",
        name: "Chile"
      },
      {
        value: "",
        name: "Colombia"
      },
      {
        value: "",
        name: "Czech"
      },
      {
        value: "",
        name: "France"
      },
      {
        value: "",
        name: "Italy"
      },
      {
        value: "",
        name: "Mexico"
      },
      {
        value: "",
        name: "Peru"
      },
      {
        value: "",
        name: "Poland"
      },
      {
        value: "",
        name: "Portugal"
      },
      {
        value: "",
        name: "Spain"
      },
      {
        value: "",
        name: "Turkey"
      },
      {
        value: "",
        name: "UK"
      }
    ]
  },
  {
    title: "Save time managing visits and cut no-shows by half",
    category: "For doctors",
    background: "#4293db",
    image: "https://www.docplanner.com/img/screen-saas@2x.png"
  }
];

const MainPart2 = () => (
  <div className="section2">
    <ServiceCard service={services} />
  </div>
);

export default MainPart2;
