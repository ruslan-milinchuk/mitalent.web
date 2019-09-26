import React from "react";
import "./style.css";

const ButtonsGroupsClients = ({ clickBtn, role, profession }) =>
  role.map(item => (
    <button
      id={item}
      key={item}
      onClick={() => clickBtn(item)}
      className={
        item === profession
          ? "costumer-groups__btn costumer-groups__btn-active"
          : "costumer-groups__btn"
      }
    >
      {item}
    </button>
  ));
export default ButtonsGroupsClients;
