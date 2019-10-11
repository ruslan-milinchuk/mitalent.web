import React, { Component } from "react";
import windowSize from "react-window-size";

import articles from "../../fixtures/articles.js";
import persons from "../../fixtures/persons.js";
import OurStoriesArticles from "../../components/OurStoriesArticles";
import ButtonsSocial from "../../components/ButtonsSocial";
import ButtonList from "../../components/ButtonList";
import "./style.css";
import TriangleRight from "../../icons/TriangleRight";
import SliderWrapper from "../../components/SliderWrapper";

const SLIDER_IMG_LENGTH_HUGE = 12,
  SLIDER_IMG_LENGTH_LARGE = 10,
  SLIDER_IMG_LENGTH_BIG = 8,
  SLIDER_IMG_LENGTH_MEDIUM = 6,
  SLIDER_IMG_LENGTH_SMALL = 4,
  SLIDER_IMG_LENGTH_TINY = 2,
  HUGE_DEVISE_MAX_WIDTH = 2098,
  LARGE_DEVISE_MAX_WIDTH = 1804,
  BIG_DEVISE_MAX_WIDTH = 1510,
  MEDIUM_DEVISE_MAX_WIDTH = 1216,
  SMALL_DEVISE_MAX_WIDTH = 922,
  TINY_DEVISE_MIN_WIDTH = 360,
  TINY_DEVISE_MAX_WIDTH = 628,
  SLIDER_IMG_TIME_ANIMATION = 6000;

class HomePage extends Component {
  state = {
    defaultPerson: {},
    numberPhoto: "01",
    currentIndex: 0,
    maxItemLengthChanges: 0,
    maxItemLengthFixed: 0,
    listLength: null,
    scrollYPosition: 0
  };

  componentDidMount() {
    this.sliderWrappLength();
    this.timeoutSlider();
    const objPerson = this.randomNumb(0, persons.length - 1);
    const list = [];
    const { mainFoto, profileFoto, pressFoto } = objPerson;
    list.push(mainFoto, profileFoto, pressFoto);
    this.setState({
      defaultPerson: persons[objPerson],
      listLength: list.length
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.windowWidth !== nextProps.windowWidth) {
      this.sliderWrappLength();
    }

    return this.props.windowWidth === nextProps.windowWidth;
  }

  render() {
    const { history } = this.props;
    const { numberPhoto, currentIndex, maxItemLengthChanges } = this.state;
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
    const filterData = persons.slice(0, maxItemLengthChanges);

    return (
      <div className="home-page">
        <div className="home-page__client">
          <div className="home-page__social">
            <ButtonsSocial component="home-page" />
            <div className="home-page__first-divider" />
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
        <h3 className="home-page__client-title">Our clients</h3>
        <SliderWrapper
          dataLength={filterData.length}
          filterData={filterData}
          position={0}
          onClick={null}
        />
        <div
          className="home-page__more-clients"
          onClick={() => this.clickBtnClients()}
        >
          {maxItemLengthChanges !== persons.length ? "explore " : "hide "}
          more
        </div>
        <h3 className="home-page__title-news">Latest News</h3>
        <div className="home-page__divider-news" />
        <div className="our-stories">
          <OurStoriesArticles newArticles={newArticles} />
        </div>
      </div>
    );
  }

  clickBtnClients = () => {
    const {
      maxItemLengthChanges,
      maxItemLengthFixed,
      scrollYPosition
    } = this.state;

    this.setState({
      maxItemLengthChanges:
        maxItemLengthChanges !== persons.length
          ? persons.length
          : maxItemLengthFixed
    });

    if (maxItemLengthChanges !== persons.length) {
      this.setState({ scrollYPosition: window.scrollY });
    }

    if (maxItemLengthChanges === persons.length) {
      window.scrollTo(0, scrollYPosition);
    }
  };

  timeoutSlider = () => {
    const that = this;
    setInterval(() => {
      const { currentIndex, listLength } = that.state;

      if (currentIndex + 1 < listLength) {
        that.setState({
          currentIndex: currentIndex + 1,
          numberPhoto: that.renderIndex(currentIndex + 1)
        });
      }

      if (currentIndex + 1 >= listLength) {
        that.setState({ currentIndex: 0, numberPhoto: "01" });
      }
    }, SLIDER_IMG_TIME_ANIMATION);
  };

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

  sliderWrappLength = () => {
    const { windowWidth } = this.props;
    const { maxItemLengthChanges } = this.state;
    if (
      LARGE_DEVISE_MAX_WIDTH + 1 <= windowWidth &&
      windowWidth <= HUGE_DEVISE_MAX_WIDTH
    ) {
      if (maxItemLengthChanges === SLIDER_IMG_LENGTH_HUGE) {
        return;
      }
      return this.setState({
        maxItemLengthChanges: SLIDER_IMG_LENGTH_HUGE,
        maxItemLengthFixed: SLIDER_IMG_LENGTH_HUGE
      });
    }
    if (
      BIG_DEVISE_MAX_WIDTH + 1 <= windowWidth &&
      windowWidth <= LARGE_DEVISE_MAX_WIDTH
    ) {
      if (maxItemLengthChanges === SLIDER_IMG_LENGTH_LARGE) {
        return;
      }
      return this.setState({
        maxItemLengthChanges: SLIDER_IMG_LENGTH_LARGE,
        maxItemLengthFixed: SLIDER_IMG_LENGTH_LARGE
      });
    }
    if (
      MEDIUM_DEVISE_MAX_WIDTH + 1 <= windowWidth &&
      windowWidth <= BIG_DEVISE_MAX_WIDTH
    ) {
      if (maxItemLengthChanges === SLIDER_IMG_LENGTH_BIG) {
        return;
      }
      return this.setState({
        maxItemLengthChanges: SLIDER_IMG_LENGTH_BIG,
        maxItemLengthFixed: SLIDER_IMG_LENGTH_BIG
      });
    }
    if (
      SMALL_DEVISE_MAX_WIDTH + 1 <= windowWidth &&
      windowWidth <= MEDIUM_DEVISE_MAX_WIDTH
    ) {
      if (maxItemLengthChanges === SLIDER_IMG_LENGTH_MEDIUM) {
        return;
      }
      return this.setState({
        maxItemLengthChanges: SLIDER_IMG_LENGTH_MEDIUM,
        maxItemLengthFixed: SLIDER_IMG_LENGTH_MEDIUM
      });
    }
    if (
      TINY_DEVISE_MAX_WIDTH + 1 <= windowWidth &&
      windowWidth <= SMALL_DEVISE_MAX_WIDTH
    ) {
      if (maxItemLengthChanges === SLIDER_IMG_LENGTH_SMALL) {
        return;
      }
      return this.setState({
        maxItemLengthChanges: SLIDER_IMG_LENGTH_SMALL,
        maxItemLengthFixed: SLIDER_IMG_LENGTH_SMALL
      });
    }
    if (
      TINY_DEVISE_MIN_WIDTH <= windowWidth &&
      windowWidth <= TINY_DEVISE_MAX_WIDTH
    ) {
      if (maxItemLengthChanges === SLIDER_IMG_LENGTH_TINY) {
        return;
      }
      return this.setState({
        maxItemLengthChanges: SLIDER_IMG_LENGTH_TINY,
        maxItemLengthFixed: SLIDER_IMG_LENGTH_TINY
      });
    }
  };
}

export default windowSize(HomePage);
