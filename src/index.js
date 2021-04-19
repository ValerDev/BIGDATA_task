import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <App />
    </Switch>
  </Router>,
  document.querySelector("#root")
);
