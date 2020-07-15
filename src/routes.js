import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Client from "./pages/client";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/clients/:id" component={Client}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
