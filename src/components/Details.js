import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loader from './Loader';

const Details = () => {
    let { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null)
    const getMovie = () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(response => response.json())
            .then(data => setMovieDetails(data.data.movie))
    }
    useEffect(() => {
        getMovie()
    }, [])

    console.log(movieDetails);
    return <div style={{ color: "#fff" }}>
        {movieDetails?.title ?? <Loader />}
    </div>;
}

export default Details;