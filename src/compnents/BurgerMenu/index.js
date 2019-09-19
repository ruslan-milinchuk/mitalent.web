import React, { Component } from "react";
import LinksMenu from "../LinksMenu";
import "../BurgerMenu/style.css";
class BurgerMenu extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div>
        <div className="section" onClick={this.menuClick}>
          <a href="#" className="menu-btn">
            <span />
          </a>
        </div>
        {this.state.isOpen && <LinksMenu c />}
      </div>
    );
  }
  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
export default BurgerMenu;