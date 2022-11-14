import React from 'react';
import TotalReview from '../Total Review/TotalReview';

import './Rate.css'

const Rate = () => {

    return (
       
        <div className='Rate-Color'>
           <div className='start'>
           <div className='detail'>
                <h1>Headphone for Rockstars</h1>
                <h1>With <span className='text'>Best Experience</span></h1>
                <p>Our most favourate rockstars Bassbaba Sumon,zohad and Avoid Rafa bought the headphone.Lets know about there Experience.</p>

                <button > Demo</button>
            </div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/01/94/44/95/240_F_194449513_uWLw8YF931Swm2jzfPtRvWdxCRhRkNYU.jpg" alt="" />
            </div>
           </div>
           <div>
            <TotalReview></TotalReview>
           </div>

            
        </div>
        
        
  
       
    );
    
    
    
};


export default Rate;