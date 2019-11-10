import React from "react";

import classNames from "classnames";

import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";

const NewsArticles = ({
  history,
  articles = [],
  qtySliceArticle,
  setActiveArticleList,
  activeArticleList
}) => {
  const { articleList = [] } = activeArticleList;

  return articleList.map((item, index) => (
    <div
      onClick={() => history.push(`news/${item.uuid}`)}
      key={index}
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
          setActiveArticleList={setActiveArticleList}
          activeArticleList={activeArticleList}
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

const NewsControl = ({
  articles = [],
  qtySliceArticle,
  setActiveArticleList,
  activeArticleList
}) => {
  const { articleList = [], count } = activeArticleList;

  return (
    <div className="news__control-start">
      <div
        className={classNames(
          { "news__control-left-disable": count === 0 },
          { "news__control-left": true }
        )}
        onClick={function(e) {
          e.stopPropagation();
          return count - 1 >= 0
            ? setActiveArticleList({
                articleList: articles.slice(
                  count - 1,
                  count + qtySliceArticle - 1
                ),
                count: count - 1
              })
            : articleList;
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
              count + qtySliceArticle === articles.length
          },
          { "news__control-right": true }
        )}
        onClick={function(e) {
          e.stopPropagation();
          return count + qtySliceArticle < articles.length
            ? setActiveArticleList({
                articleList: articles.slice(
                  count + 1,
                  count + (qtySliceArticle + 1)
                ),
                count: count + 1
              })
            : articleList;
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
