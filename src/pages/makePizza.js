import React, { Component } from "react";
// import CurrentList from "../components/elements/CurrentList";
import ToppingOptions from "../components/elements/toppingOptions";
import Axios from "axios";

export default class makePizza extends Component {
  constructor() {
    super();
    this.state = {
      Meats: [],
      Sauce: [],
      NonMeats: []
    };
  }
  componentDidMount() {
    Axios.get("/api/pizza/toppings")
      .then(response => {
        console.log(response);
        this.setState({
          Meats: response.data.Meats,
          Sauce: response.data.Sauce,
          NonMeats: response.data.NonMeats
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <section className="main-column">
        <main>
          {/* <CurrentList /> */}
          <ToppingOptions
            Meats={this.state.Meats}
            Sauce={this.state.Sauce}
            NonMeats={this.state.NonMeats}
          />
        </main>
      </section>
    );
  }
}
