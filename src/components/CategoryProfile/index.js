import React, { Component } from "react";
import Star from "../../icons/Star";

class CategoryProfile extends Component {
  render() {
    const { infoCategory } = this.props;
    const { shortDescription, mainDescription, awards } = infoCategory[0];
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
  }
}
export default CategoryProfile;
