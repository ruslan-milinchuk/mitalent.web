import React, { useEffect, useState } from "react";

import ButtonList from "../ButtonList";
import Loading from "../Loading";

import { ArrowLeft, ArrowRight } from "../../icons/";

import apiFetch from "../../utils/apiFetch";
import { isEmpty } from "../../utils/isEmpty";

import "./style.css";

const ProfileSlider = ({ idPerson }) => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState({});
  useEffect(() => {
    const callData = async () => {
      const [person] = await apiFetch(`/people?uuid=${idPerson}`);
      setPerson(person);
    };
    callData();
  }, [idPerson]);
  if (isEmpty(person)) {
    return <Loading />;
  }

  const {
    firstName,
    lastName,
    type = [],
    mainPhoto,
    profilePhoto,
    pressPhoto
  } = person;
  let list = [mainPhoto, profilePhoto, pressPhoto];
  return (
    <div className="person">
      <div className="person__content">
        <div className="person__name">
          <h2 className="person__name_font">
            {firstName}&nbsp;
            <br className="person__br-none" />
            {lastName}
          </h2>
        </div>
        <h3 className="person__role">{type[0]}</h3>
        <ButtonSlideControl setIndex={setIndex} index={index} list={list} />
      </div>
      <div className="person__img">
        <img src={`.${list[index]}`} alt="" />
        <a className="person__link" href="#contact">
          Contact {firstName}
        </a>
      </div>
    </div>
  );
};

const ButtonSlideControl = ({ setIndex, index, list }) => (
  <div className="person__btn">
    <div className="person__btn-list">
      <ButtonList currentIndex={index} list={list} setIndex={setIndex} />
    </div>
    <div className="person__btn-arrow_disp-inline">
      <button
        onClick={() =>
          index === 0 ? setIndex(list.length - 1) : setIndex(index - 1)
        }
        className="person__btn-left"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() =>
          index === list.length - 1 ? setIndex(0) : setIndex(index + 1)
        }
        className="person__btn-right"
      >
        <ArrowRight />
      </button>
    </div>
  </div>
);
export default ProfileSlider;
