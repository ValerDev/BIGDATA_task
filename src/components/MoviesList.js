import React, { useState, useEffect } from 'react'
import css from '../assets/css/components/moviesList.css';
import Movie from './Movie.js';
import Loader from './Loader.js'
import {useParams , Link} from 'react-router-dom';

const MovilesList = () => {
    let { pageNumber } = useParams();

    const [query, setQuery] = useState(+pageNumber);
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
                        <Link to={`/movies-list/page_${page}`} key={page}> <div className={page === +pageNumber ? `${css.page} ${css.pageActive}` : `${css.page}`}  onClick={() => {setQuery(page);}}>{page}</div></Link>
                    ))}
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default MovilesList;