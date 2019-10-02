import React from "react";
import "./style.css";

const OurStoriesArticles = ({ newArticles }) => {
  return newArticles.map(item => (
    <div className="our-stories__item">
      <div
        className="our-stories__img"
        style={{ backgroundImage: "url(" + item.person.img + ")" }}
      />
      <div className="our-stories__info">
        <h3 className="our-stories__title">{item.title}</h3>
        <h3 className="our-stories__date">
          {new Date(item.createAt).toDateString()}
        </h3>
      </div>
    </div>
  ));
};

export default OurStoriesArticles;
