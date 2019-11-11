import React from "react";

import { withRouter } from "react-router";

import { ArrowRight } from "../icons/";

const PersonCardList = ({ data, history, startPath = "" }) =>
  data.map((item, index) => (
    <div
      key={index}
      className="client__card"
      onClick={() => history.push(`/profile/${item.uuid}`)}
    >
      <img src={`${startPath}${item.mainPhoto}`} alt="client" />
      <h3 className="client__name">
        {item.firstName} {item.lastName}
      </h3>
      <h4 className="client__role">{item.type}</h4>
      <span className="client__link">
        <ArrowRight />
      </span>
    </div>
  ));

export default withRouter(PersonCardList);
