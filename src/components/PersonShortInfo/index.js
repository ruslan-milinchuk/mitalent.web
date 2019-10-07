import React, { Component } from "react";
import { withRouter } from "react-router";

import "./style.css";
import articles from "../../fixtures/articles";
class PersonShortInfo extends Component {
  render() {
    const { articles, history } = this.props;
    const { firstName, lastName, img } = articles[0].person;
    const { createAt } = articles[0];
    const { pathname } = history.location;
    const idArticle = pathname.split("/")[2];
    const idPerson = [];
    articles.map(item => {
      if (idArticle === item.id) {
        idPerson.push(item.person.profileId);
      }
    });
    return (
      <div
        onClick={e => {
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
        <img className="person-info__img" src={img} alt="" />
      </div>
    );
  }
}

export default withRouter(PersonShortInfo);
