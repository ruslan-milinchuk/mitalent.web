import React from "react";
import classNames from "classnames";

const ButtonList = ({ currentIndex, list, stateNumb }) =>
  list.map((item, index) => (
    <button
      key={index}
      onClick={() => stateNumb(index)}
      className={classNames(
        { "person__btn-item-active": currentIndex === index },
        { "person__btn-item": true }
      )}
    >
      {index + 1 >= 10 ? index + 1 : "0" + (index + 1)}
    </button>
  ));
export default ButtonList;
