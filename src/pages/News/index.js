import React, { Component } from "react";
import OurStoriesArticles from "../../components/OurStoriesArticles";
import articles from "../../fixtures/articles";
import "./style.css";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import NewsArticles from "../../components/NewsArticles";

class News extends Component {
  state = {
    newArticles: [],
    articlesLength: 0,
    count: 0
  };

  componentDidMount() {
    let newArticles = articles.slice(0, 11);
    this.setState({
      newArticles: newArticles,
      articlesLength: articles.length
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { count } = this.state;
    if (this.state.count < nextState.count) {
      const newArticles = articles.slice(count + 1, count + 12);
      return this.setState({ newArticles: newArticles });
    }

    if (this.state.count > nextState.count) {
      const newArticles = articles.slice(count - 1, count + 10);
      return this.setState({ newArticles: newArticles });
    }

    return this.state.count === nextState.count;
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
    const { count } = this.state;
    console.log("left");
    if (count - 1 >= 0) {
      return this.setState({ count: count - 1 });
    }
  };
  clickArrowRight = () => {
    const { count, articlesLength } = this.state;
    if (count + 11 < articlesLength) {
      return this.setState({ count: count + 1 });
    }
  };
}

export default News;
