import React, { useState, useEffect } from "react";

import PersonShortInfo from "../../components/PersonShortInfo";
import RandomArticle from "../../components/RandomArticle";
import Loading from "../../components/Loading";

import { isEmpty } from "../../utils/isEmpty";
import apiFetch from "../../utils/apiFetch";

import "./style.css";

const Article = ({ history }) => {
  const [article, setArticle] = useState({});
  const { pathname } = history.location;
  const idArticle = pathname.split("/")[2];
  useEffect(() => {
    const callData = async () => {
      const [article] = await apiFetch(`/articles?uuid=${idArticle}`);
      setArticle(article);
    };
    callData();
  }, [idArticle]);

  if (isEmpty(article)) {
    return <Loading />;
  }
  const {
    title,
    typeArticle = [],
    shortDescription,
    slider = [],
    quote = [],
    longDescription,
    additionalTitle,
    additionalLongDescription,
    person
  } = article;
  return (
    <div className="article-info">
      <div className="article-info__main">
        <PersonShortInfo personInfo={person} />
        <div className="article-info__main-info">
          <h3 className="article-info__title">{title}</h3>
          <div className="person__short-info_none">
            <PersonShortInfo personInfo={person} />
          </div>
          <p className="article-info__type-article">{typeArticle[0]}</p>
          <p className="article-info__subtitle">{shortDescription}</p>
        </div>
      </div>
      <div className="article-info__first-img_hidden">
        <img className="article-info__first-img" src={slider[0]} alt="" />
      </div>
      <div className="article-info__short-description-wrapp">
        <PersonShortInfo personInfo={person} />
        <div className="article-info__short-description">
          <div className="article-info__quote">
            {quote.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
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
      <RandomArticle qtyRandomNumbers={4} />
    </div>
  );
};

export default Article;
