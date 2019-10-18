import React, { Component } from "react";
import { withRouter } from "react-router";

import BurgerMenu from "../BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo/Logo";
import FormSearch from "../FormSearch";

class Header extends Component {
  state = {
    itScroll: false
  };

  componentDidMount() {
    this.itsScroll();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ itScroll: false });
    }
    this.itsScroll();
  }

  render() {
    const { pathname } = this.props.history.location;
    const { itScroll } = this.state;
    return (
      <div className="header__wrapp">
        <div
          onClick={() => this.itsScroll}
          className={itScroll ? "header header__on-scroll" : "header"}
        >
          <div className="header__menu">
            <BurgerMenu itsScroll={itScroll} />
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

  itsScroll = () => {
    let scrolling = setInterval(() => {
      let scroll = false;
      if (window.scrollY !== 0) {
        this.setState({ itScroll: true });
        scroll = true;
      }

      if (scroll) {
        clearInterval(scrolling);
      }
    }, 50);
  };
}

export default withRouter(Header);
