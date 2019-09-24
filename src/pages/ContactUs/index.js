import React, { Component } from "react";
import "./style.css";
import Flag from "../../icons/Flag";
import Home from "../../icons/Home";
import Phone from "../../icons/Phone";
import IconMail from "../../icons/IconMail";

class ContactUs extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__section contact__section-first">
          <div className="contact__title">
            Contact <br />
            us
            <div className="contact__divider"></div>
            <div className="contact__short-description">Mass impressions</div>
          </div>

          <div className="contact__btn">
            <button className="contact__btn-info">Get directions</button>
            <button className="contact__btn-navigation">
              <Flag />
            </button>
          </div>
        </div>
        <div className="contact__section contact__section-second">
          <div className="contact__info">
            <h3 className="contact__description">
              We would love to hear from you, whether you want more information
              on any of fours acts or wish to discover how our artists can
              support your event.
            </h3>
            <div className="contact__location">
              <div className="contact__coordinates">
                <div className="contact__svg">
                  <Home />
                </div>
                <div className="contact__svg-date">
                  <p>79 - 81 Barkeley Square</p>
                  <p>London</p>
                  <p>WC923 9TT</p>
                </div>
              </div>
              <div className="contact__phone">
                <div className="contact__svg">
                  <Phone />
                </div>
                <div className="contact__svg-date">
                  <p>+44 (0) 235 565 6543</p>
                  <p>+44 (0) 027 449 3487</p>
                </div>
              </div>
              <div className="contact__mail">
                <div className="contact__svg">
                  <IconMail />
                </div>
                <div className="contact__svg-date">
                  <p>hello@mitalent.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__bg"></div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
