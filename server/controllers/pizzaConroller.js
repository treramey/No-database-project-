let pizza = [
  {
    id: "0",
    Name: "The Awsome Pizza",
    Suase: "Awsome Suase",
    Meats: "All The Meats",
    NonMeats: "Some stuff "
  }
];

let id = 1;

const getPizzas = (req, res) => {
  res.status(200).json(pizza);
};

const postPizza = (req, res) => {
  console.log(req.body);
  res.status(200);
};

module.exports = {
  getPizzas,
  postPizza
};
