import React from "react";
const ButtonList = (list, func) => {
  let numbOfBtn = [];
  for (var i = 0; i < list.list.length; i++) {
    numbOfBtn.push(list.list[i]);
  }

  return numbOfBtn.map((item, index) => (
    <button
      key={index}
      onClick={() => func(index)}
      className="person__btn-item"
    >
      {index + 1}
    </button>
  ));
};
export default ButtonList;
