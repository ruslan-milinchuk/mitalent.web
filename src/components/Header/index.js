import React, { Component } from "react";
import { withRouter } from "react-router";
import { withScroll } from "react-window-decorators";
import classNames from "classnames";

import BurgerMenu from "../BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Logo/Logo";
import FormSearch from "../FormSearch";

class Header extends Component {
  state = {
    isScroll: false
  };

  componentDidMount() {
    this.isScroll();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ isScroll: false });
    }
    if (this.props.scrollPositionY !== prevProps.scrollPositionY) {
      this.isScroll();
    }
  }

  render() {
    const { pathname } = this.props.history.location;
    const { isScroll } = this.state;
    return (
      <div className="header__wrapp">
        <div
          onClick={() => this.isScroll}
          className={classNames(
            { "header__on-scroll": isScroll },
            { header: true }
          )}
        >
          <div className="header__menu">
            <BurgerMenu isScroll={isScroll} />
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

  isScroll = () => {
    const { scrollPositionY } = this.props;
    if (scrollPositionY !== 0) {
      this.setState({ isScroll: true });
    }
    if (scrollPositionY === 0) {
      this.setState({ isScroll: false });
    }
  };
}

export default withScroll(withRouter(Header));
