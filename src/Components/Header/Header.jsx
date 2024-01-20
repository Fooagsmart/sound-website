import React from 'react';
import "./Header.css"
import Navbar from '../navbar/navbar';

const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <div className='cta'>
        <p className='course-name'>Sound Design MasterClass</p>
        <h1>Learn The Art Of Sound Desgin</h1>
        <a href='#' className='demo-btn'>
          Demo Lesson
          </a>
          </div>
      </div>
    </header>
  )
}

export default Header;
