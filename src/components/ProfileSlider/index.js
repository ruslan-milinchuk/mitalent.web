import React, { Component } from "react";
import "./style.css";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import ButtonList from "../ButtonList";
class ProfileSlider extends Component {
  state = { i: 0 };

  render() {
    const { list, name, role, link } = this.props;
    return (
      <div className="person">
        <div className="person__content">
          <div className="person__name">
            <h2 className="person__name_font">{name[0]}</h2>
            <h2 className="person__name_font">{name[1]}</h2>
          </div>
          <h3 className="person__role">{role}</h3>
          <div className="person__btn">
            <div className="person__btn-list">
              <ButtonList list={list} stateNumb={this.stateNumb} />
            </div>
            <div className="person__btn-arrow">
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
          <img
            src={list[this.state.i]}
            alt="photo
        client"
          />

          <a className="person__link" href={link}>
            Enquire about {name[0]}
          </a>
        </div>
      </div>
    );
  }

  slideLeft = list => {
    let i = this.state.i;
    if (i === 0) {
      return this.setState({ i: list.length - 1 });
    }
    if (i > 0) {
      return this.setState({ i: i - 1 });
    }
  };
  stateNumb = index => {
    return this.setState({ i: index });
  };

  slideRight = list => {
    let i = this.state.i;
    if (i === list.length - 1) {
      return this.setState({ i: 0 });
    }
    if (i => 0) {
      return this.setState({ i: i + 1 });
    }
  };
}
export default ProfileSlider;
