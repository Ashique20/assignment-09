import React from 'react';
import './ShowMoreReviews.css'

const ShowMoreReviews = (props) => {
    const {name,img,rate,review} = props.headphone
    return (
        <div className='body'>
            <img src={img} alt="" />
           <p> name:{name}</p>
           <p>{review}</p>
           <p>{rate}</p>
        </div>
    );
};

export default ShowMoreReviews;