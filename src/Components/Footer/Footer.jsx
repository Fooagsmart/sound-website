import React from 'react';
import "./Footer.css"
import {facebook,twitter,instagram} from "../../assets"

const Footer = () => {
  return (
    <footer id='footer' className='pink'>
      <div className='wrapper'>
        <div className='flex-footer'>
          <div className='links'>
      <a href='#' className='logo'>Sound<span className='red'>DZign</span></a>
      <div className='social'>
        <a href='#'><img src={facebook} alt="" /></a>
        <a href='#'><img src={twitter} alt="" /></a>
        <a href='#'><img src={instagram} alt="" /></a>
        </div>

        <div className='copywrite'>
          <p>This website is designed by Fooagsmart © 2024 </p>
        </div>
        </div>

        <div className='links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className='links'>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href='#' >adunmofestus@gmail.com</a>
            </li>
            <li><a href='#'> +234 906 0982 855</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
