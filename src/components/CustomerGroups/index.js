import React, { Component } from "react";
import persons from "../../fixtures/persons";
import ButtonsGroupsClients from "../ButtonsGroupsClients";

import "./style.css";
import SliderWrapper from "../SliderWrapper";

const ALL_TYPES = "all";

class CustomerGroups extends Component {
  state = {
    position: 0,
    type: "",
    data: [],
    filterData: []
  };

  componentDidMount() {
    const { defaultRole } = this.props;

    let filterWithRole = null;
    this.isAllRole(defaultRole)
      ? (filterWithRole = persons)
      : (filterWithRole = persons.filter(item => {
          return item.type.includes(defaultRole[0]);
        }));
    this.setState({
      data: persons,
      filterData: filterWithRole,
      type: defaultRole[0]
    });
    if (defaultRole[0] === ALL_TYPES) {
      this.changeRole(defaultRole[0]);
    }
  }

  render() {
    const { startPath, role } = this.props;
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
    const { data } = this.state;

    const filterDataWithRole = data.filter(item => {
      const { type } = item;
      return type.includes(value);
    });

    if (value === ALL_TYPES) {
      this.setState({ filterData: persons, type: ALL_TYPES, position: 0 });
    }

    if (value !== ALL_TYPES) {
      this.setState({
        filterData: filterDataWithRole,
        type: value,
        position: 0
      });
    }
  };

  isAllRole = defaultRole => {
    persons.map(item => {
      return item.type[0] === defaultRole[0];
    });
  };
}

export default CustomerGroups;
