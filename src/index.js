import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom";
import Details from "./components/Details.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/movie/:id">
        <Details />
      </Route>
    </Switch>
  </Router>,
  document.querySelector("#root")
);
