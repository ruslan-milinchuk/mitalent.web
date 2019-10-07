import React, { Component } from "react";
import articles from "../../fixtures/articles";
import PersonShortInfo from "../../components/PersonShortInfo";

import "./style.css";
import RandomArticle from "../../components/RandomArticle";
class Article extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { history } = this.props;
    const { pathname } = history.location;
    const idArticle = pathname.split("/")[2];
    const neededArticle = [];
    articles.map(item => {
      if (idArticle === item.id) {
        neededArticle.push(item);
      }
    });
    const {
      title,
      typeArticle,
      shortDescription,
      slider,
      quoute,
      longDescription,
      additionalTitle,
      additionalLongDescription
    } = neededArticle[0];
    const allQuoute = quoute.map((item, index) => <p key={index}>{item}</p>);
    return (
      <div className="article-info">
        <div className="article-info__main">
          <PersonShortInfo articles={articles} />
          <div className="article-info__main-info">
            <h3 className="article-info__title">{title}</h3>
            <p className="article-info__type-article">{typeArticle[0]}</p>
            <p className="article-info__subtitle">{shortDescription}</p>
          </div>
        </div>
        <div className="article-info__first-img_hidden">
          <img className="article-info__first-img" src={slider[0]} alt="" />
        </div>
        <div className="article-info__short-description-wrapp">
          <PersonShortInfo articles={articles} />
          <div className="article-info__short-description">
            <div className="article-info__quote">{allQuoute}</div>
            <div className="article-info__description">{longDescription}</div>
          </div>
        </div>
        <div className="article-info__second-img">
          <div
            className="article-info__second-img-paramount"
            style={{ backgroundImage: "url(" + slider[1] + ")" }}
          />
          <div
            className="article-info__second-img-minor"
            style={{ backgroundImage: "url(" + slider[2] + ")" }}
          />
        </div>
        <div className="article-info__additional-info">
          <h4 className="article-info__additional-title">{additionalTitle}</h4>
          <div className="article-info__additional-description">
            {additionalLongDescription}
          </div>
        </div>
        <RandomArticle articles={articles} />
      </div>
    );
  }
}

export default Article;
