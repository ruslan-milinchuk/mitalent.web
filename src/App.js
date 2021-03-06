import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import News from "./pages/News";
import About from "./pages/About";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Preload from "./components/Preload";
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Header />
    <Preload>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/clients" component={Clients} />
        <Route exact path="/news" component={News} />
        <Route path="/news/:id" component={Article} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/profile/:id" component={Profile} />
      </Layout>
    </Preload>
    <Footer />
  </Router>
);

export default App;
