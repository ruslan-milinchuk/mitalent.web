import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const OurStoriesArticles = ({ newArticles }) => {
  return newArticles.map(item => (
    <div className="our-stories__item">
      <div
        className="our-stories__img"
        style={{ backgroundImage: "url(" + item.person.img + ")" }}
      >
        <div className="our-stories__img_hover"></div>
      </div>
      <Link
        className="our-stories__info"
        to={`person/${item.person.profileId}`}
      >
        <div className="our-stories__link">
          <h3 className="our-stories__title">
            {item.title}
            <p className="our-stories__description">{item.shortDescription}</p>
          </h3>
          <h3 className="our-stories__date">
            {new Date(item.createAt).toDateString()}
          </h3>
        </div>
      </Link>
    </div>
  ));
};

export default OurStoriesArticles;
