import React from "react";
import ArrowRight from "../../icons/ArrowRight";

const PersonCardList = ({ data }) =>
  data.map((item, index) => (
    <div key={index} className="client__card">
      <img src={item.mainFoto} alt="client image" />
      <h3 className="client__name">
        {item.firstName} {item.lastName}
      </h3>
      <h4 className="client__role">{item.type}</h4>
      <a className="client__link" href={item.link}>
        <ArrowRight />
      </a>
    </div>
  ));

export default PersonCardList;
