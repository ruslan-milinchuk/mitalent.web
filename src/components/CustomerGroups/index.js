import React, { useState } from "react";

import { Consumer } from "../Preload";

import ButtonsGroupsClients from "../ButtonsGroupsClients";
import SliderWrapper from "../SliderWrapper";

import "./style.css";

const ROLE = ["actor", "musician", "comedian", "model"];

const CustomerGroups = ({ people, startPath, role }) => {
  const [type, setType] = useState("musician");
  const [position, setPosition] = useState(0);

  const filterWithRole = people.filter(item => {
    return item.type.includes(role ? role[0] : type);
  });
  return (
    <div className="customer-groups">
      <div className="customer-groups__btn-wrapper">
        <ButtonsGroupsClients
          activeType={type}
          changeRole={setType}
          role={ROLE}
        />
      </div>
      <SliderWrapper
        startPath={startPath}
        filterData={filterWithRole}
        position={position}
        onClick={value => setPosition(value)}
      />
    </div>
  );
};

const CustomerGroupsWithProps = props => (
  <Consumer>
    {value => <CustomerGroups people={value.people} {...props} />}
  </Consumer>
);

export default CustomerGroupsWithProps;
