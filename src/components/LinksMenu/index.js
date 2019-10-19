import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";

const LINK_CONTACT = "/contact-us";
const LINK_CLIENTS = "/clients";
const LINK_ABOUT = "/about";
const LINK_NEWS = "/news";

class LinksMenu extends Component {
  render() {
    const { close, history, isScroll } = this.props;
    const { pathname } = history.location;
    return (
      <div
        className={classNames(
          { "header__list-scroll": isScroll },
          { header__list: true }
        )}
      >
        <Link
          onClick={close}
          className={classNames(
            { "header__item-active": pathname === LINK_ABOUT },
            { header__item_unfixed: true }
          )}
          to={LINK_ABOUT}
        >
          About
        </Link>
        <Link
          onClick={close}
          className={classNames(
            { "header__item-active": pathname === LINK_CLIENTS },
            { header__item_unfixed: true }
          )}
          to={LINK_CLIENTS}
        >
          Clients
        </Link>
        <Link
          onClick={close}
          className={classNames(
            { "header__item-active": pathname === LINK_NEWS },
            { header__item_unfixed: true }
          )}
          to={LINK_NEWS}
        >
          News
        </Link>
        <Link
          onClick={close}
          className={classNames(
            { "header__item-active": pathname === LINK_CONTACT },
            { header__item_unfixed: true }
          )}
          to={LINK_CONTACT}
        >
          Contact us
        </Link>
      </div>
    );
  }
}

export default withRouter(LinksMenu);
