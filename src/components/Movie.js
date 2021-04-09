import React from 'react';
import css from '../assets/css/components/movie.css';
import {Link} from 'react-router-dom';
const Movie = (props) => {
    return(
        <div className={css.movieBlock} >
            <h2 className={css.movieTitle}>{props.title}</h2>
            <div className={css.movieInfo}>
                <Link to={props.link}>
                    <div style={{ backgroundImage: `url(${props.image})` }} className={css.movieImage}></div>
                </Link>
            </div>
            <p className={css.description}>{props.description}</p>
        </div>
    )
}

export default Movie;