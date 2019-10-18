import React, { Component } from "react";
import persons from "../../fixtures/persons";
import articles from "../../fixtures/articles";
import "./style.css";
import ButtonsSocial from "../../components/ButtonsSocial";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import ButtonsGroupsClients from "../../components/ButtonsGroupsClients";
import PersonCardList from "../../components/PersonCardList";
import articlesList from "../../fixtures/articles";
import RandomArticle from "../../components/RandomArticle";

const role = ["all", "actor", "comedian", "model", "musician"];

class Clients extends Component {
  state = {
    numberPhoto: "01",
    defaultPerson: {},
    currentIndex: 0,
    listLength: null,
    allArticles: {},
    articleId: "",
    quote: [],
    createAt: "",
    articleImg: []
  };
  componentDidMount() {
    const objPerson = this.randomNumb(0, persons.length - 1);
    const list = [];
    const { mainPhoto, profilePhoto, pressPhoto, articles } = persons[
      objPerson
    ];
    list.push(mainPhoto, profilePhoto, pressPhoto);
    const articleId = articles[0].id;
    const neededArticle = articlesList.filter(item => item.id === articleId)[0];
    const { slider, quote, createAt, title } = neededArticle;
    const articleDate = new Date(createAt).toDateString();
    this.setState({
      defaultPerson: persons[objPerson],
      listLength: list.length,
      quote: quote,
      createAt: articleDate,
      articleImg: slider,
      title,
      articleId
    });
  }
  render() {
    const { history } = this.props;
    const {
      numberPhoto,
      currentIndex,
      quote,
      createAt,
      articleImg,
      title,
      articleId
    } = this.state;
    const {
      firstName,
      lastName,
      type,
      mainPhoto,
      profilePhoto,
      pressPhoto
    } = this.state.defaultPerson;
    const list = [];
    list.push(mainPhoto, profilePhoto, pressPhoto);
    const articleQuote = quote.map(item => {
      return <p>{item}</p>;
    });

    return (
      <div className="clients">
        <div className="clients__slider">
          <div className="clients__info-page">
            <div className="clients__social-numb">
              <ButtonsSocial component="clients" />
              <div className="clients__divider" />
              <p className="clients__numb-img">{numberPhoto}</p>
            </div>
            <div className="clients__info-wrapper">
              <div className="clients__info-wrapper_width">
                <h3 className="clients__info-title">Our talent</h3>
                <p className="clients__info-description">
                  Leading industry names
                </p>
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
            <img
              src={list[currentIndex]}
              alt=""
              className="clients__person-slide"
            />
            <div className="clients__person-btn">
              <p className="clients__person-description">{type}</p>
              <h4 className="clients__person-name">
                {firstName} {lastName}
              </h4>
              <div className="clients__control-slider">
                <div
                  className="clients__control-left"
                  onClick={() => this.slideLeft(list)}
                >
                  <ArrowLeft />
                </div>
                <div
                  className="clients__control-right"
                  onClick={() => this.slideRight(list)}
                >
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomerGroupsClients />
        <div className="clients__connect">
          <div className="clients__connect-info">
            <h3 className="clients__connect-title">
              Connect to
              <br />
              {firstName}
            </h3>
            <div className="clients__article-info">
              <p className="clients__article-quote">{articleQuote}</p>
              <div
                className="article"
                onClick={() => history.push(`/news/${articleId}`)}
              >
                <div
                  className="article__img"
                  style={{ backgroundImage: `url(${articleImg[0]})` }}
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
              style={{ backgroundImage: `url(${articleImg[1]})` }}
            />
            <div className="clients__connect-decor" />
            <ButtonsSocial component="connect" />
          </div>
        </div>
        <h3 className="clients__news-title">Latest news</h3>
        <RandomArticle articles={articles} newArticleLength={6} />
      </div>
    );
  }
  randomNumb = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  slideLeft = list => {
    let { currentIndex } = this.state;

    currentIndex === 0
      ? this.setState({
          currentIndex: list.length - 1,
          numberPhoto: this.renderIndex(list.length - 1)
        })
      : this.setState({
          currentIndex: currentIndex - 1,
          numberPhoto: this.renderIndex(currentIndex - 1)
        });
  };

  slideRight = list => {
    let { currentIndex } = this.state;

    currentIndex === list.length - 1
      ? this.setState({ currentIndex: 0, numberPhoto: this.renderIndex(0) })
      : this.setState({
          currentIndex: currentIndex + 1,
          numberPhoto: this.renderIndex(currentIndex + 1)
        });
  };

  renderIndex = index => {
    return index + 1 >= 10 ? index + 1 : "0" + (index + 1);
  };
}

class CustomerGroupsClients extends Component {
  state = {
    position: 0,
    data: persons,
    filterData: [],
    type: role[0]
  };

  componentDidMount() {
    this.changeRole(role[0]);
  }

  render() {
    const { type, filterData } = this.state;
    return (
      <div className="clients__list-wrapper">
        <div className="clients__list">
          <div className="clients__list-buttons">
            <ButtonsGroupsClients
              activeType={type}
              changeRole={this.changeRole}
              role={role}
            />
          </div>
          <div className="clients__card-wrapper">
            <PersonCardList data={filterData} />
          </div>
        </div>
      </div>
    );
  }

  changeRole = value => {
    const { data } = this.state;

    const filterDataWithRole = data.filter(item => {
      const { type } = item;
      return type.includes(value);
    });

    if (value === role[0]) {
      this.setState({ filterData: persons, type: role[0], position: 0 });
    }

    if (value !== role[0]) {
      this.setState({
        filterData: filterDataWithRole,
        filterDataLength: filterDataWithRole.length,
        type: value,
        position: 0
      });
    }
  };
}

export default Clients;
