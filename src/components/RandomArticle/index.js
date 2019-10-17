import React, { Component } from "react";
import "./style.css";
import { withRouter } from "react-router";

class RandomArticle extends Component {
  render() {
    const { articles, history, newArticleLength } = this.props;
    const newArticles = [];
    for (let i = 0; i < newArticleLength; i++) {
      newArticles.push(articles[this.randomNumb(0, articles.length - 1)]);
    }

    return (
      <div className="random">
        {newArticles.map(({ slider, title, createAt, id }, index) => (
          <div
            onClick={e => {
              history.push(`/news/${id}`);
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
  }

  randomNumb = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
}

export default withRouter(RandomArticle);
