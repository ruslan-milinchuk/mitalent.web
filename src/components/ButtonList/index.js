import React from "react";
import classNames from "classnames";

const ButtonList = ({ currentIndex, list, setCurrentIndexImg }) => {
  return list.map((item, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndexImg(index)}
      className={classNames(
        { "person__btn-item-active": currentIndex === index },
        { "person__btn-item": true }
      )}
    >
      {index + 1 >= 10 ? index + 1 : "0" + (index + 1)}
    </button>
  ));
};
export default ButtonList;
