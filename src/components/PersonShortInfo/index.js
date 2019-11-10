import React, { Component } from "react";
import { withRouter } from "react-router";

import "./style.css";
import persons from "../../fixtures/persons";

class PersonShortInfo extends Component {
  render() {
    const { history, idPerson } = this.props;
    let neededPerson = persons.filter(item => idPerson === item.id)[0];

    const { firstName, lastName, createAt, mainPhoto } = neededPerson;
    return (
      <div
        onClick={() => {
          history.push(`/profile/${idPerson}`);
        }}
        className="person-info"
      >
        <div className="person-info__data">
          <div className="person-info__name">{`${firstName} ${lastName}`}</div>
          <div className="person-info__create-at">
            {new Date(createAt).toDateString()}
          </div>
        </div>
        <img className="person-info__img" src={`../.${mainPhoto}`} alt="" />
      </div>
    );
  }
}

export default withRouter(PersonShortInfo);
