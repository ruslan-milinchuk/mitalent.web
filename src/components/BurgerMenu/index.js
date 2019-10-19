import React, { Component } from "react";
import LinksMenu from "../LinksMenu";
import classNames from "classnames";
import "./style.css";

class BurgerMenu extends Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;
    const { isScroll } = this.props;
    let menuClass = classNames({
      "menu-btn": true,
      "menu-btn__open": isOpen && isScroll,
      "menu-btn__open menu-btn_padding": isOpen && !isScroll
    });

    return (
      <div className="header__burger-menu">
        <div
          onClick={this.menuClick}
          className={classNames(
            { "header__open-menu": isOpen },
            { "header__close-menu": !isOpen }
          )}
        />
        <div className="section" onClick={this.menuClick}>
          <div className={menuClass}>
            <span />
          </div>
        </div>
        {isOpen && <LinksMenu isScroll={isScroll} close={this.menuClick} />}
      </div>
    );
  }
  menuClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
export default BurgerMenu;
