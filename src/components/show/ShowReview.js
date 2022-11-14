import React from 'react';
import './ShowReview.css'

const ShowReview = (props) => {
    const {name,img,rate,review} = props.headphone; 
    return (
        <div className='stars'>
            <p>{review}</p>
            <img src={img} alt="" />
         <p>   Name:{name}</p>
           <p> Rating{rate}</p>
        </div>
    );
};

export default ShowReview;