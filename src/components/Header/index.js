import React from "react";
import BurgerMenu from "../BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo/Logo";
import FormSearch from "../FormSearch";

const Header = () => (
  <div className="header__wrapp">
    <div className="header">
      <div className="header__menu">
        <BurgerMenu />
        <Link className="header__item_fixed" to="/clients">
          Clients
        </Link>
        <Link className="header__item_fixed" to="/news">
          News
        </Link>
      </div>
      <Logo />
      <FormSearch placeholder="Search client" icon="search" />
    </div>
  </div>
);

export default Header;
