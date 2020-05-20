import React from "react";
import { Tabs, Tab } from "carbon-components-react";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";

const WeatherUI = ({ location, didSubmit }) => {
  if (didSubmit) {
    return (
      <div>
        <Tabs type="container">
          <Tab href="#" id="current" label="Current Weather">
            <CurrentWeather location={location} />
          </Tab>
          <Tab href="#" id="fiveDay" label="Five Days">
            <FiveDayWeather location={location} />
          </Tab>
        </Tabs>
      </div>
    );
  } else {
    return (
      <div style={{ width: "50%" }}>
        <p>Please enter a location..</p>
      </div>
    );
  }

  //return <LocationSearch type={{ typeOfUI }} />;
};

export default WeatherUI;
