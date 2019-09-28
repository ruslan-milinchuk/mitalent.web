import React from "react";

const ButtonsGroupsClients = ({ activeType, changeRole, role }) =>
  role.map(item => (
    <div
      id={item}
      key={item}
      onClick={() => changeRole(item)}
      className={
        item === activeType
          ? "customer-groups__btn customer-groups__btn-active"
          : "customer-groups__btn"
      }
    >
      {item}
    </div>
  ));
export default ButtonsGroupsClients;
