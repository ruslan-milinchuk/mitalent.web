import React, { Component } from "react";
import articles from "../../fixtures/articles.js";
import OurStoriesArticles from "../../components/OurStoriesArticles";

class HomePage extends Component {
  render() {
    let newArticles = articles.slice(0, 7);

    console.log("newArticle", newArticles);
    console.log("articles", articles);
    return (
      <div className="our-stories">
        <OurStoriesArticles newArticles={newArticles} />
      </div>
    );
  }
}

export default HomePage;
