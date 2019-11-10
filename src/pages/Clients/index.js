import React, { useState, useEffect } from "react";

import { Consumer } from "../../components/Preload";
import ButtonsSocial from "../../components/ButtonsSocial";
import ButtonsGroupsClients from "../../components/ButtonsGroupsClients";
import PersonCardList from "../../components/PersonCardList";
import RandomArticle from "../../components/RandomArticle";
import Loading from "../../components/Loading";

import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";

import apiFetch from "../../utils/apiFetch";
import { isEmpty } from "../../utils/isEmpty";

import "./style.css";
import { formatterIndex } from "../../utils/formatterIndex";
import {randomNumb} from "../../utils/randomNumb";

const ROLE = ["all", "actor", "comedian", "model", "musician"];
const WHITE_LIST_ROLE = "all";

const Clients = ({ history, people }) => {
  const indexRandomPerson = randomNumb(0, people.length - 1);
  const person = people[indexRandomPerson];

  if (isEmpty(people)) {
    return <Loading />;
  }

  return (
    <div className="clients">
      <ClientSlider person={person} history={history} />
      <CustomerGroupsClients listPeople={people} />
      <ConnectTo
        articleId={person.articles && person.articles[0].uuid}
        person={person}
        history={history}
      />
      <h3 className="clients__news-title">Latest news</h3>
      <RandomArticle qtyRandomNumbers={6} />
    </div>
  );
};

const ClientSlider = ({ person, history }) => {
  const [index, setIndex] = useState(0);
  const {
    type,
    firstName,
    lastName,
    mainPhoto,
    profilePhoto,
    pressPhoto
  } = person;
  const list = [mainPhoto, profilePhoto, pressPhoto];

  return (
    <div className="clients__slider">
      <div className="clients__info-page">
        <div className="clients__social-numb">
          <ButtonsSocial component="clients" />
          <div className="clients__divider" />
          <p className="clients__numb-img">{formatterIndex(index)}</p>
        </div>
        <div className="clients__info-wrapper">
          <div className="clients__info-wrapper_width">
            <h3 className="clients__info-title">Our talent</h3>
            <p className="clients__info-description">Leading industry names</p>
            <div
              className="clients__btn-about"
              onClick={() => history.push("/about")}
            >
              About us
            </div>
          </div>
        </div>
      </div>
      <div className="clients__person">
        <img src={list[index]} alt="" className="clients__person-slide" />
        <div className="clients__person-btn">
          <p className="clients__person-description">{type}</p>
          <h4 className="clients__person-name">
            {firstName} {lastName}
          </h4>
          <div className="clients__control-slider">
            <div
              className="clients__control-left"
              onClick={() =>
                index === 0 ? setIndex(list.length - 1) : setIndex(index - 1)
              }
            >
              <ArrowLeft />
            </div>
            <div
              className="clients__control-right"
              onClick={() =>
                index === list.length - 1 ? setIndex(0) : setIndex(index + 1)
              }
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerGroupsClients = ({ listPeople = [] }) => {
  const [role, setRole] = useState(ROLE[0]);
  const filterData =
    role === WHITE_LIST_ROLE
      ? listPeople
      : listPeople.filter(({ type }) => type.includes(role));
  return (
    <div className="clients__list-wrapper">
      <div className="clients__list">
        <div className="clients__list-buttons">
          <ButtonsGroupsClients
            activeType={role}
            changeRole={setRole}
            role={ROLE}
          />
        </div>
        <div className="clients__card-wrapper">
          <PersonCardList data={filterData} />
        </div>
      </div>
    </div>
  );
};

const ConnectTo = ({ articleId, person, history }) => {
  const [article, setArticle] = useState({});
  const { slider = [], quote = [], createAt, title } = article;

  const { firstName, pressPhoto } = person;

  useEffect(() => {
    const callData = async () => {
      const [article] = await apiFetch(`/articles?uuid=${articleId}`);
      setArticle(article);
    };
    callData();
  }, [articleId]);
  return (
    <div className="clients__connect">
      <div className="clients__connect-info">
        <h3 className="clients__connect-title">
          Connect to
          <br />
          {firstName}
        </h3>
        <div className="clients__article-info">
          <p className="clients__article-quote">
            {quote.map((item, key) => (
              <span key={key}>{item}</span>
            ))}
          </p>
          <div
            className="article"
            onClick={() => history.push(`/news/${articleId}`)}
          >
            <div
              className="article__img"
              style={{ backgroundImage: `url(${slider[0]})` }}
            />
            <div className="article__info">
              <h3 className="article__title">{title}</h3>
              <p className="article__date">{createAt}</p>
            </div>
          </div>
        </div>
        <img src={pressPhoto} alt="" className="clients__article-img" />
        <div
          className="clients__connect-img"
          style={{ backgroundImage: `url(${slider[1]})` }}
        />
        <div className="clients__connect-decor" />
        <ButtonsSocial component="connect" />
      </div>
    </div>
  );
};

const ClientsWithProps = props => (
  <Consumer>{value => <Clients people={value.people} {...props} />}</Consumer>
);

export default ClientsWithProps;
