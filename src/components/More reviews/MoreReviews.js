import React from 'react';
import ShowMoreReviews from '../show more reviews/ShowMoreReviews';
import useHeadphone from '../UseHeadphone/UseHeadphone';
import './MoreReviews.css'

const MoreReviews = () => {
    const[headphones,setHeadphone]= useHeadphone()
    return (
        <div className='Map'>
            <h1>Customers Say,</h1>
            <div>
                  {
                headphones.map(headphone=><ShowMoreReviews headphone={headphone} >

                </ShowMoreReviews>)
            }
            </div>
        </div>
      
    );
};

export default MoreReviews;