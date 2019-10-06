import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
class Logo extends Component {
  render() {
    const { history } = this.props;
    const { pathname } = history.location;
    return (
      <h1>
        <Link
          className={pathname === "/" ? "logo logo__active" : "logo"}
          to="/"
        >
          <span>MI</span>
          <span className="logo__spasing">TALENT</span>
        </Link>
      </h1>
    );
  }
}

export default withRouter(Logo);
