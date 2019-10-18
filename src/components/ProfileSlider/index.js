import React, { Component } from "react";
import "./style.css";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import ButtonList from "../ButtonList";
import persons from "../../fixtures/persons";

class ProfileSlider extends Component {
  state = { currentIndex: 0 };

  render() {
    const { currentIndex } = this.state;
    const { idPerson } = this.props;
    let neededPerson = persons.filter(item => idPerson === item.id)[0];
    const {
      firstName,
      lastName,
      type,
      mainPhoto,
      profilePhoto,
      pressPhoto
    } = neededPerson;
    let list = [];
    list.push(mainPhoto, profilePhoto, pressPhoto);
    let role = type;
    const link = "#";
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
          <h3 className="person__role">{role}</h3>
          <div className="person__btn">
            <div className="person__btn-list">
              <ButtonList
                currentIndex={currentIndex}
                list={list}
                stateNumb={this.stateNumb}
              />
            </div>
            <div className="person__btn-arrow_disp-inline">
              <button
                onClick={() => this.slideLeft(list)}
                className="person__btn-left"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => this.slideRight(list)}
                className="person__btn-right"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="person__img">
          <img src={`.${list[currentIndex]}`} alt="" />
          <a className="person__link" href="#contact">
            Contact {firstName}
          </a>
        </div>
        <div className="person__btn-arrow_disp-none">
          <button
            onClick={() => this.slideLeft(list)}
            className="person__btn-left"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => this.slideRight(list)}
            className="person__btn-right"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    );
  }

  slideLeft = list => {
    let { currentIndex } = this.state;

    currentIndex === 0
      ? this.setState({ currentIndex: list.length - 1 })
      : this.setState({ currentIndex: currentIndex - 1 });
  };
  stateNumb = index => {
    return this.setState({ currentIndex: index });
  };

  slideRight = list => {
    let { currentIndex } = this.state;

    currentIndex === list.length - 1
      ? this.setState({ currentIndex: 0 })
      : this.setState({ currentIndex: currentIndex + 1 });
  };
}
export default ProfileSlider;
