import React, { Component } from "react";
import Cards from "../components/elements/cards";
import Axios from "axios";

export default class ratePizza extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: []
    };
  }
  componentDidMount() {
    Axios.get("/api/pizza/")
      .then(response => {
        this.setState({ pizzas: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePizzas = newArr => {
    this.setState({ pizzas: newArr });
  };

  render() {
    let mappedCards = this.state.pizzas.map((el, i) => {
      console.log(el);
      return <Cards el={el} key={i} updatePizzas={this.updatePizzas} />;
    });
    return (
      <section className="main-column">
        <main>{mappedCards}</main>
      </section>
    );
  }
}
