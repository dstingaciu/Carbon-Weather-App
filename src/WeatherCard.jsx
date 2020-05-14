import React from "react";
import { Tile } from "carbon-components-react";

const WeatherCard = ({ data }) => {
  return (
    <div id="card">
      <Tile light={true}>
        <p>Temp: {data.temp}</p>
        <p>
          City: {data.city_name}, {data.country_code}
        </p>
        <p>UV Index: {data.uv}</p>
        <p>{data.weather.description}</p>
      </Tile>
    </div>
  );
};

export default WeatherCard;
