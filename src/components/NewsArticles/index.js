import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";

const NewsArticles = ({ newArticles, clickArrowLeft, clickArrowRight }) => {
  return newArticles.map((item, index) => (
    <Link key={index} className="news__item" to={`articles/${item.id}`}>
      <div
        className="news__img"
        style={{ backgroundImage: "url(" + item.person.img + ")" }}
      >
        <div className="news__img_hover"></div>
        <Link className="news__btn" to={`articles/${item.id}`}>
          <p className="news__btn-name">READ MORE</p> <ArrowRight />
        </Link>
        <div className="news__control-start">
          <div className="news__control-left" onClick={clickArrowLeft}>
            <ArrowLeft />
          </div>
          <div className="news__control-right" onClick={clickArrowRight}>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="news__info">
        <div className="news__link">
          <div className="news__type-article">{item.typeArticle[0]}</div>
          <h3 className="news__title">{item.title}</h3>
          <h3 className="news__date">
            {new Date(item.createAt).toDateString()}
          </h3>
        </div>
      </div>
    </Link>
  ));
};

export default NewsArticles;
