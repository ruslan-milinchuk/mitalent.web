import React from "react";

const PersonCardList = ({ data }) => {
  console.log("data PersonCardList", data);

  return data.map((item, index) => (
    <div key={index} className="client__card">
      <img src={item.img} alt="client image" />
      <h3 className="client__name">
        {item.name[0]} {item.name[1]}
      </h3>
      <h4 className="client__role">{item.role}</h4>
      <a className="client__link" href={item.link}></a>
    </div>
  ));
};
export default PersonCardList;
