import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinksMenu extends Component {
  render() {
    return (
      <div className="list">
        <Link className="item" to="/aboute">
          Aboute
        </Link>
        <Link className="item" to="/clients">
          Clients
        </Link>
        <Link className="item" to="/news">
          News
        </Link>
        <Link className="item" to="/contact-us">
          Contact us
        </Link>
      </div>
    );
  }
}

export default LinksMenu;
