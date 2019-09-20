import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinksMenu extends Component {
  render() {
    return (
      <div className="header__list">
        <Link className="header__item_unfixed" to="/about">
          Aboute
        </Link>
        <Link className="header__item_unfixed" to="/clients">
          Clients
        </Link>
        <Link className="header__item_unfixed" to="/news">
          News
        </Link>
        <Link className="header__item_unfixed" to="/contact-us">
          Contact us
        </Link>
      </div>
    );
  }
}

export default LinksMenu;
