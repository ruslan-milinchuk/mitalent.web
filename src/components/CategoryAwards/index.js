import React, { Component } from "react";

class CategoryAwards extends Component {
  render() {
    const { infoCategory } = this.props;
    const { awards } = infoCategory[0];
    console.log("infoCategory", infoCategory);
    console.log("awards", awards);
    return (
      <ul className="profile__list-awards">
        {awards.map(item => (
          <li className="profile__item-awards">{item}</li>
        ))}
      </ul>
    );
  }
}
export default CategoryAwards;
