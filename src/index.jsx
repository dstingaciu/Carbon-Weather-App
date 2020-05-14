import React from "react";
import { render } from "react-dom";
import WeatherUI from "./Weather";
import "./css/carbon.scss";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div id="container">
        <WeatherUI />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
