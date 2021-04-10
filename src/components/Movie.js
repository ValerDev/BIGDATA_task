import React from 'react';
import css from '../assets/css/components/movie.css';
import {Link} from 'react-router-dom';
import Rating from './Rating';
const Movie = (props) => {
    return(
        <div className={css.movieBlock} >
            <h2 className={css.movieTitle}>{props.movie.title}</h2>
            <div className={css.movieInfo}>
                <Link to={props.link} className={css.linkImage}>
                    <div style={{ backgroundImage: `url(${props.movie.medium_cover_image})` }} className={css.movieImage}></div>
                    <div className={css.hoveredBackground}>
                        <span>View details</span>
                    </div>
                </Link>
                
                <div className={css.details}>
                    <p><b>Original title:</b> {props.movie.title_english}</p>
                    <p><b>Uploaded at:</b> {props.movie.date_uploaded}</p>
                    <p><b>Language:</b> {props.movie.language.toUpperCase()}</p>
                    <p><b>Genres:</b> {props.movie.genres.map((genre,i) => i === props.movie.genres.length-1 ? genre : `${genre}, `)}</p>
                    {props.movie.runtime ? <p><b>Runtime:</b> {`${props.movie.runtime} min.`}</p> : ''}
                    <p><b>Year:</b> {props.movie.year}</p>
                    
                    <Rating rating={props.movie.rating}/>
                </div>
            </div>
            <p className={css.description}>{props.movie.description_full ? props.movie.description_full : 'No description..'}</p>
        </div>
    )
}

export default Movie;