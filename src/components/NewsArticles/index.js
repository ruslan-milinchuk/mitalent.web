import React from "react";
import classNames from "classnames";

import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";

const NewsArticles = ({
  history,
  newArticles,
  count,
  articlesLength,
  sliceArticle,
  clickArrowLeft,
  clickArrowRight
}) => {
  return newArticles.map((item, index) => (
    <div
      onClick={() => history.push(`news/${item.uuid}`)}
      key={index}
      className="news__item"
    >
      <div
        className="news__img"
        style={{ backgroundImage: "url(" + item.slider[0] + ")" }}
      >
        <div className="news__img_hover"/>
        <div
          onClick={e => {
            e.stopPropagation();
            history.push(`news/${item.id}`);
          }}
          className="news__btn"
        >
          <p className="news__btn-name">READ MORE</p> <ArrowRight />
        </div>
        <div className="news__control-start">
          <div
            className={classNames(
              { "news__control-left-disable": count === 0 },
              { "news__control-left": true }
            )}
            onClick={e => {
              e.stopPropagation();
              clickArrowLeft();
            }}
          >
            <div className="svg">
              <ArrowLeft />
            </div>
          </div>
          <div
            className={classNames(
              {
                "news__control-right-disable":
                  count + sliceArticle === articlesLength
              },
              { "news__control-right": true }
            )}
            onClick={e => {
              e.stopPropagation();
              clickArrowRight();
            }}
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
    </div>
  ));
};

export default NewsArticles;
