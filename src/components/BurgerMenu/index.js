import React, { Component } from "react";
import LinksMenu from "../LinksMenu";
import "./style.css";

class BurgerMenu extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;
    const { itsScroll } = this.props;
    let menuClass = "";

    if (isOpen && !itsScroll) {
      menuClass = "menu-btn menu-btn__open menu-btn_padding";
    }
    if (isOpen && itsScroll) {
      menuClass = "menu-btn menu-btn__open";
    }

    if (!isOpen) {
      menuClass = "menu-btn";
    }

    return (
      <div className="header__burger-menu">
        <div
          onClick={this.menuClick}
          className={isOpen ? "header__open-menu" : "header__close-menu"}
        />
        <div className="section" onClick={this.menuClick}>
          <div className={menuClass}>
            <span />
          </div>
        </div>
        {isOpen && <LinksMenu itsScroll={itsScroll} close={this.menuClick} />}
      </div>
    );
  }
  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
export default BurgerMenu;
