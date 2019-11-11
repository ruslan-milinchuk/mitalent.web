import React from "react";

import classNames from "classnames";
import { formatterIndex } from "../utils/formatterIndex";

const ButtonList = ({ currentIndex, list, setIndex }) =>
  list.map((item, index) => (
    <button
      key={index}
      onClick={() => setIndex(index)}
      className={classNames("person__btn-item", {
        "person__btn-item-active": currentIndex === index
      })}
    >
      {formatterIndex(index)}
    </button>
  ));
export default ButtonList;
