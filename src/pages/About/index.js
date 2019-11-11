import React from "react";

import { Link } from "react-router-dom";
import ButtonsSocial from "../../components/ButtonsSocial";
import CustomerGroups from "../../components/CustomerGroups";

import User from "../../icons/User";

import "./style.css";

const About = () => (
  <div className="about-wrapper">
    <div className="about">
      <div className="about__communication">
        <ButtonsSocial component="about" />
        <Link to="/contact-us" className="about__btn-info">
          <div className="about__btn-name">Contact us</div>
          <div className="about__btn-user">
            <User />
          </div>
        </Link>
      </div>
      <div className="about__date">
        <h3 className="about__title">
          Developing the best talent in the comedy & entertaiment business.
        </h3>
        <p className="about__description">
          Our clients list is drawn from the competitive worldof stand-up comedy
          and our boutique, focused company works closely with them to develop
          talents learned on the circuit into the scills needed for a
          long-lasting career performing and writting for television, radio and
          film.
        </p>
        <p className="about__description">
          Our clients list is drawn from the competitive worldof stand-up comedy
          and our boutique, focused company works closely with them to develop
          talents learned on the circuit into the scills needed for a
          long-lasting career performing and writting for television, radio and
          film.
        </p>
        <div className="about__quote">
          <span>Motivation</span> Is The First Step To <span>Success</span>
        </div>
      </div>
    </div>
    <CustomerGroups />
  </div>
);

export default About;
