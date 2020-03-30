const pizzaToppings = {
  Meats: ["Ham", "Beef", "Salami", "Pepperoni"],
  Sauce: [
    "Tomato Sauce",
    "Marinara Sauce",
    "BBQ Sauce",
    "Parmesan White Sauce",
    "Alfredo Sauce"
  ],
  NonMeats: [
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
  ]
};

const getPizzaToppings = (req, res) => {
  res.status(200).json(pizzaToppings);
};
module.exports = {
  getPizzaToppings
};
