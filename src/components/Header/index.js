import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import classNames from "classnames";

import withScroll from "../withScroll";
import BurgerMenu from "../BurgerMenu";
import Logo from "../Logo";
import FormSearch from "../FormSearch";

import "./style.css";

const Header = ({ history, scrollPosition }) => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => setIsScroll(scrollPosition !== 0), [scrollPosition]);

  const { pathname } = history.location;
  return (
    <div className="header__wrapp">
      <div className={classNames("header", { "header__on-scroll": isScroll })}>
        <div className="header__menu">
          <BurgerMenu isScroll={isScroll} />
          <Link
            className={classNames("header__item_fixed", {
              "header__item-active": pathname === "/clients"
            })}
            to="/clients"
          >
            Clients
          </Link>
          <Link
            className={classNames("header__item_fixed", {
              "header__item-active": pathname === "/news"
            })}
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
};

const HeaderWithLocation = withRouter(Header);
export default withScroll(HeaderWithLocation);
