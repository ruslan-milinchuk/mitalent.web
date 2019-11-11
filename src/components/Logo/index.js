import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const Logo = () => (
  <h1>
    <Link className="logo" to="/">
      <span>MI</span>
      <span className="logo__spacing">TALENT</span>
    </Link>
  </h1>
);

export default Logo;
