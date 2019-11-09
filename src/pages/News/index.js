import React, { Component } from "react";
import ReactResizeDetector, { withResizeDetector } from "react-resize-detector";
import classNames from "classnames";

import "./style.css";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import NewsArticles from "../../components/NewsArticles";
import apiFetch from "../../utils/apiFetch";
import Loading from "../../components/Loading";
import { Consumer } from "../../components/Preload";

class News extends Component {
  state = {
    articlesList: [],
    newArticles: [],
    articlesLength: 0,
    count: 0,
    sliceArticle: 0,
    smallMonitor: 5,
    bigMonitor: 11,
    smallWidth: 548
  };

  async componentDidMount() {
    const articles = await apiFetch("/articles");
    const { bigMonitor, smallMonitor, smallWidth } = this.state;
    const { width } = this.props;
    let newArticles = articles.slice(
      0,
      width <= smallWidth ? smallMonitor : bigMonitor
    );
    this.setState({
      newArticles,
      articlesLength: articles.length,
      sliceArticle: width <= smallWidth ? smallMonitor : bigMonitor,
      articlesList: articles
    });
  }

  render() {
    const { newArticles, count, articlesLength, sliceArticle } = this.state;
    const { history, articles, people } = this.props;
    if (!articles || !people) {
      return <Loading />;
    }
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
            className={classNames(
              { "news__control-left-disable": count === 0 },
              { "news__control-left": true }
            )}
            onClick={this.clickArrowLeft}
          >
            <ArrowLeft />
            <p className="news__control-name"> prev post</p>
          </div>
          <div
            className={classNames(
              {
                "news__control-right-disable":
                  count + sliceArticle === articlesLength
              },
              { "news__control-right": true }
            )}
            onClick={this.clickArrowRight}
          >
            <p className="news__control-name">next post </p>
            <ArrowRight />
          </div>
        </div>
        <ReactResizeDetector handleWidth onResize={() => this.onResize()} />
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

  updateArticleState = () => {
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
    this.updateArticleState();
  };
}

const NewsWithProps = props => (
  <Consumer>
    {value => (
      <News articles={value.articles} people={value.people} {...props} />
    )}
  </Consumer>
);

export default withResizeDetector(NewsWithProps);
