import React, { Component } from "react";
import { withRouter } from "react-router";

import BurgerMenu from "../BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo/Logo";
import FormSearch from "../FormSearch";

class Header extends Component {
  render() {
    const { pathname } = this.props.history.location;
    return (
      <div className="header__wrapp">
        <div className="header">
          <div className="header__menu">
            <BurgerMenu />
            <Link
              className={
                pathname === "/clients"
                  ? "header__item_fixed header__item-active"
                  : "header__item_fixed"
              }
              to="/clients"
            >
              Clients
            </Link>
            <Link
              className={
                pathname === "/news"
                  ? "header__item_fixed header__item-active"
                  : "header__item_fixed"
              }
              to="/news"
            >
              News
            </Link>
          </div>
          <Logo />
          <FormSearch placeholder="Search client" icon="search" />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
