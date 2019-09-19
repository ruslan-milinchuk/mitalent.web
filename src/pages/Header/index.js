import React, { Component } from "react";
import BurgerMenu from "../../compnents/BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapp">
          <div className="menu">
            <BurgerMenu />
            <Link className="menu__li" to="/clients">
              Clients
            </Link>
            <Link className="menu__li" to="/news">
              News
            </Link>
          </div>
          <h1>
            <Link className="item" to="/home-page">
              MITALENT
            </Link>
          </h1>
          <form className="form-inline md-form form-sm active-cyan-2 mt-2">
            <input
              className="form-control form-control-sm mr-3 w-75"
              type="text"
              placeholder="Search client"
              aria-label="Search"
            />
            <i className="fas fa-search" aria-hidden="true"></i>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
