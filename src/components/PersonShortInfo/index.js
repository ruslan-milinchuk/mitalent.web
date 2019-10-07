import React, { Component } from "react";
import "./style.css";
class PersonShortInfo extends Component {
  render() {
    const { articles } = this.props;
    console.log("articles  ===", articles);
    const { firstName, lastName, img } = articles[0].person;
    const { createAt } = articles[0];
    return (
      <div className="person-info">
        <div className="person-info__data">
          <div className="person-info__name">{`${firstName} ${lastName}`}</div>
          <div className="person-info__create-at">
            {new Date(createAt).toDateString()}
          </div>
        </div>
        <img className="person-info__img" src={img} alt="" />
      </div>
    );
  }
}

export default PersonShortInfo;
