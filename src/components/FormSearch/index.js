import React from "react";
import IconSearch from "../../icons/IconSearch";
import "./style.css";
import IconMail from "../../icons/IconMail";
const FormSearch = ({ placeholder, icon }) => (
  <form className="search-form">
    <input
      className="search-form__input"
      type="text"
      placeholder={placeholder}
    />
    <button className="search-form__button" type="submit">
      {icon === "search" && <IconSearch />}
      {icon === "mail" && <IconMail />}
    </button>
  </form>
);

export default FormSearch;
