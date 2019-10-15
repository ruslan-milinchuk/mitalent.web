import React, { Component } from "react";
import persons from "../../fixtures/persons";
import ButtonsGroupsClients from "../ButtonsGroupsClients";

import "./style.css";
import SliderWrapper from "../SliderWrapper";

const role = ["actor", "musician", "comedian", "model"];
const STANDARD_ROLE_LENGTH = 4;
class CustomerGroups extends Component {
  state = {
    position: 0,
    type: "musician",
    allType: "",
    data: [],
    filterData: []
  };

  componentDidMount() {
    const { defaultRole, addRole } = this.props;
    if (addRole) {
      this.setState({
        data: persons,
        filterData: persons,
        type: addRole,
        allType: addRole
      });
      if (role.indexOf(addRole) === -1) {
        role.unshift(addRole);
      }
    }
    let { type } = this.state;

    if (!addRole) {
      const filterWithRole = persons.filter(item => {
        return item.type.includes(defaultRole ? defaultRole[0] : type);
      });
      this.setState({ data: persons, filterData: filterWithRole });
    }

    if (role.length > STANDARD_ROLE_LENGTH && addRole === undefined) {
      role.splice(0, 1);
    }
  }

  render() {
    const { startPath } = this.props;
    const { type, filterData, position } = this.state;
    return (
      <div className="customer-groups">
        <div className="customer-groups__btn-wrapper">
          <ButtonsGroupsClients
            activeType={type}
            changeRole={this.changeRole}
            role={role}
          />
        </div>
        <SliderWrapper
          startPath={startPath}
          dataLength={filterData.length}
          filterData={filterData}
          position={position}
          onClick={value => this.setState({ position: value })}
        />
      </div>
    );
  }

  changeRole = value => {
    const { data, allType } = this.state;

    const filterDataWithRole = data.filter(item => {
      const { type } = item;
      return type.includes(value);
    });

    if (value === allType) {
      this.setState({ filterData: persons, type: allType, position: 0 });
    }

    if (value !== allType) {
      this.setState({
        filterData: filterDataWithRole,
        type: value,
        position: 0
      });
    }
  };
}

export default CustomerGroups;
