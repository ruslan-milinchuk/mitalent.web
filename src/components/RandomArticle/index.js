import React from "react";
import { withRouter } from "react-router";

import { Consumer } from "../Preload";
import Loading from "../Loading";

import { isEmpty } from "../../utils/isEmpty";
import { randomNumbList } from "../../utils/randomNumbList";

import "./style.css";

const RandomArticle = ({ articles, history, qtyRandomNumbers }) => {
  if (isEmpty(articles)) {
    return <Loading />;
  }

  const articlesRandomList = randomNumbList(articles.length, qtyRandomNumbers);

  const articleList = articles.filter(
    (item, index) => articlesRandomList.indexOf(index) !== -1
  );

  return (
    <div className="random">
      {articleList.map(({ slider = [], title, createAt, uuid }, index) => (
        <div
          onClick={() => {
            history.push(`/news/${uuid}`);
          }}
          key={index}
          className="random__item"
        >
          <div
            className="random__img"
            style={{ backgroundImage: `url("${slider[1]}")` }}
          />
          <div className="random__info">
            <div className="random__title">{title}</div>
            <div className="random__date">
              {new Date(createAt).toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const randomNumb = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const RandomArticleWithProps = props => (
  <Consumer>
    {value => <RandomArticle articles={value.articles} {...props} />}
  </Consumer>
);

export default withRouter(RandomArticleWithProps);
