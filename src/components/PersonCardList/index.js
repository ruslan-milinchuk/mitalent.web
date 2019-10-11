import React, { Component } from "react";
import { withRouter } from "react-router";

import ArrowRight from "../../icons/ArrowRight";

class PersonCardList extends Component {
  render() {
    const { data, history } = this.props;
    return data.map((item, index) => (
      <div key={index} className="client__card">
        <img src={item.mainFoto} alt="client image" />
        <h3 className="client__name">
          {item.firstName} {item.lastName}
        </h3>
        <h4 className="client__role">{item.type}</h4>
        <a
          onClick={() => history.push(`/profile/${item.id}`)}
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
