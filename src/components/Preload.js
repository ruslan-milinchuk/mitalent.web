import React, { createContext, Component } from "react";
import apiFetch from "../utils/apiFetch";
export const { Provider, Consumer } = createContext("");

class Preload extends Component {
  state = { articles: [], people: [] };

  async componentDidMount() {
    const articles = await apiFetch("/articles");
    const people = await apiFetch("/people");
    this.setState({ articles, people });
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default Preload;
