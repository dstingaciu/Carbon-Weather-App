import React, { useState } from "react";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const LocationSearch = () => {
  const [location, updateLocation] = useState("");
  const [weather_data, updateWeatherData] = useState({
    temp: 0,
    state_code: "",
    country_code: "",
    uv: 0,
    weather: { description: "" },
  });

  function requestLocationData(location) {
    const apiStr = "http://localhost:5000/weather?location=" + location;
    axios
      .get(apiStr)
      .then((response) => {
        console.log(response);
        updateWeatherData(response.data.response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="search">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          requestLocationData(location);
        }}
      >
        <FormGroup legendText="" message={false} messageText="" invalid={false}>
          <TextInput
            id="location"
            invalidText="Invalid location provided"
            labelText="Location"
            placeholder="Toronto, ON"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </FormGroup>
        <Button kind="primary" tabIndex={0} type="submit">
          Update Weather
        </Button>
      </Form>
      <WeatherCard data={weather_data} />
    </div>
  );
};

export default LocationSearch;
