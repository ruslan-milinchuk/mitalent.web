import React from "react";

import classNames from "classnames";

const ButtonsGroupsClients = ({ activeType, changeRole, role }) =>
  role.map(item => (
    <div
      id={item}
      key={item}
      onClick={() => changeRole(item)}
      className={classNames("customer-groups__btn", {
        "customer-groups__btn-active": item === activeType
      })}
    >
      {item}
    </div>
  ));
export default ButtonsGroupsClients;
