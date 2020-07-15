import React from "react";
import Routes from "./routes";
import Header from "./componets/Header";

import "./styles.css";
import { Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
