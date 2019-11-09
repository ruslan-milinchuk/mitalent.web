import React, { Component } from "react";
import ButtonsGroupsClients from "../ButtonsGroupsClients";

import "./style.css";
import SliderWrapper from "../SliderWrapper";
import { Consumer } from "../Preload";

const role = ["actor", "musician", "comedian", "model"];

class CustomerGroups extends Component {
  state = {
    position: 0,
    type: "musician",
    data: [],
    filterData: []
  };

  componentDidMount() {
    const { role, people } = this.props;
    let { type } = this.state;
    const filterWithRole = people.filter(item => {
      return item.type.includes(role ? role[0] : type);
    });
    this.setState({ data: people, filterData: filterWithRole });
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
    const { data } = this.state;

    const filterDataWithRole = data.filter(item => {
      const { type } = item;
      return type.includes(value);
    });

    this.setState({ filterData: filterDataWithRole, type: value, position: 0 });
  };
}

const CustomerGroupsWithProps = props => (
  <Consumer>
    {value => <CustomerGroups people={value.people} {...props} />}
  </Consumer>
);

export default CustomerGroupsWithProps;
