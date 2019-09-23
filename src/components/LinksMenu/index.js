import React from "react";
import { Link } from "react-router-dom";

const LinksMenu = ({ close }) => (
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

export default LinksMenu;
