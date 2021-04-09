import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from "react-dom";
import Loader from "./components/Loader.js";
import Movie from "./components/Movie.js";
import css from './index.css';

const App = () => {
  const [query, setQuery] = useState(1);
  const [movieList, setMovieList] = useState(null);
  const getMovieList = (query) => {
    setMovieList(null)
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=16&page=${query}`)
      .then(response => response.json())
      .then(json => setTimeout(() => { setMovieList(json.data) }, 1000))
  }
  useEffect(() => {
    getMovieList(query)
  }, [query]);
  console.log(movieList);
  return (
    <Router>
      <div className={css.app}>
        <div className={css.layout}>
          <div className={css.moviesList}>
            {movieList?.movies.length ? movieList.movies.map(movie => <Movie key={movie.id} link={`/movie/${movie.id}`} title={movie.title} image={movie.medium_cover_image} description={movie.description_full} />) : <Loader />}
          </div>
          {movieList?.movies.length ? <div className={css.pages}>
            {[1, 2, 3].map(page => <div className={page === query ? `${css.page} ${css.pageActive}` : `${css.page}`} key={page} onClick={() => { setQuery(page) }}>{page}</div>)}
          </div> : ''}
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));