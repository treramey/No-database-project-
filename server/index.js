const express = require("express");
const app = express();

const { getPizzas, postPizza } = require("./controllers/pizzaConroller");

app.use(express.json());

const PORT = 5000;

app.get("/api/pizza", getPizzas);
app.post("/api/pizza", postPizza);

app.listen(PORT, () => console.log(`Skynet is running on PORT ${PORT}`));
