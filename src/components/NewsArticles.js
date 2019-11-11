import React from "react";

import classNames from "classnames";

import { ArrowRight, ArrowLeft } from "../icons/";

const NewsArticles = ({
  history,
  articles = [],
  qtySliceArticle,
  index,
  setIndex,
  sliceArticle
}) => {
  return sliceArticle.map((item, key) => (
    <div
      onClick={() => history.push(`news/${item.uuid}`)}
      key={key}
      className="news__item"
    >
      <div
        className="news__img"
        style={{ backgroundImage: "url(" + item.slider[0] + ")" }}
      >
        <div className="news__img_hover" />
        <div
          onClick={e => {
            e.stopPropagation();
            history.push(`news/${item.uuid}`);
          }}
          className="news__btn"
        >
          <p className="news__btn-name">READ MORE</p> <ArrowRight />
        </div>
        <NewsControl
          articles={articles}
          qtySliceArticle={qtySliceArticle}
          index={index}
          setIndex={setIndex}
        />
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

const NewsControl = ({ articles = [], qtySliceArticle, index, setIndex }) => {
  return (
    <div className="news__control-start">
      <div
        className={classNames(
          { "news__control-left-disable": index === 0 },
          { "news__control-left": true }
        )}
        onClick={function(e) {
          e.stopPropagation();
          return index - 1 >= 0 && setIndex(index - 1);
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
              index + qtySliceArticle === articles.length
          },
          { "news__control-right": true }
        )}
        onClick={function(e) {
          e.stopPropagation();
          return (
            index + qtySliceArticle < articles.length && setIndex(index + 1)
          );
        }}
      >
        <div className="svg">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
