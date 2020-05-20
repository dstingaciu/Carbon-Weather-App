import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const CurrentWeather = ({ location }) => {
  const [weatherData, updateWeatherData] = useState({ loading: true });

  function requestLocationData(location) {
    const apiStr =
      "http://localhost:5000/weather?location=" + location + "&period=current";
    axios
      .get(apiStr)
      .then((response) => {
        response.data.response.data[0].loading = false;
        updateWeatherData(response.data.response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    requestLocationData(location, "current");
  }, []);

  return <WeatherCard data={weatherData} />;
};

export default CurrentWeather;
