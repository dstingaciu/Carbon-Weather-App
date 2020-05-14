import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <h1>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        Carbon Weather
      </Link>
    </h1>
  );
};

export default NavBar;
