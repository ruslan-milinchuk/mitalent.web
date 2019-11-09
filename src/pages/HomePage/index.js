import React, { Component } from "react";

import OurStoriesArticles from "../../components/OurStoriesArticles";
import ButtonsSocial from "../../components/ButtonsSocial";
import ButtonList from "../../components/ButtonList";
import "./style.css";
import TriangleRight from "../../icons/TriangleRight";
import SliderWrapper from "../../components/SliderWrapper";
import { Consumer } from "../../components/Preload";
import { isEmpty } from "../../utils/isEmpty";
import Loading from "../../components/Loading";
import apiFetch from "../../utils/apiFetch";

const SLIDER_IMG_LENGTH = 8,
  SLIDER_IMG_TIME_ANIMATION = 6000;

class HomePage extends Component {
  state = {
    defaultPerson: {},
    numberPhoto: "01",
    currentIndex: 0,
    maxItemLengthChanges: SLIDER_IMG_LENGTH,
    maxItemLengthFixed: SLIDER_IMG_LENGTH,
    listLength: null,
    scrollYPosition: 0
  };

  async componentDidMount() {
    const peopleList = await apiFetch("/people");
    this.timeoutSlider();
    const objPerson = this.randomNumb(0, peopleList.length - 1);
    const list = [];
    const { mainPhoto, profilePhoto, pressPhoto } = objPerson;
    list.push(mainPhoto, profilePhoto, pressPhoto);
    this.setState({
      defaultPerson: peopleList[objPerson],
      listLength: list.length
    });
  }

  render() {
    const { history, people, articles } = this.props;
    if (isEmpty(people) || isEmpty(articles)) {
      return <Loading />;
    }
    const { numberPhoto, currentIndex, maxItemLengthChanges } = this.state;
    let newArticles = articles.slice(0, 7);
    const {
      uuid,
      firstName,
      lastName,
      shortDescription,
      mainPhoto,
      profilePhoto,
      pressPhoto
    } = this.state.defaultPerson;
    const list = [];
    list.push(mainPhoto, profilePhoto, pressPhoto);
    const filterData = people.slice(0, maxItemLengthChanges);
    if (isEmpty(filterData)) {
      return <Loading />;
    }
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
              alt="person photo"
              className="home-page__slider-img"
            />
            <div className="home-page__info">
              <h2 className="home-page__title">
                {firstName} <br /> {lastName}
              </h2>
              <p className="home-page__type-person">{shortDescription}</p>
            </div>
            <div
              onClick={() => history.push(`/profile/${uuid}`)}
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
          {maxItemLengthChanges !== people.length ? "explore " : "hide "}
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
    const { people } = this.props;
    const {
      maxItemLengthChanges,
      maxItemLengthFixed,
      scrollYPosition
    } = this.state;

    this.setState({
      maxItemLengthChanges:
        maxItemLengthChanges !== people.length
          ? people.length
          : maxItemLengthFixed
    });

    if (maxItemLengthChanges !== people.length) {
      this.setState({ scrollYPosition: window.scrollY });
    }

    if (maxItemLengthChanges === people.length) {
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
}

const HomePageWithProps = props => (
  <Consumer>
    {value => (
      <HomePage articles={value.articles} people={value.people} {...props} />
    )}
  </Consumer>
);

export default HomePageWithProps;
