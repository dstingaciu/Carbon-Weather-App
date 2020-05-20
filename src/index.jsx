import React from "react";
import { render } from "react-dom";
import "./css/carbon.scss";
import { Header, HeaderName, Content } from "carbon-components-react";
import LocationSearch from "./SearchParams";

const App = () => {
  return (
    <div className="container">
      <Header aria-label="Name">
        <HeaderName href="#" prefix="Carbon">
          Weather
        </HeaderName>
      </Header>
      <Content>
        <LocationSearch />
      </Content>
    </div>
  );
};

render(<App />, document.getElementById("root"));
