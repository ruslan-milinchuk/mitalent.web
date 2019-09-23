import React from "react";
import Logo from "../Logo/Logo";
import FormSearch from "../FormSearch";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Instagram from "../../icons/Instagram";
import Youtube from "../../icons/Youtube";
import "./style.css";
const Footer = () => (
  <div className="footer">
    <div className="footer__section">
      <Logo />
      <FormSearch placeholder="sign up our newsletter" icon="mail" />
    </div>
    <hr className="footer__divider" />
    <div className="footer__section">
      <p className="footer__date">
        &copy; 2018 MI Talent.Designed by Tranmautritan for Mass Impressions
      </p>
      <div className="footer__buttons">
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Youtube />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
