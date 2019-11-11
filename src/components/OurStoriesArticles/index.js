import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

const OurStoriesArticles = ({ sortArticlesList }) =>
  sortArticlesList.map(item => (
    <Link className="our-stories__item" to={`news/${item.uuid}`}>
      <div
        className="our-stories__img"
        style={{ backgroundImage: "url(" + item.slider[1] + ")" }}
      >
        <div className="our-stories__img_hover" />
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

export default OurStoriesArticles;
