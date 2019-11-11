import React from "react";

import { withRouter } from "react-router";

import ArrowRight from "../../icons/ArrowRight";

const PersonCardList = ({ data, history, startPath }) => {
  let startPathCheck = "";
  if (startPath) {
    startPathCheck = startPath;
  }

  return data.map((item, index) => (
    <div
      key={index}
      className="client__card"
      onClick={() => history.push(`/profile/${item.uuid}`)}
    >
      <img src={`${startPathCheck}${item.mainPhoto}`} alt="client image" />
      <h3 className="client__name">
        {item.firstName} {item.lastName}
      </h3>
      <h4 className="client__role">{item.type}</h4>
      <a
        onClick={() => history.push(`/profile/${item.uuid}`)}
        className="client__link"
        href={item.link}
        target="__blank"
      >
        <ArrowRight />
      </a>
    </div>
  ));
};

export default withRouter(PersonCardList);
