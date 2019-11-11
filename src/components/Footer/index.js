import React from "react";

import Logo from "../Logo/Logo";
import FormSearch from "../FormSearch";
import ButtonsSocial from "../ButtonsSocial";

import "./style.css";

const Footer = () => (
  <div className="footer">
    <div className="footer__section">
      <Logo />
      <FormSearch placeholder="sign up our newsletter" icon="mail" />
    </div>
    <div className="footer__divider" />
    <div className="footer__section">
      <p className="footer__date">
        &copy; 2018 MI Talent.Designed by Tranmautritan for Mass Impressions
      </p>
      <ButtonsSocial component="footer" />
    </div>
  </div>
);

export default Footer;
