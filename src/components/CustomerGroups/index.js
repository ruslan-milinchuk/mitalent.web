import React, { Component } from "react";
import ButtonsGroupsClients from "../ButtonsGroupsClients";
import ClientList from "../ClientList";
import persons from "../../fixtures/persons";
import ArrowLeft from "../../icons/ArrowLeft";
import "./style.css";
import ArrowRight from "../../icons/ArrowRight";
class CustomerGroups extends Component {
  state = {
    profession: "musician",
    arrowBtn: 0,
    data: []
  };

  render() {
    const { profession } = this.state;
    const data = [];
    const role = ["actor", "musician", "comedian", "model"];
    let dateForArrow = [];
    let newData = [];

    persons.map(item => {
      const { firstName, lastName, type, mainFoto } = item;
      const [role] = type;
      const link = "#";

      if (role === profession) {
        data.push({ firstName, lastName, mainFoto, link, type });
      }

      return data;
    });

    if (data.length <= 4) {
      newData = data;
    }

    if (data.length > 4) {
      dateForArrow = data.slice(0, 4);
      newData = data.slice(0, 4);
    }

    if (this.state.data.length !== 0) {
      newData = this.state.data;
    }

    return (
      <div>
        <div className="costumer-groups">
          <ButtonsGroupsClients
            clickBtn={this.clickBtn}
            role={role}
            profession={profession}
          />
        </div>
        <div className="costumer-groups__list">
          <div
            onClick={() => this.clickLeft(dateForArrow, data)}
            className="costumer-groups__btn-arrow"
          >
            <ArrowLeft />
          </div>
          <ClientList data={newData} />
          <div
            onClick={() => this.clickRight(dateForArrow, data)}
            className="costumer-groups__btn-arrow"
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    );
  }

  clickLeft = (newData, data) => {
    const { arrowBtn } = this.state;
    if (data.length <= 4) {
      return;
    }
    if (data.length > 4) {
      if (arrowBtn === 0) {
        return;
      }
      this.setState({ arrowBtn: arrowBtn - 1 });
      newData = data.slice(arrowBtn, arrowBtn + 4);
      return this.setState({ data: newData });
    }
  };

  clickRight = (newData, data) => {
    const { arrowBtn } = this.state;

    if (data.length <= 4) {
      return;
    }

    if (data.length > 4) {
      if (arrowBtn === data.length - 3) {
        return;
      }
      this.setState({ arrowBtn: arrowBtn + 1 });
      newData = data.slice(arrowBtn, arrowBtn + 4);

      return this.setState({ data: newData });
    }
  };

  clickBtn = profession => {
    const btnActive = document.getElementById(profession);
    this.setState({ data: [] });
    this.setState({ arrowBtn: 0 });
    if (btnActive.classList.contains("costumer-groups__btn-active")) {
      return;
    }

    return this.setState({ profession: profession });
  };
}

export default CustomerGroups;
