import React, { Component } from "react";
import persons from "../../fixtures/persons";
import ButtonsGroupsClients from "../ButtonsGroupsClients";

import "./style.css";
import SliderWrapper from "../SliderWrapper";

const role = ["actor", "musician", "comedian", "model"];

class CustomerGroups extends Component {
  state = {
    position: 0,
    type: "musician",
    data: [],
    filterData: []
  };

  componentDidMount() {
    const { role } = this.props;
    let { type } = this.state;

    const filterWithRole = persons.filter(item => {
      return item.type.includes(role ? role[0] : type);
    });
    this.setState({ data: persons, filterData: filterWithRole });
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
          filterData={filterData}
          position={position}
          onClick={value => this.setState({ position: value })}
        />
      </div>
    );
  }

  changeRole = value => {
    const { data } = this.state;

    const filterDataWithRole = data.filter(item => {
      const { type } = item;
      return type.includes(value);
    });

    this.setState({ filterData: filterDataWithRole, type: value, position: 0 });
  };
}

export default CustomerGroups;
