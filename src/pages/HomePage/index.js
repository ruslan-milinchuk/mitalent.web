import React, { useState, useEffect } from "react";

import { Consumer } from "../../components/Preload";
import OurStoriesArticles from "../../components/OurStoriesArticles";
import ButtonsSocial from "../../components/ButtonsSocial";
import ButtonList from "../../components/ButtonList";
import SliderWrapper from "../../components/SliderWrapper";
import Loading from "../../components/Loading";

import { TriangleRight } from "../../icons/";

import { formatterIndex } from "../../utils/formatterIndex";
import { randomNumb } from "../../utils/randomNumb";

import { isEmpty } from "../../utils/isEmpty";

import "./style.css";

const SLIDER_IMG_LENGTH = 8,
  SLIDER_IMG_TIME_ANIMATION = 6000;

const HomePage = ({ people, articles, history }) => {
  const [listIsOpen, setListIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  if (isEmpty(people) || isEmpty(articles)) {
    return <Loading />;
  }
  const indexRandomPerson = randomNumb(0, people.length - 1);
  const person = people[indexRandomPerson];
  let sortArticlesList = articles.slice(0, 7);
  const filterData = listIsOpen ? people : people.slice(0, SLIDER_IMG_LENGTH);

  return (
    <div className="home-page">
      <PersonPhotoSlider {...person} history={history} />
      <h3 className="home-page__client-title">Our clients</h3>
      <SliderWrapper filterData={filterData} position={0} onClick={() => {}} />
      <div
        className="home-page__more-clients"
        onClick={() => {
          !listIsOpen
            ? setScrollPosition(window.scrollY)
            : window.scrollTo(0, scrollPosition);
          setListIsOpen(!listIsOpen);
        }}
      >
        {listIsOpen ? "hide " : "explore "}
        more
      </div>
      <h3 className="home-page__title-news">Latest News</h3>
      <div className="home-page__divider-news" />
      <div className="our-stories">
        <OurStoriesArticles sortArticlesList={sortArticlesList} />
      </div>
    </div>
  );
};

const PersonPhotoSlider = ({
  uuid,
  firstName,
  lastName,
  shortDescription,
  mainPhoto,
  profilePhoto,
  pressPhoto,
  history
}) => {
  const listImg = [mainPhoto, profilePhoto, pressPhoto];

  const [currentIndexImg, setCurrentIndexImg] = useState(0);

  useEffect(() => {
    timeoutSlider(currentIndexImg, listImg, setCurrentIndexImg);
  }, [currentIndexImg]);

  return (
    <div className="home-page__client">
      <div className="home-page__social">
        <ButtonsSocial component="home-page" />
        <div className="home-page__first-divider" />
        <div className="home-page__number-slide">
          {formatterIndex(currentIndexImg)}
        </div>
      </div>
      <div className="home-page__slider">
        <img
          src={listImg[currentIndexImg]}
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
          currentIndex={currentIndexImg}
          list={listImg}
          setIndex={setCurrentIndexImg}
        />
      </div>
    </div>
  );
};

const timeoutSlider = (currentIndexImg, listImg, setCurrentIndexImg) => {
  setInterval(
    () =>
      currentIndexImg + 1 < listImg.length
        ? setCurrentIndexImg(currentIndexImg + 1)
        : setCurrentIndexImg(0),
    SLIDER_IMG_TIME_ANIMATION
  );
};

const HomePageWithProps = props => (
  <Consumer>{value => <HomePage {...value} {...props} />}</Consumer>
);

export default HomePageWithProps;
