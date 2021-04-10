import React, { useState } from 'react';
import css from '../assets/css/components/rating.css'

const Rating = (props) => {
    const [rating, setRating] = useState(props.rating)
    return (
        <div className='rating'>
            {[1,2,3,4,5,6,7,8,9,10].map(star => <span key={star} className={css.star} onClick={() => setRating(star)} >{rating >= star ? `★` : `☆`}</span>)}
        </div>
    )
}
export default Rating;