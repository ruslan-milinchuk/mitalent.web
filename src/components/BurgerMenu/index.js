import React, { Component } from "react";
import LinksMenu from "../LinksMenu";
import "./style.css";

class BurgerMenu extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className="header__burger-menu">
        <div className="section" onClick={this.menuClick}>
          <a href="#" className="menu-btn">
            <span />
          </a>
        </div>
        {isOpen && <LinksMenu close={this.menuClick} />}
      </div>
    );
  }
  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
export default BurgerMenu;
