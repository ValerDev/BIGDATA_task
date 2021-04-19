import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loader from './Loader.js';
import Comment from './Comment.js';
import css from '../assets/css/components/details.css'
import Rating from './Rating.js'

const Details = () => {
    let { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null)
    const [comment, setComment] = useState({text: '',id: null,movieID: id});
    const [comments, setComments] = useState([]);

        
    const getMovie = () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then(response => response.json())
            .then(data => setMovieDetails(data.data.movie))
    }



    const handleTextareaChange = (e) =>{
        let commentID = Date.now()
        setComment({text:e.target.value, id: commentID, movieID: id})
    }

    const handeSubmit = (e) =>{
        e.preventDefault()
        if(comment.text.length) comments.unshift(comment)
        localStorage.setItem("comments", JSON.stringify(comments));
        setComment({text: '',id: null,movieID: id})
    }
  
    const getComments = () => {
        return localStorage.getItem("comments") ? setComments( JSON.parse(localStorage.getItem("comments"))) : false
    }
    const removeComment = (id,movieID) =>{
       const filteredComments = comments.filter(comment =>comment.id !== id && comment.movieID === movieID)
       setComments(filteredComments)
       localStorage.setItem("comments", JSON.stringify(filteredComments));
    }

    useEffect(() => {
        getMovie()   
        getComments()
    }, [])
    return <div className={css.layout}>
                {movieDetails ? <div className={css.detailsContent}>
                    <h2>{movieDetails.title}</h2>
                    <div className={css.detailblocks}>
                    <div className={css.detailsCard}>
                        <div className={css.detailsImage} style={{backgroundImage: `url(${movieDetails.large_cover_image})`}}></div>
                        <div className={css.detailsInfo}>
                            <p><b>Original title:</b> {movieDetails.title_english}</p>
                            <p><b>Uploaded at:</b> {movieDetails.date_uploaded}</p>
                            <p><b>Language:</b> {movieDetails.language.toUpperCase()}</p>
                            <p><b>Genres:</b> {movieDetails.genres.map((genre,i) => i === movieDetails.genres.length-1 ? genre : `${genre}, `)}</p>
                            {movieDetails.runtime ? <p><b>Runtime:</b> {`${movieDetails.runtime} min.`}</p> : ''}
                            <p><b>Year:</b> {movieDetails.year}</p>
                            <p><b>Downloaded:</b> {movieDetails.download_count} times</p>
                            <p><b>Watch <a target='_blank' href={movieDetails.url}>here</a></b></p>
                            <Rating rating={movieDetails.rating}/>
                            <p className={css.description}>{movieDetails.description_full}</p>
                        </div> 
                    </div>
                    <div className={css.commentsBlock}>
                        <h3>Comments</h3>
                        <form onSubmit={handeSubmit}>
                            <textarea onChange ={handleTextareaChange} placeholder='Comment' value={comment.text}/>
                            <button type='submit'>Add comment</button>
                        </form>
                        <div className={css.commentsList}>
                            {comments.length ? comments.map((comment,i) =><Comment key={i} comment={comment} removeComment={removeComment}/>): <i>No comments yet</i>}
                        </div>
                    </div>
                    </div>
                </div>: <Loader />}
            </div>
}

export default Details;