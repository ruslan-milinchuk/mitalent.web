import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import News from "../../pages/News/";
import Aboute from "../../pages/Aboute";
import Clients from "../../pages/Clients";
import ContactUs from "../../pages/ContactUs";
import Header from "../../pages/Header";
import HomePage from "../../pages/HomePage";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter history={history}>
          <Header />

          <Route path="/home-page" component={HomePage} />
          <Route path="/aboute" component={Aboute} />
          <Route path="/clients" component={Clients} />
          <Route path="/news" component={News} />
          <Route path="/contact-us" component={ContactUs} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
