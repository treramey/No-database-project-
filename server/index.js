const express = require("express");
const app = express();

const {
  getPizzas,
  postPizza,
  removePizza,
  updatePizza
} = require("./controllers/pizzaConroller");

const { getPizzaToppings } = require("./controllers/pizzaTopping");

app.use(express.json());

const PORT = 5000;

app.get("/api/pizza/toppings", getPizzaToppings);
app.get("/api/pizza", getPizzas);
app.post("/api/pizza", postPizza);
app.put("/api/pizza/:id", updatePizza);
app.delete("/api/pizza/:id", removePizza);

app.listen(PORT, () => console.log(`Skynet is running on PORT ${PORT}`));
