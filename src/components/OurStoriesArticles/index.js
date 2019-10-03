import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const OurStoriesArticles = ({ newArticles, className }) => {
  return newArticles.map((item, index) => (
    <Link
      key={index}
      className={`${className}__item`}
      to={`articles/${item.id}`}
    >
      <div
        className={`${className}__img`}
        style={{ backgroundImage: "url(" + item.person.img + ")" }}
      >
        <div className={`${className}__img_hover`}></div>
      </div>
      <div className={`${className}__info`}>
        <div className={`${className}__link`}>
          <div className={`${className}__type-article`}>
            {item.typeArticle[0]}
          </div>
          <h3 className={`${className}__title`}>
            {item.title}
            <p className={`${className}__description`}>
              {item.shortDescription}
            </p>
          </h3>
          <h3 className={`${className}__date`}>
            {new Date(item.createAt).toDateString()}
          </h3>
        </div>
      </div>
    </Link>
  ));
};

export default OurStoriesArticles;
