import React, { useState } from "react";
import LinksMenu from "../LinksMenu";
import classNames from "classnames";
import "./style.css";

const BurgerMenu = ({ isScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  let menuClass = classNames({
    "menu-btn": true,
    "menu-btn__open": isOpen && isScroll,
    "menu-btn_padding": isOpen && !isScroll
  });

  return (
    <div className="header__burger-menu">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          { "header__open-menu": isOpen },
          { "header__close-menu": !isOpen }
        )}
      />
      <div className="section" onClick={() => setIsOpen(!isOpen)}>
        <div className={menuClass}>
          <span />
        </div>
      </div>
      {isOpen && (
        <LinksMenu isScroll={isScroll} close={() => setIsOpen(!isOpen)} />
      )}
    </div>
  );
};

export default BurgerMenu;
