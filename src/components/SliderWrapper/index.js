import React, { Component } from "react";
import windowSize from "react-window-size";

import ArrowLeft from "../../icons/ArrowLeft";
import ClientList from "../ClientList";
import ArrowRight from "../../icons/ArrowRight";

const WIDHT_IMG_SLIDER = 250;

class SliderWrapper extends Component {
  state = {
    maxItemLength: 4
  };

  componentDidMount() {
    this.changeState();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.windowWidth !== nextProps.windowWidth) {
      this.changeState();
    }

    return this.props.windowWidth === nextProps.windowWidth;
  }

  render() {
    const { position, filterData, onClick, dataLength, startPath } = this.props;
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
            <ClientList data={filterData} startPath={startPath} />
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

  changeState = () => {
    if (this.props.windowWidth > 1111) {
      return this.setState({
        maxItemLength: 4
      });
    }
    if (869 < this.props.windowWidth && this.props.windowWidth <= 1111) {
      return this.setState({
        maxItemLength: 3
      });
    }
    if (619 < this.props.windowWidth && this.props.windowWidth <= 869) {
      return this.setState({
        maxItemLength: 2
      });
    }
    if (360 < this.props.windowWidth && this.props.windowWidth <= 619) {
      return this.setState({
        maxItemLength: 1
      });
    }
  };
}

export default windowSize(SliderWrapper);
