import React from "react";
import Star from "../../icons/Star";

const CategoryProfile = ({ infoCategory }) => {
  const { shortDescription, mainDescription, awards } = infoCategory;
  const lastAwards = awards[awards.length - 1];
  return (
    <div className="profile__description">
      <p className="profile__short-description">{shortDescription}</p>
      <div className="profile__last-awards">
        <div className="profile__award-icon">
          <Star />
        </div>
        {lastAwards}
      </div>
      <p className="profile__main-description">{mainDescription}</p>
    </div>
  );
};

export default CategoryProfile;
