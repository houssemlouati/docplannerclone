import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainPart1 from "./components/MainPart1";
import MainPart2 from "./components/MainPart2";
import MainPart3 from "./components/MainPart3";
import MainPart4 from "./components/MainPart4";
import MainPart5 from "./components/MainPart5";
import MainPart6 from "./components/MainPart6";
import Footer from "./components/Footer";
import "./styles.css";

const Main = () => (
  <div>
    <Header />
    <MainPart1 />
    <MainPart2 />
    <MainPart3 />
    <MainPart4 />
    <MainPart5 />
    <MainPart6 />
    <Footer />
  </div>
);

ReactDOM.render(<Main />, document.getElementById("root"));