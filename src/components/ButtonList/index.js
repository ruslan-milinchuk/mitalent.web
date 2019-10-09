import React from "react";
const ButtonList = ({ currentIndex, list, stateNumb }) =>
  list.map((item, index) => (
    <button
      key={index}
      onClick={() => stateNumb(index)}
      className={
        currentIndex === index
          ? "person__btn-item person__btn-item-active"
          : "person__btn-item"
      }
    >
      {index + 1 >= 10 ? index + 1 : "0" + (index + 1)}
    </button>
  ));
export default ButtonList;
