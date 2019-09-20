import React, { Component } from "react";
import BurgerMenu from "../../compnents/BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";
import IconSearch from "../../compnents/IconSearch";

class Header extends Component {
  render() {
    return (
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
        <h1>
          <Link className="header__logo" to="/">
            <span>MI</span>
            <span className="header__logo-spasing">TALENT</span>
          </Link>
        </h1>
        <form className="header__search-form">
          <input
            className="header__input"
            type="text"
            placeholder="Search client"
          />
          <button className="header__button" type="submit">
            <IconSearch />
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
