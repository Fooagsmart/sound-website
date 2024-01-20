import React from 'react';
import "./Blog.css"
import {male ,female, female2 } from "../../assets"

const Blog = () => {
  return (
    <section id='blog' className='pink'>
      <div className='wrapper'>
        <h2 className='light'>Latest Posts</h2>
        <div className='content-container'>
          <div className='post'>
            <div  className='tag'>Daw</div>
            <a href='#'><img src={male} alt="" /></a>
            <a href='#'><h3 className='post-title'>
              How to Use Drum Machine in Logic pro X</h3></a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Blog
