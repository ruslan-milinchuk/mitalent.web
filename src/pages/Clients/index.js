import React, { Component } from "react";
import persons from "../../fixtures/persons";
import "./style.css";
import ButtonsSocial from "../../components/ButtonsSocial";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import CustomerGroups from "../../components/CustomerGroups";

const addRole = "all";

class Clients extends Component {
  state = {
    numberPhoto: "01",
    defaultPerson: {},
    currentIndex: 0,
    listLength: null
  };
  componentDidMount() {
    const objPerson = this.randomNumb(0, persons.length - 1);
    const list = [];
    const { mainFoto, profileFoto, pressFoto } = objPerson;
    list.push(mainFoto, profileFoto, pressFoto);
    this.setState({
      defaultPerson: persons[objPerson],
      listLength: list.length
    });
  }
  render() {
    const { history } = this.props;
    const { numberPhoto, currentIndex } = this.state;
    const {
      firstName,
      lastName,
      type,
      mainFoto,
      profileFoto,
      pressFoto
    } = this.state.defaultPerson;
    const list = [];
    list.push(mainFoto, profileFoto, pressFoto);
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
        <div className="clients__list">
          <CustomerGroups defaultRole={[addRole]} addRole={addRole} />
        </div>
        <CustomerGroups />
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

export default Clients;
