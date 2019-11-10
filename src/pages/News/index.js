import React, { useState, useEffect } from "react";

import windowSize from "react-window-size";
import classNames from "classnames";

import { Consumer } from "../../components/Preload";
import Loading from "../../components/Loading";
import NewsArticles from "../../components/NewsArticles";

import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";

import { isEmpty } from "../../utils/isEmpty";

import "./style.css";

const SMALL_WIDTH = 548;
const LARGE_DEVISE = 11;
const SMALL_DEVISE = 5;

const News = ({ windowWidth, articles, history }) => {
  const qtySliceArticle =
    SMALL_WIDTH < windowWidth ? LARGE_DEVISE : SMALL_DEVISE;
  const [activeArticleList, setActiveArticleList] = useState({
    articleList: [],
    count: 0
  });

  useEffect(() => {
    const callData = () => {
      const sliceArticle = articles.slice(0, qtySliceArticle);
      setActiveArticleList({ ...activeArticleList, articleList: sliceArticle });
    };
    callData();
  }, [articles]);

  useEffect(() => {
    const callData = () => {
      const sliceArticle = articles.slice(0, qtySliceArticle);
      setActiveArticleList({
        ...activeArticleList,
        articleList: sliceArticle,
        count: 0
      });
    };
    callData();
  }, [qtySliceArticle]);

  if (isEmpty(articles)) {
    return <Loading />;
  }

  return (
    <div className="news">
      <NewsArticles
        history={history}
        articles={articles}
        qtySliceArticle={qtySliceArticle}
        activeArticleList={activeArticleList}
        setActiveArticleList={setActiveArticleList}
      />
      <NewsControl
        articles={articles}
        qtySliceArticle={qtySliceArticle}
        activeArticleList={activeArticleList}
        setActiveArticleList={setActiveArticleList}
      />
    </div>
  );
};

const NewsControl = ({
  qtySliceArticle,
  activeArticleList,
  setActiveArticleList,
  articles
}) => {
  const { articleList = [], count } = activeArticleList;
  return (
    <div className="news__control-end">
      <div
        className={classNames("news__control-left", {
          "news__control-left-disable": count === 0
        })}
        onClick={() =>
          count - 1 >= 0
            ? setActiveArticleList({
                articleList: articles.slice(
                  count - 1,
                  count + qtySliceArticle - 1
                ),
                count: count - 1
              })
            : articleList
        }
      >
        <ArrowLeft />
        <p className="news__control-name"> prev post</p>
      </div>
      <div
        className={classNames("news__control-right", {
          "news__control-right-disable":
            count + qtySliceArticle === articles.length
        })}
        onClick={() =>
          count + qtySliceArticle < articles.length
            ? setActiveArticleList({
                articleList: articles.slice(
                  count + 1,
                  count + (qtySliceArticle + 1)
                ),
                count: count + 1
              })
            : articleList
        }
      >
        <p className="news__control-name">next post </p>
        <ArrowRight />
      </div>
    </div>
  );
};

const NewsWithProps = props => (
  <Consumer>{value => <News articles={value.articles} {...props} />}</Consumer>
);

export default windowSize(NewsWithProps);
