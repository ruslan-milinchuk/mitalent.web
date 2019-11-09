import React, { Component } from "react";
import { withRouter } from "react-router";

import "./style.css";
import { Consumer } from "../Preload";

class PersonShortInfo extends Component {
  render() {
    const { history, idPerson, people } = this.props;
    let neededPerson = people.filter(item => idPerson === item.uuid)[0];

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

const PersonShortInfoWithProps = props => (
  <Consumer>
    {value => <PersonShortInfo people={value.people} {...props} />}
  </Consumer>
);

export default withRouter(PersonShortInfoWithProps);
