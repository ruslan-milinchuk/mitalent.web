import React from "react";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import News from "./pages/News";
import About from "./pages/About";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={About} />
    <Route path="/clients" component={Clients} />
    <Route path="/news" component={News} />
    <Route path="/contact-us" component={ContactUs} />
  </Router>
);

export default App;
