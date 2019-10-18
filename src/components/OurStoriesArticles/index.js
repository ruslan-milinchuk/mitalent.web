import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const OurStoriesArticles = ({ newArticles }) => {
  return newArticles.map(item => (
    <Link className="our-stories__item" to={`news/${item.id}`}>
      <div
        className="our-stories__img"
        style={{ backgroundImage: "url(" + item.slider[1] + ")" }}
      >
        <div className="our-stories__img_hover"/>
      </div>
      <div className="our-stories__info">
        <div className="our-stories__link">
          <h3 className="our-stories__title">
            {item.title}
            <p className="our-stories__description">{item.shortDescription}</p>
          </h3>
          <h3 className="our-stories__date">
            {new Date(item.createAt).toDateString()}
          </h3>
        </div>
      </div>
    </Link>
  ));
};

export default OurStoriesArticles;
