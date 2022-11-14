import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShowReview from '../show/ShowReview';
import useHeadphone from '../UseHeadphone/UseHeadphone';
import './TotalReview.css'

const TotalReview = () => {
    const nevigate = useNavigate();
    const Submit = ()=>{
        nevigate('/more')
    }
   const[headphones,setHeadphone]= useHeadphone()
    return (
        <div>
           <h1 className='review-header'>Customer Reviews</h1>
       <div className='reviews'>
       {
            headphones.map(headphone=><ShowReview headphone={headphone}></ShowReview>)
         }
       </div>
     
  <div>
  <p className='Link'> <button onClick={Submit} type="submit">Show More</button></p>
  </div>
     </div>
       
    );
};

export default TotalReview;