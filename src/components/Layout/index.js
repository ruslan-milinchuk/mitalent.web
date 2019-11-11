import React, { useEffect } from "react";

import { withRouter } from "react-router";

import "./style.css";

const Layout = ({ children, location }) => {
  useEffect(() => {
    if (location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <div className="layout">{children}</div>;
};

export default withRouter(Layout);
