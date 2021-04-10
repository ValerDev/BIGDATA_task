import React, { useState, useEffect }  from 'react'
import css from '../assets/css/components/moviesList.css';
import Movie from './Movie.js';
import Loader from './Loader.js'
const MovilesList = () => {
    const [query, setQuery] = useState(1);
    const [movieList, setMovieList] = useState(null);
    const getMovieList = (query) => {
        setMovieList(null);
        fetch(`https://yts.mx/api/v2/list_movies.json?limit=16&page=${query}`)
            .then((response) => response.json())
            .then((json) =>
                setTimeout(() => {
                    setMovieList(json.data);
                }, 1000)
            );
    };
    useEffect(() => {
        getMovieList(query);
    }, [query]);
    return (
        <div className={css.moviesMainContent}>

            <div className={css.moviesList}>
                {movieList?.movies.length ? (
                    movieList.movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            link={`/movie/${movie.id}`}
                            movie={movie}
                        />
                    ))
                ) : (
                    <Loader />
                )}
            </div>
            {movieList?.movies.length ? (
                <div className={css.pages}>
                    {[1, 2, 3].map((page) => (
                        <div
                            className={
                                page === query
                                    ? `${css.page} ${css.pageActive}`
                                    : `${css.page}`
                            }
                            key={page}
                            onClick={() => {
                                setQuery(page);
                            }}
                        >
                            {page}
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default MovilesList;