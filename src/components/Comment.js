import React from 'react';
import { useParams } from 'react-router';
import css from '../assets/css/components/comment.css';

const Comment = (props) =>{
    let movieID = useParams()
    return(
        <div className={css.comment}>
            {movieID.id === props.comment.movieID ? <div className={css.text}>{props.comment.text} <span className={css.removeComment} onClick={()=>{props.removeComment(props.comment.id, props.comment.movieID)}}>🗙</span></div> : false}
        </div>
    )
}

export default Comment;