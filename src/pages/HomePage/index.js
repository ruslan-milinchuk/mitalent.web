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

class HomePage extends Component {
  state = {
    defaultPerson: {},
    numberPhoto: "01",
    currentIndex: 0,
    sliderWrappLength: 0,
    maxItemLength: 0,
    listLength: null,
    bigMonitor: 8,
    mediumMonitor: 6,
    smallMonitor: 4,
    tinyMonitor: 2,
    scrollYPosition: 0
  };

  componentDidMount() {
    this.timeoutSlider();
    this.sliderWrappLength();
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
    const {
      numberPhoto,
      currentIndex,
      sliderWrappLength,
      maxItemLength
    } = this.state;
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
    const filterData = persons.slice(0, sliderWrappLength);

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
          {sliderWrappLength !== persons.length ? "explore " : "hide "}
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
    const { sliderWrappLength, maxItemLength, scrollYPosition } = this.state;

    this.setState({
      sliderWrappLength:
        sliderWrappLength !== persons.length ? persons.length : maxItemLength
    });

    if (sliderWrappLength !== persons.length) {
      this.setState({ scrollYPosition: window.scrollY });
    }

    if (sliderWrappLength === persons.length) {
      window.scrollTo(0, scrollYPosition);
    }
  };

  timeoutSlider = close => {
    const that = this;
    const carouselImg = setTimeout(function run() {
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

      setTimeout(run, 2000);
    }, 2000);
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
    const { bigMonitor, mediumMonitor, smallMonitor, tinyMonitor } = this.state;
    if (this.props.windowWidth > 1217) {
      return this.setState({
        sliderWrappLength: bigMonitor,
        maxItemLength: bigMonitor
      });
    }
    if (923 < this.props.windowWidth && this.props.windowWidth <= 1216) {
      return this.setState({
        sliderWrappLength: mediumMonitor,
        maxItemLength: mediumMonitor
      });
    }
    if (629 < this.props.windowWidth && this.props.windowWidth <= 922) {
      return this.setState({
        sliderWrappLength: smallMonitor,
        maxItemLength: smallMonitor
      });
    }
    if (360 < this.props.windowWidth && this.props.windowWidth <= 628) {
      return this.setState({
        sliderWrappLength: tinyMonitor,
        maxItemLength: tinyMonitor
      });
    }
  };
}

export default windowSize(HomePage);
