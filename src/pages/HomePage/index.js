import React, { Component } from "react";
import articles from "../../fixtures/articles.js";
import persons from "../../fixtures/persons.js";
import OurStoriesArticles from "../../components/OurStoriesArticles";
import ButtonsSocial from "../../components/ButtonsSocial";
import ButtonList from "../../components/ButtonList";
import "./style.css";
import TriangleRight from "../../icons/TriangleRight";
import CustomerGroups from "../../components/CustomerGroups";

class HomePage extends Component {
  state = {
    defaultPerson: {},
    numberPhoto: "01",
    currentIndex: 0
  };

  componentDidMount() {
    this.setState({
      defaultPerson: persons[this.randomNumb(0, persons.length - 1)]
    });
  }

  render() {
    const { history } = this.props;
    const { numberPhoto, currentIndex } = this.state;
    let newArticles = articles.slice(0, 7);
    const {
      id,
      firstName,
      lastName,
      shortDescription,
      mainFoto,
      profileFoto,
      pressFoto
    } = this.state.defaultPerson;
    const list = [];
    list.push(mainFoto, profileFoto, pressFoto);

    return (
      <div className="home-page">
        <div className="home-page__client">
          <div className="home-page__social">
            <ButtonsSocial component="home-page" />
            <div className="home-page__first-divider"></div>
            <div className="home-page__number-slide">{numberPhoto}</div>
          </div>
          <div className="home-page__slider">
            <img
              src={list[currentIndex]}
              alt=""
              className="home-page__slider-img"
            />
            <div className="home-page__info">
              <h2 className="home-page__title">
                {firstName} <br /> {lastName}
              </h2>
              <p className="home-page__type-person">{shortDescription}</p>
            </div>
            <div
              onClick={() => history.push(`/profile/${id}`)}
              className="home-page__link"
            >
              <p className="home-page__link-name">view profile</p>
              <div className="home-page__link-svg">
                <TriangleRight />
              </div>
            </div>
          </div>
          <div className="home-page__btn-img">
            <ButtonList
              currentIndex={currentIndex}
              list={list}
              stateNumb={this.stateNumb}
            />
          </div>
        </div>
        <CustomerGroups />
        <div className="our-stories">
          <OurStoriesArticles newArticles={newArticles} />
        </div>
      </div>
    );
  }

  randomNumb = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  renderIndex = index => {
    return index + 1 >= 10 ? index + 1 : "0" + (index + 1);
  };

  stateNumb = index => {
    return this.setState({
      currentIndex: index,
      numberPhoto: this.renderIndex(index)
    });
  };
}

export default HomePage;
