import React, { Component } from "react";
import { withRouter } from "react-router";
import "./style.css";
class Layout extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}
export default withRouter(Layout);
