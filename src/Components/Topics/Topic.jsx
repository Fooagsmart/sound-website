import React, { useState } from 'react';
import "./Topic.css"
import {console,right, console1, console2 , console3} from "../../assets"

const Topic = () => {

  const [ currentImage, setCurrentImage] = useState(console);
  return (
    <section id='topic' className='black'>
      <div className='wrapper'>
         <h2>What will you learn?</h2>
         <div className='content-container'>
          <ul className='topics-list'>
            <li onMouseEnter={()=> setCurrentImage(console3)}>What are Frequencies</li>
            <li onMouseEnter={() => setCurrentImage(console2)}>Using the Daw</li>
            <li onMouseEnter={() => setCurrentImage(console3)}>Vocals Processing</li>
            <li onMouseEnter={() => setCurrentImage(console2)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(console1)}>mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(console)}>Mastering</li>
          </ul>

          <div className='topic-image'>
            <img src={currentImage}></img>
          </div>
         </div>
      </div>
    </section>
  )
}

export default Topic
