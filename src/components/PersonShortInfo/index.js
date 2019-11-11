import React, { useEffect, useState } from "react";

import { withRouter } from "react-router";

import apiFetch from "../../utils/apiFetch";

import "./style.css";

const PersonShortInfo = ({ history, idPerson }) => {
  const [person, setPerson] = useState({});
  useEffect(() => {
    const callData = async () => {
      const [person] = await apiFetch(`/people?uuid=${idPerson}`);
      setPerson(person);
    };
    callData();
  }, [idPerson]);
  const { firstName, lastName, createAt, mainPhoto } = person;
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
};

export default withRouter(PersonShortInfo);
