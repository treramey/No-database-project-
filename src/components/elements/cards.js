import React, { Component } from "react";
import Axios from "axios";

export default class cards extends Component {
  constructor() {
    super();
    this.state = {};
  }
  deletePizza = () => {
    Axios.delete(`/api/pizza/${this.props.el.id}`)
      .then(response => {
        this.props.updatePizzas(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    let { el, id } = this.props;

    let list = el.toppings.toString().replace(/,/g, ", ");
    // let list = el.toppings.map(el => {
    //   return <li>{el}</li>;
    // });
    return (
      <figure key={id} className="pizza">
        <div class="pizza__hero">
          <img
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt="pizza"
            class="pizza__img"
          />
        </div>
        <div className="pizza__content">
          <div className="pizza__title">
            <h1 className="pizza__heading">
              {el.Name /*eslint-disable-next-line*/}
              <span className="emoji">👌</span>
            </h1>
          </div>
          <div>
            <p class="pizza__description">
              <span>Yummy pizza with </span>
              {list}
            </p>
            {/* <ul>{list}</ul> */}
          </div>
          <div className="pizza__details">
            <button onClick={this.deletePizza}>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      </figure>
    );
  }
}
