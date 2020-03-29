let pizza = [
  {
    id: 0,
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
  const { Name, Suase, Meats, NonMeats } = req.body;

  pizza.push({
    id,
    Name,
    Suase,
    Meats,
    NonMeats
  });
  id++;
  res.status(200).json(pizza);
};

const removePizza = (req, res) => {
  const { id } = req.params;

  for (let i = 0; i < pizza.length; i++) {
    const element = pizza[i];
    if (element.id === +id) {
      pizza.splice(i, 1);
    }
  }
  res.status(200).json(pizza);
};

const updatePizza = (req, res) => {
  const { id } = req.params;
  const { Name, Suase, Meats, NonMeats } = req.body;

  const targetElement = pizza.findIndex(element => element.id === +id);
  const pizzaEl = pizza[targetElement];

  pizzaEl.Name = Name || pizzaEl.Name;
  pizzaEl.Suase = Suase || pizzaEl.Suase;
  pizzaEl.Meats = Meats || pizzaEl.Meats;
  pizzaEl.NonMeats = NonMeats || pizzaEl.NonMeats;
  res.status(200).json(pizza);
};
module.exports = {
  getPizzas,
  postPizza,
  removePizza,
  updatePizza
};
