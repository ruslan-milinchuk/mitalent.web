import React, { Component } from "react";
import ReactResizeDetector from "react-resize-detector";
import { withResizeDetector } from "react-resize-detector";

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
    smallMonitor: 5,
    bigMonitor: 11,
    smallWidth: 548
  };

  componentDidMount() {
    const { articlesList, bigMonitor, smallMonitor, smallWidth } = this.state;
    const { width } = this.props;
    let newArticles = articlesList.slice(
      0,
      width <= smallWidth ? smallMonitor : bigMonitor
    );
    this.setState({
      newArticles,
      articlesLength: articlesList.length,
      sliceArticle: width <= smallWidth ? smallMonitor : bigMonitor
    });
  }

  render() {
    const { newArticles, count, articlesLength, sliceArticle } = this.state;
    const { history } = this.props;

    return (
      <div className="news">
        <NewsArticles
          history={history}
          newArticles={newArticles}
          count={count}
          articlesLength={articlesLength}
          sliceArticle={sliceArticle}
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
        <ReactResizeDetector handleWidth onResize={this.onResize()} />
      </div>
    );
  }
  clickArrowLeft = () => {
    const { articlesList, count, sliceArticle } = this.state;
    if (count - 1 >= 0) {
      return this.setState({
        newArticles: articlesList.slice(count - 1, count + sliceArticle - 1),
        count: count - 1
      });
    }
  };

  clickArrowRight = () => {
    const { articlesList, count, articlesLength, sliceArticle } = this.state;
    if (count + sliceArticle < articlesLength) {
      return this.setState({
        newArticles: articlesList.slice(count + 1, count + (sliceArticle + 1)),
        count: count + 1
      });
    }
  };

  changeState = () => {
    const {
      articlesList,
      newArticles,
      smallMonitor,
      bigMonitor,
      smallWidth
    } = this.state;

    const { width } = this.props;

    if (1 < width && width <= smallWidth) {
      if (smallMonitor === newArticles.length) {
        return;
      }
      return this.setState({
        sliceArticle: smallMonitor,
        newArticles: articlesList.slice(0, smallMonitor),
        count: 0
      });
    }

    if (smallWidth < width) {
      if (bigMonitor === newArticles.length) {
        return;
      }
      return this.setState({
        sliceArticle: bigMonitor,
        newArticles: articlesList.slice(0, bigMonitor),
        count: 0
      });
    }
  };

  onResize = () => {
    this.changeState();
  };
}

export default withResizeDetector(News);
