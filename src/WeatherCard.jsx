import React from "react";
import { Tile } from "carbon-components-react";
import weather_association from "./weather_api_codes";

const WeatherCard = ({ data }) => {
  console.log(data);
  if (data.loading && data.loading == true) {
    return <p>Loading weather..</p>;
  } else {
    const imageSrc = "./assets/icons/" + data.weather.icon + ".png";
    const weatherCode = data.weather.code;
    const imageAlt = weather_association()[weatherCode];
    var dateTime = data.datetime.split(":")[0];
    const d = new Date(dateTime);
    return (
      <div id="card" className="bx--col-sm-">
        <Tile light={false}>
          <p>{d.toDateString()}</p>
          <img src={imageSrc} alt={imageAlt} />
          <p>Temp: {data.temp}</p>
          <p>
            City: {data.city_name}, {data.country_code}
          </p>
          <p>UV Index: {data.uv}</p>
          <p>{data.weather.description}</p>
        </Tile>
      </div>
    );
  }
};

export default WeatherCard;
