import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import MovilesList from "./components/MoviesList.js";
import css from "./index.css";
import Details from "./components/Details.js";


const App = () => {
  

  return (
    <div className={css.app}>
      <div className={css.layout}>
        <Route exact path="/">
          <Redirect to={`/movies-list/page_1`} />
        </Route>
        <Route exact path={`/movies-list/page_:pageNumber`}>
          <MovilesList />
        </Route>
        <Route path="/movie/:id">
          <Details />
        </Route>
      </div>
    </div>
  );
};

export default App