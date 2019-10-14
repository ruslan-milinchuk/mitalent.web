import React, { Component } from "react";
import PersonCardList from "../PersonCardList";
import "./style.css";

class ClientList extends Component {
  render() {
    const { startPath, data } = this.props;
    return (
      <div className="client__list">
        <PersonCardList data={data} startPath={startPath} />
      </div>
    );
  }
}
export default ClientList;
