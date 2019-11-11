import React from "react";

import PersonCardList from "../PersonCardList";

import "./style.css";

const ClientList = ({ startPath, data }) => (
  <div className="client__list">
    <PersonCardList data={data} startPath={startPath} />
  </div>
);

export default ClientList;
