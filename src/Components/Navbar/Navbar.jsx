import React, {useState} from 'react';
import "./Navbar.css"
import {dropdown, close} from "../../assets"

const Navbar = () => {

  const [isActive, setIsActive] = useState (false);
  return (
   <> <nav>
      <a href='#' className='logo'>Sound<span className='red'>DZign</span></a>

      <ul>
      <li><a href='#topic' className='detail'>Course Details</a></li>
        <li><a href='#info' className='about'>About</a></li>
        <li><a href='#blog' className='blog'>Blog</a></li>
        <li><a href='#testimonial' className='people'>Testimonials</a></li>
      </ul>

      <div onClick={() => setIsActive(true)} className='menu-icon'>
        <img src={dropdown} alt="" />
      </div>
    </nav>

    <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
      <div onClick={() => setIsActive(false)} className='close-icon'>
        <img src={close} alt="" />
      </div>
      <ul className='menu-item '>
      <li><a href='#topic' className='detail'>Course Details</a></li>
        <li><a href='#info' className='about'>About</a></li>
        <li><a href='#blog' className='blog'>Blog</a></li>
        <li><a href='#testimonial' className='people'>Testimonials</a></li>
      </ul>
    </div> </>
  )
}

export default Navbar
