import React, { Component } from "react";
import windowSize from "react-window-size";
import classNames from "classnames";

import ArrowLeft from "../../icons/ArrowLeft";
import ClientList from "../ClientList";
import ArrowRight from "../../icons/ArrowRight";

const WIDTH_IMG_SLIDER = 250;

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
    const { position, filterData, onClick, startPath } = this.props;
    const dataLength = filterData.length
    const { maxItemLength } = this.state;
    return (
      <div className="customer-groups__slider">
        {dataLength > maxItemLength && (
          <div
            onClick={() =>
              position !== 0 && onClick(position + WIDTH_IMG_SLIDER)
            }
            className={classNames(
              { "arrow-unactive": position === 0 },
              { arrow: true }
            )}
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
            className={classNames(
              {
                "arrow-unactive":
                  position ===
                  maxItemLength * WIDTH_IMG_SLIDER -
                    dataLength * WIDTH_IMG_SLIDER
              },
              { arrow: true }
            )}
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
