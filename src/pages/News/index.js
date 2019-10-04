import React, { Component } from "react";
import articles from "../../fixtures/articles";
import "./style.css";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import NewsArticles from "../../components/NewsArticles";

class News extends Component {
  state = {
    articlesList: articles,
    newArticles: [],
    articlesLength: 0,
    count: 0
  };

  componentDidMount() {
    const { articlesList } = this.state;
    let newArticles = articlesList.slice(0, 11);
    this.setState({
      newArticles: newArticles,
      articlesLength: articlesList.length
    });
  }

  render() {
    const { newArticles } = this.state;

    return (
      <div className="news">
        <NewsArticles
          newArticles={newArticles}
          clickArrowLeft={this.clickArrowLeft}
          clickArrowRight={this.clickArrowRight}
        />
        <div className="news__control-end">
          <div className="news__control-left" onClick={this.clickArrowLeft}>
            <ArrowLeft />
            <p className="news__control-name"> prev post</p>
          </div>
          <div className="news__control-right" onClick={this.clickArrowRight}>
            <p className="news__control-name">next post </p>
            <ArrowRight />
          </div>
        </div>
      </div>
    );
  }
  clickArrowLeft = () => {
    const { articlesList } = this.state;
    const { count } = this.state;
    if (count - 1 >= 0) {
      const newArticles = articlesList.slice(count - 1, count + 10);
      return this.setState({ newArticles: newArticles, count: count - 1 });
    }
  };
  clickArrowRight = () => {
    const { articlesList } = this.state;
    const { count, articlesLength } = this.state;
    if (count + 11 < articlesLength) {
      const newArticles = articlesList.slice(count + 1, count + 12);
      return this.setState({ newArticles: newArticles, count: count + 1 });
    }
  };
}

export default News;
