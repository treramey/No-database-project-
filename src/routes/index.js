import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/elements/navbar";
import makePizza from "../pages/makePizza";
import ratePizza from "../pages/ratePizza";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={makePizza}></Route>
        <Route path="/rate" component={ratePizza}></Route>
        <Route component={makePizza} />
      </Switch>
    </BrowserRouter>
  );
}
