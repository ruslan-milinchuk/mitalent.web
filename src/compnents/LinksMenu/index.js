import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinksMenu extends Component {
  render() {
    const { close } = this.props;
    return (
      <div className="header__list">
        <Link onClick={close} className="header__item_unfixed" to="/about">
          About
        </Link>
        <Link onClick={close} className="header__item_unfixed" to="/clients">
          Clients
        </Link>
        <Link onClick={close} className="header__item_unfixed" to="/news">
          News
        </Link>
        <Link onClick={close} className="header__item_unfixed" to="/contact-us">
          Contact us
        </Link>
      </div>
    );
  }
}

export default LinksMenu;
