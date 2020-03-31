import React, { Component } from "react";
import Checkbox from "./CheckBox";
import Axios from "axios";

export default class toppingOptions extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      toppings: []
    };
  }

  createCheckbox = option => (
    <Checkbox
      label={option}
      // isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleChange}
      key={option}
    />
  );

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = e => {
    const toppings = this.state.toppings;
    let index;
    if (e.target.checked) {
      toppings.push(e.target.value);
    } else {
      index = toppings.indexOf(e.target.value);
      toppings.splice(index, 1);
    }
    console.log(this.state.toppings);
    this.setState({ toppings: toppings });
  };

  handleClick = () => {
    const { Name, toppings } = this.state;
    Axios.post("/api/pizza", {
      Name,
      toppings
    })
      .then(response => {
        console.log(response);
        this.setState({
          Name: "",
          toppings: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deselectAll = () => {
    this.setState({
      Name: "",
      toppings: ""
    });
  };

  createCheckboxes = items => items.map(this.createCheckbox);

  render() {
    return (
      <div className="Selections">
        <div className="createPizza">
          <div className="createPizza__title">
            <h1>
              What shall we create today...
              {/*eslint-disable-next-line*/}
              <span className="emoji">🍕</span>
            </h1>
          </div>
          <div>
            <section>
              <form onSubmit={this.handleFormSubmit}>
                <h3>Name</h3>
                <input
                  type="text"
                  onChange={this.handleNameChange}
                  value={this.state.Name}
                  name="Name"
                />
                <h3>Sauce</h3>
                {this.createCheckboxes(this.props.Sauce)}
                <h3>Meats</h3>
                {this.createCheckboxes(this.props.Meats)}
                <h3>Non-Meats</h3>
                {this.createCheckboxes(this.props.NonMeats)}
                <div className="buttons">
                  <button
                    type="submit"
                    className="btn btn-outline-primary mr-2"
                    onClick={this.deselectAll}
                  >
                    Deselect All
                  </button>
                  <button type="button" onClick={this.handleClick}>
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
