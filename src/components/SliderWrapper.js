import React, { useState, useEffect } from "react";

import windowSize from "react-window-size";
import classNames from "classnames";

import ClientList from "./ClientList";

import { ArrowLeft, ArrowRight } from "../icons/";

const WIDTH_IMG_SLIDER = 250;

const SliderWrapper = ({
  position,
  filterData,
  onClick,
  startPath,
  windowWidth
}) => {
  const [maxItemLength, setMaxItemLength] = useState(4);

  useEffect(() => {
    changeState(windowWidth, setMaxItemLength);
  }, [windowWidth]);

  const dataLength = filterData.length;
  return (
    <div className="customer-groups__slider">
      {dataLength > maxItemLength && (
        <div
          onClick={() => position !== 0 && onClick(position + WIDTH_IMG_SLIDER)}
          className={classNames("arrow", { "arrow-unactive": position === 0 })}
        >
          <ArrowLeft />
        </div>
      )}
      <div className="client__list-wrapper">
        <div style={{ marginLeft: position }} className="client__list-slider">
          <ClientList data={filterData} startPath={startPath} />
        </div>
      </div>
      {dataLength > maxItemLength && (
        <div
          className={classNames("arrow", {
            "arrow-unactive":
              position ===
              maxItemLength * WIDTH_IMG_SLIDER - dataLength * WIDTH_IMG_SLIDER
          })}
          onClick={() =>
            position !==
              maxItemLength * WIDTH_IMG_SLIDER -
                dataLength * WIDTH_IMG_SLIDER &&
            onClick(position - WIDTH_IMG_SLIDER)
          }
        >
          <ArrowRight />
        </div>
      )}
    </div>
  );
};

const changeState = (width, cb) => {
  if (width > 1111) {
    cb(4);
  }
  if (869 < width && width <= 1111) {
    cb(3);
  }
  if (619 < width && width <= 869) {
    cb(2);
  }
  if (360 < width && width <= 619) {
    cb(1);
  }
};

export default windowSize(SliderWrapper);
