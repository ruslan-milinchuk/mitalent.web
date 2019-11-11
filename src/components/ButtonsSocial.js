import React from "react";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Instagram from "../../icons/Instagram";
import Youtube from "../../icons/Youtube";

const ButtonsSocial = ({ component }) => (
  <div className={component + "__buttons"}>
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
);

export default ButtonsSocial;
