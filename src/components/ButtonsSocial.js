import React from "react";

import { Facebook, Twitter, Instagram, Youtube } from "../icons/";

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
