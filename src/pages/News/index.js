import React, { Component } from "react";
import windowSize from "react-window-size";

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
    count: 0,
    sliceArticle: 0,
		smallMonitor : 5,
		bigMonitor : 11
  };

  componentDidMount() {
    const { articlesList } = this.state;
    let expansionMonitor = 0;
    this.props.windowWidth <= 548
      ? (expansionMonitor = 5)
      : (expansionMonitor = 11);
    let newArticles = articlesList.slice(0, expansionMonitor);
    this.setState({
      newArticles: newArticles,
      articlesLength: articlesList.length,
      sliceArticle: expansionMonitor
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.windowWidth !== nextProps.windowWidth) {
      this.changeState();
    }

    return this.props.windowWidth === nextProps.windowWidth;
  }

  render() {
    const { newArticles, count, articlesLength, sliceArticle, smallMonitor, bigMonitor } = this.state;

    return (
      <div className="news">
        <NewsArticles
          newArticles={newArticles}
          count={count}
          articlesLength={articlesLength}
				  sliceArticle={sliceArticle}
					smallMonitor={smallMonitor}
					bigMonitor={bigMonitor}
          clickArrowLeft={this.clickArrowLeft}
          clickArrowRight={this.clickArrowRight}
        />
        <div className="news__control-end">
          <div
            className={
              count === 0
                ? "news__control-left news__control-left-disable"
                : "news__control-left"
            }
            onClick={this.clickArrowLeft}
          >
            <ArrowLeft />
            <p className="news__control-name"> prev post</p>
          </div>
          <div
            className={
              count + sliceArticle === articlesLength
                ? "news__control-right news__control-right-disable"
                : "news__control-right"
            }
            onClick={this.clickArrowRight}
          >
            <p className="news__control-name">next post </p>
            <ArrowRight />
          </div>
        </div>
      </div>
    );
  }
  clickArrowLeft = () => {
    const { articlesList, count, sliceArticle } = this.state;
    if (count - 1 >= 0) {
      const newArticles = articlesList.slice(
        count - 1,
        count + sliceArticle - 1
      );
      return this.setState({ newArticles: newArticles, count: count - 1 });
    }
  };
  clickArrowRight = () => {
    const { articlesList, count, articlesLength, sliceArticle } = this.state;
    if (count + sliceArticle < articlesLength) {
      const newArticles = articlesList.slice(
        count + 1,
        count + (sliceArticle + 1)
      );
      return this.setState({ newArticles: newArticles, count: count + 1 });
    }
  };

  changeState = () => {
    const { articlesList, newArticles, smallMonitor, bigMonitor } = this.state;

    if (1 < this.props.windowWidth && this.props.windowWidth <= 548) {
      if (smallMonitor === newArticles.length) {
        return;
      }
      let newListArticles = articlesList.slice(0, smallMonitor);
      return this.setState({
        sliceArticle: smallMonitor,
        newArticles: newListArticles,
        count: 0
      });
    }

    if (548 < this.props.windowWidth) {
      if (bigMonitor === newArticles.length) {
        return;
      }
      let newListArticles = articlesList.slice(0, bigMonitor);
      return this.setState({
        sliceArticle: bigMonitor,
        newArticles: newListArticles,
        count: 0
      });
    }
  };
}

export default windowSize(News);
