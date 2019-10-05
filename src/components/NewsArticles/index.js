import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";

const NewsArticles = ({
  newArticles,
  count,
  articlesLength,
  sliceArticle,
  smallMonitor,
  bigMonitor,
  clickArrowLeft,
  clickArrowRight
}) => {
  return newArticles.map((item, index) => (
    <Link
      onClick={
        sliceArticle !== smallMonitor
          ? sliceArticle === smallMonitor
            ? (sliceArticle - bigMonitor === index ||
                sliceArticle - smallMonitor === index) &&
              "event.preventDefault()"
            : (sliceArticle - bigMonitor === index ||
                sliceArticle - bigMonitor === index) &&
              "event.preventDefault()"
          : null
      }
      key={index}
      className="news__item"
      to={`articles/${item.id}`}
    >
      {console.log(
        "(sliceArticle - smallMonitor === index )",
        sliceArticle - bigMonitor === index
      )}
      {console.log("sliceArticle", sliceArticle)}
      {console.log("smallMonitor", smallMonitor)}
      <div
        className="news__img"
        style={{ backgroundImage: "url(" + item.slider[0] + ")" }}
      >
        <div className="news__img_hover"></div>
        <Link className="news__btn" to={`articles/${item.id}`}>
          <p className="news__btn-name">READ MORE</p> <ArrowRight />
        </Link>
        <div className="news__control-start">
          <div
            className={
              count === 0
                ? "news__control-left news__control-left-disable"
                : "news__control-left"
            }
            onClick={clickArrowLeft}
          >
            <div className="svg">
              <ArrowLeft />
            </div>
          </div>
          <div
            className={
              count + sliceArticle === articlesLength
                ? "news__control-right news__control-right-disable"
                : "news__control-right"
            }
            onClick={clickArrowRight}
          >
            <div className="svg">
              <ArrowRight />
            </div>
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
