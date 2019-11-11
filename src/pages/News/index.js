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
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (qtySliceArticle === LARGE_DEVISE && index >= 28) {
      setIndex(0);
    }
  }, [qtySliceArticle, index]);
  const sliceArticle = articles.slice(index, qtySliceArticle + index);
  if (isEmpty(articles)) {
    return <Loading />;
  }

  return (
    <div className="news">
      <NewsArticles
        history={history}
        articles={articles}
        qtySliceArticle={qtySliceArticle}
        index={index}
        setIndex={setIndex}
        sliceArticle={sliceArticle}
      />
      <NewsControl
        articles={articles}
        qtySliceArticle={qtySliceArticle}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

const NewsControl = ({ qtySliceArticle, index, setIndex, articles }) => (
  <div className="news__control-end">
    <div
      className={classNames("news__control-left", {
        "news__control-left-disable": index === 0
      })}
      onClick={() => index - 1 >= 0 && setIndex(index - 1)}
    >
      <ArrowLeft />
      <p className="news__control-name"> prev post</p>
    </div>
    <div
      className={classNames("news__control-right", {
        "news__control-right-disable":
          index + qtySliceArticle === articles.length
      })}
      onClick={() =>
        index + qtySliceArticle < articles.length && setIndex(index + 1)
      }
    >
      <p className="news__control-name">next post </p>
      <ArrowRight />
    </div>
  </div>
);

const NewsWithProps = props => (
  <Consumer>{value => <News articles={value.articles} {...props} />}</Consumer>
);

export default windowSize(NewsWithProps);
