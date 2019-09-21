import React from "react";
const ButtonList = ({ list, stateNumb }) => {
  return list.map((item, index) => (
    <button
      key={index}
      onClick={() => stateNumb(index)}
      className="person__btn-item"
    >
      0{index + 1}
    </button>
  ));
};
export default ButtonList;
