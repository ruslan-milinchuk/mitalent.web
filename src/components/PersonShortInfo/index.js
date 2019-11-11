import React from "react";

import { withRouter } from "react-router";

import "./style.css";

const PersonShortInfo = ({ history, personInfo }) => {
  const { firstName, lastName, createdAt, img, profileId } = personInfo;
  return (
    <div
      onClick={() => {
        history.push(`/profile/${profileId}`);
      }}
      className="person-info"
    >
      <div className="person-info__data">
        <div className="person-info__name">{`${firstName} ${lastName}`}</div>
        <div className="person-info__create-at">
          {new Date(createdAt).toDateString()}
        </div>
      </div>
      <img className="person-info__img" src={`../.${img}`} alt="" />
    </div>
  );
};

export default withRouter(PersonShortInfo);
