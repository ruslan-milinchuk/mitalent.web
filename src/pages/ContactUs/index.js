import React from "react";
import "./style.css";
import Flag from "../../icons/Flag";
import Home from "../../icons/Home";
import Phone from "../../icons/Phone";
import IconMail from "../../icons/IconMail";

const ContactUs = () => (
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
          We would love to hear from you, whether you want more information on
          any of fours acts or wish to discover how our artists can support your
          event.
        </h3>
        <div className="contact__location">
          <div className="contact__coordinates">
            <div className="contact__svg">
              <Home />
            </div>
            <div className="contact__svg-date">
              <a
                href="https://www.google.com.ua/maps/search/79+-+81+Barkeley+Square+/@51.5096272,-0.1480057,17z/data=!3m1!4b1?hl=ru"
                target="_blank"
              >
                79 - 81 Barkeley Square
              </a>
              <a
                href="https://www.google.com.ua/maps/place/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@51.5285582,-0.2416816,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=ru"
                target="_blank"
              >
                London
              </a>
              <a href="#" target="_blank">
                WC923 9TT
              </a>
            </div>
          </div>
          <div className="contact__phone">
            <div className="contact__svg">
              <Phone />
            </div>
            <div className="contact__svg-date">
              <a href="tel:+6494461709" target="_blank">
                +6494461709
              </a>
              <a href="tel:+6494461709" target="_blank">
                +6494461709
              </a>
            </div>
          </div>
          <div className="contact__mail">
            <div className="contact__svg">
              <IconMail />
            </div>
            <div className="contact__svg-date">
              <a href="mailto:hello@mitalent.com">hello@mitalent.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
