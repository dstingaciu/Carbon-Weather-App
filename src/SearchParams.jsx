import React, { useState } from "react";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";
import WeatherUI from "./Weather";

const LocationSearch = () => {
  const [locationQuery, updateLocationQuery] = useState("");
  const [location, updateLocation] = useState("");
  const [didSubmit, updateDidSubmit] = useState(false);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      updateLocation(pos.coords.latitude + " " + pos.coords.longitude);
    });
  }
  return (
    <div className="bx--grid">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          updateDidSubmit(true);
          updateLocationQuery(location);
        }}
        className="bx--row"
      >
        <div className="bx--col">
          <FormGroup
            legendText=""
            message={false}
            messageText=""
            invalid={false}
          >
            <TextInput
              id="location"
              invalidText="Invalid location provided"
              labelText="Location"
              placeholder="Toronto, ON"
              value={location}
              onChange={(e) => {
                updateDidSubmit(false);
                updateLocation(e.target.value);
              }}
            />
          </FormGroup>
        </div>
        <div className="bx--col">
          <Button kind="primary" id="update" tabIndex={0} type="submit">
            Update Weather
          </Button>
        </div>
      </Form>
      <div className="bx--row">
        <WeatherUI location={locationQuery} didSubmit={didSubmit} />
      </div>
    </div>
  );
};

export default LocationSearch;
