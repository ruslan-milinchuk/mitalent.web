import React from "react";

import { withRouter } from "react-router";

import Loading from "../Loading";

import "./style.css";

const PersonShortInfo = ({ history, personInfo }) => {
  const { firstName, lastName, createdAt, mainPhoto, uuid } = personInfo;
  if (!firstName || !lastName || !createdAt) {
    return (
      <div className="person-info">
        <Loading className="person-info" />
      </div>
    );
  }
  return (
    <div
      onClick={() => {
        history.push(`/profile/${uuid}`);
      }}
      className="person-info"
    >
      <div className="person-info__data">
        <div className="person-info__name">{`${firstName} ${lastName}`}</div>
        <div className="person-info__create-at">
          {new Date(createdAt).toDateString()}
        </div>
      </div>
      <img className="person-info__img" src={`../.${mainPhoto}`} alt="" />
    </div>
  );
};

export default withRouter(PersonShortInfo);
