import React from "react";
import PersonCardList from "../PersonCardList";
import "./style.css";

const ClientList = ({ data }) => {
  return (
    <div  className="client__list" >
      <PersonCardList data={data} />
    </div>
  );
};
export default ClientList;
