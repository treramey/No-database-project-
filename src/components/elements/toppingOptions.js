import React, { Component } from "react";
import Checkbox from "./CheckBox";

const OPTIONS = [
  "Ham",
  "Beef",
  "Salami",
  "Pepperoni",
  "Tomato Sauce",
  "Marinara Sauce",
  "BBQ Sauce",
  "Parmesan White Sauce",
  "Alfredo Sauce",
  "Shredded Provolone Cheese",
  "Cheddar Cheese",
  "Feta Cheese",
  "Hot Sauce",
  "Jalapeno Peppers",
  "Onions",
  "Banana Peppers",
  "Diced Tomatoes",
  "Black Olives",
  "Mushrooms",
  "Pineapple",
  "Green Peppers",
  "Spinach",
  "Roasted Red Peppers",
  "Green Chili Peppers",
  "Shredded Parmesan Asiago"
];

export default class toppingOptions extends Component {
  constructor() {
    super();
    this.state = {
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxXhange}
      key={option}
    />
  );

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckboxes = items => items.map(this.createCheckbox);

  render() {
    console.log(OPTIONS);
    return (
      <div className="Selections">
        <div>
          <h2>Topping's</h2>
        </div>
        <div>
          <section>
            <form onSubmit={this.handleFormSubmit}>
              <h3>Sauce</h3>
              {this.createCheckboxes(OPTIONS)}
              <h3>Meats</h3>
              {/* {this.createCheckboxes(OPTIONS[2])} */}
              <h3>Non-Meats</h3>
              {/* {this.createCheckboxes()} */}

              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
