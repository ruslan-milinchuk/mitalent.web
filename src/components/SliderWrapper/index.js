import React, { Component } from "react";
import ArrowLeft from "../../icons/ArrowLeft";
import ClientList from "../ClientList";
import ArrowRight from "../../icons/ArrowRight";

const WIDHT_IMG_SLIDER = 250;

class SliderWrapper extends Component {
  state = {
    maxItemLength: 4
  };

  render() {
    const { position, filterData, onClick, dataLength } = this.props;
    const { maxItemLength } = this.state;
    return (
      <div className="customer-groups__slider">
        {dataLength > maxItemLength && (
          <div
            onClick={() =>
              position !== 0 && onClick(position + WIDHT_IMG_SLIDER)
            }
            className={position === 0 ? "arrow arrow-unactive" : "arrow"}
          >
            <ArrowLeft />
          </div>
        )}
        <div className="client__list-wrapper">
          <div style={{ marginLeft: position }} className="client__list-slider">
            <ClientList data={filterData} />
          </div>
        </div>
        {dataLength > maxItemLength && (
          <div
            className={
              position ===
              maxItemLength * WIDHT_IMG_SLIDER - dataLength * WIDHT_IMG_SLIDER
                ? "arrow arrow-unactive"
                : "arrow"
            }
            onClick={() =>
              position !==
                maxItemLength * WIDHT_IMG_SLIDER -
                  dataLength * WIDHT_IMG_SLIDER &&
              onClick(position - WIDHT_IMG_SLIDER)
            }
          >
            <ArrowRight />
          </div>
        )}
      </div>
    );
  }
}

export default SliderWrapper;
