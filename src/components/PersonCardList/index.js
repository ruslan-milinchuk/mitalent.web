import React, { Component } from "react";
import { withRouter } from "react-router";

import ArrowRight from "../../icons/ArrowRight";
import { isEmpty } from "../../utils/isEmpty";
import Loading from "../Loading";

class PersonCardList extends Component {
  render() {
    const { data, history, startPath } = this.props;
    if (isEmpty(data)) {
      return <Loading />;
    }
    console.log("data", data);
    let startPathCheck = "";
    if (startPath !== undefined) {
      startPathCheck = startPath;
    }
    return data.map((item, index) => (
      <div key={index} className="client__card">
        <img src={`${startPathCheck}${item.mainPhoto}`} alt="client image" />
        <h3 className="client__name">
          {item.firstName} {item.lastName}
        </h3>
        <h4 className="client__role">{item.type}</h4>
        <a
          onClick={() => history.push(`/profile/${item.uuid}`)}
          className="client__link"
          href={item.link}
        >
          <ArrowRight />
        </a>
      </div>
    ));
  }
}

export default withRouter(PersonCardList);
