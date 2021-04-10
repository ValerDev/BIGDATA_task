import React from "react";

import MovilesList from "./components/MoviesList.js";
import css from "./index.css";

const App = () => {
  return (
      <div className={css.app}>
        <div className={css.layout}>
          <MovilesList />
        </div>
      </div>
  );
};

export default App