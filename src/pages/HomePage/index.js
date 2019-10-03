import React, { Component } from "react";
import articles from "../../fixtures/articles.js";
import OurStoriesArticles from "../../components/OurStoriesArticles";

class HomePage extends Component {
  render() {
    let newArticles = articles.slice(0, 7);

    return (
      <div className="our-stories">
        <OurStoriesArticles newArticles={newArticles} className="our-stories" />
      </div>
    );
  }
}

export default HomePage;
