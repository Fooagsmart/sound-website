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

          <div className='post'>
          <div  className='tag'>Mixing</div>
            <a href='#'><img src={female} alt="" /></a>
            <a href='#'><h3 className='post-title'>
              How to Mix Guiters Effectively</h3></a>
          </div>

          <div className='post'>
          <div  className='tag'>VciK</div>
            <a href='#'><img src={female2} alt="" /></a>
            <a href='#'><h3 className='post-title'>
              The Real Power Of Harmony in Music Production</h3></a>
          </div>
        </div>

        <div className='btn-container'>
          <a href='#' className='all-post-btn'>All Posts</a>
        </div>
      </div>
      
    </section>
  )
}

export default Blog
