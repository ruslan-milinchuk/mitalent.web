import React, { Component } from "react";
import ButtonsSocial from "../../components/ButtonsSocial";
import User from "../../icons/User/User";
import "./style.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__comunication">
          <ButtonsSocial component="about" />
          <div className="about__btn">
            <button className="about__btn-info">Contact us</button>
            <button className="about__btn-user">
              <User />
            </button>
          </div>
        </div>
        <div className="about__date">
          <h3 className="about__title">
            Developing the best talent in the comedy & entertaiment business.
          </h3>
          <p className="about__description">
            Our clients list is drawn from the competitive worldof stand-up
            comedy and our boutique, focused company works closely with them to
            develop talents learned on the circuit into the scills needed for a
            long-lasting career performing and writting for television, radio
            and film.
          </p>
          <p className="about__description">
            Our clients list is drawn from the competitive worldof stand-up
            comedy and our boutique, focused company works closely with them to
            develop talents learned on the circuit into the scills needed for a
            long-lasting career performing and writting for television, radio
            and film.
          </p>
          <div className="about__quote">
            <span>Motivation</span> Is The First Step To <span>Succes</span>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
