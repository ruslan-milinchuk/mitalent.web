import React, { Component } from "react";

class CategoryAwards extends Component {
  render() {
    const { infoCategory } = this.props;
    const { awards } = infoCategory;
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
