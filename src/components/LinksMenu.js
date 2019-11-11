import React from "react";

import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";

const LINK_CONTACT = "/contact-us";
const LINK_CLIENTS = "/clients";
const LINK_ABOUT = "/about";
const LINK_NEWS = "/news";

const LinksMenu = ({ close, history, isScroll }) => {
  const { pathname } = history.location;
  return (
    <div
      className={classNames("header__list", {
        "header__list-scroll": isScroll
      })}
    >
      <Link
        onClick={close}
        className={classNames("header__item_unfixed", {
          "header__item-active": pathname === LINK_ABOUT
        })}
        to={LINK_ABOUT}
      >
        About
      </Link>
      <Link
        onClick={close}
        className={classNames("header__item_unfixed", {
          "header__item-active": pathname === LINK_CLIENTS
        })}
        to={LINK_CLIENTS}
      >
        Clients
      </Link>
      <Link
        onClick={close}
        className={classNames("header__item_unfixed", {
          "header__item-active": pathname === LINK_NEWS
        })}
        to={LINK_NEWS}
      >
        News
      </Link>
      <Link
        onClick={close}
        className={classNames("header__item_unfixed", {
          "header__item-active": pathname === LINK_CONTACT
        })}
        to={LINK_CONTACT}
      >
        Contact us
      </Link>
    </div>
  );
};

export default withRouter(LinksMenu);
