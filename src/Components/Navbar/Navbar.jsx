import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <a href='#' className='logo'>Sound<span className='red'>DZign</span></a>

      <ul>
        <li><a href='#' className='about'>About</a></li>
        <li><a href='#' className='detail'>Course Details</a></li>
        <li><a href='#' className='blog'>Blog</a></li>
        <li><a href='#' className='people'>Testimonials</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
