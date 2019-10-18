import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LinksMenu extends Component {
  render() {
    const { close, history, itsScroll } = this.props;
    const { pathname } = history.location;
    return (
      <div className={itsScroll ? "header__list header__list-bg" : "header__list"}>
        <Link
          onClick={close}
          className={
            pathname === "/about"
              ? "header__item_unfixed header__item-active"
              : "header__item_unfixed"
          }
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={close}
          className={
            pathname === "/clients"
              ? "header__item_unfixed header__item-active"
              : "header__item_unfixed"
          }
          to="/clients"
        >
          Clients
        </Link>
        <Link
          onClick={close}
          className={
            pathname === "/news"
              ? "header__item_unfixed header__item-active"
              : "header__item_unfixed"
          }
          to="/news"
        >
          News
        </Link>
        <Link
          onClick={close}
          className={
            pathname === "/contact-us"
              ? "header__item_unfixed header__item-active"
              : "header__item_unfixed"
          }
          to="/contact-us"
        >
          Contact us
        </Link>
      </div>
    );
  }
}

export default withRouter(LinksMenu);
