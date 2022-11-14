import React from 'react';
import CustomLink from '../customlink/Customlink';
import './Header.css'

const Header = () => {
    return (
       
            <nav className='header'>
            
              <CustomLink to="/" >Home</CustomLink>
                <CustomLink
                 to="/more">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
           
            </nav>
      
    );
};

export default Header;