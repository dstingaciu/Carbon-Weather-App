import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const FiveDayWeather = ({ location }) => {
  const [weatherData, updateWeatherData] = useState([
    { loading: true },
    { loading: true },
    { loading: true },
    { loading: true },
    { loading: true },
  ]);

  function requestLocationData(location) {
    const apiStr =
      "http://localhost:5000/weather?location=" + location + "&period=fiveDay";
    axios
      .get(apiStr)
      .then((response) => {
        updateWeatherData(response.data.response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    requestLocationData(location);
  }, []);

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <WeatherCard data={weatherData[0]} className="bx--col" />
        <div className="bx--col" />
        <WeatherCard data={weatherData[1]} className="bx--col" />
        <div className="bx--col" />
        <WeatherCard data={weatherData[2]} className="bx--col" />
        <div className="bx--col" />
        <WeatherCard data={weatherData[3]} className="bx--col" />
        <div className="bx--col" />
        <WeatherCard data={weatherData[4]} className="bx--col" />
      </div>
    </div>
  );
};

export default FiveDayWeather;
