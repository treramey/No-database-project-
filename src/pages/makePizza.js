import React, { Component } from "react";
import CurrentList from "../components/elements/CurrentList";
import ToppingOptions from "../components/elements/toppingOptions";

export default class makePizza extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="main-column">
        <main>
          <CurrentList />
          <ToppingOptions />
        </main>
      </section>
    );
  }
}
