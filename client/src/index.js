import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/Psyvote" exact component={App} />
    <Route path="/Psyvote/home" exact component={Home} />
  </BrowserRouter>,
  document.getElementById("root")
);
