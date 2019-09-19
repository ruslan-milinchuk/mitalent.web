import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import News from "../../pages/News/";
import About from "../../pages/About";
import Clients from "../../pages/Clients";
import ContactUs from "../../pages/ContactUs";
import HomePage from "../../pages/HomePage";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route exact path="/" component={HomePage} />
          <Route path="/aboute" component={About} />
          <Route path="/clients" component={Clients} />
          <Route path="/news" component={News} />
          <Route path="/contact-us" component={ContactUs} />
        </Router>
      </div>
    );
  }
}

export default App;
