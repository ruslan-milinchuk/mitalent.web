import React, { Component } from "react";
import BurgerMenu from "../../compnents/BurgerMenu";
import { Link } from "react-router-dom";
import "./style.css";

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
            <Link className="item" to="/">
              MITALENT
            </Link>
          </h1>
          <form className="form">
            <input className="input" type="text" placeholder="Search client" />
            <button className="button" type="submit">
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                width="15px"
                height="15px"
                viewBox="0 0 30.239 30.239"
              >
                <path
                  d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735
		c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0
		c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z
		 M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0
		C21.517,9.026,21.517,14.63,18.073,18.074z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
