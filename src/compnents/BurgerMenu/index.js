import React, { Component } from "react";
import LinksMenu from "../LinksMenu";
import "../BurgerMenu/style.css";
import { isLink } from "../../utils/isLink";

class BurgerMenu extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <div className="section" onClick={this.menuClick}>
          <a href="#" className="menu-btn">
            <span />
          </a>
        </div>
        {isLink() && this.menuClick}
        {isOpen && <LinksMenu />}
      </div>
    );
  }
  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
export default BurgerMenu;
