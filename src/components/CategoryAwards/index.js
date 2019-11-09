import React from "react";

const CategoryAwards = ({ infoCategory }) => {
  const { awards } = infoCategory;
  return (
    <ul className="profile__list-awards">
      {awards.map(item => (
        <li className="profile__item-awards">{item}</li>
      ))}
    </ul>
  );
};

export default CategoryAwards;
