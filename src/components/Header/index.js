import React, { Component } from "react";
import { withRouter } from "react-router";
import classNames from "classnames";

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
    this.itScroll();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ itScroll: false });
    }
    this.itScroll();
  }

  render() {
    const { pathname } = this.props.history.location;
    const { itScroll } = this.state;
    return (
      <div className="header__wrapp">
        <div
          onClick={() => this.itScroll}
          className={classNames(
            { "header__on-scroll": itScroll },
            { header: true }
          )}
        >
          <div className="header__menu">
            <BurgerMenu itScroll={itScroll} />
            <Link
              className={classNames(
                { "header__item-active": pathname === "/clients" },
                { header__item_fixed: true }
              )}
              to="/clients"
            >
              Clients
            </Link>
            <Link
              className={classNames(
                { "header__item-active": pathname === "/news" },
                { header__item_fixed: true }
              )}
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

  itScroll = () => {
    setInterval(() => {
      if (window.scrollY !== 0) {
        this.setState({ itScroll: true });
      }
      if (window.scrollY === 0) {
        this.setState({ itScroll: false });
      }
    }, 50);
  };
}

export default withRouter(Header);
