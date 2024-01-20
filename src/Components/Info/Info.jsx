import React from 'react'
import "./Info.css"
import { graduate, play} from "../../assets"

const Info = () => {
  return (
    <section id='info' className='dark-gray'>
      <div className='Wrapper'>
        <div className='content-container'>
          <div className='grad'>
            <img src={graduate} className='grad-img'></img>
            <h1>23,000+</h1>
            <p>Students</p>
          </div>
          <div className='play'>
            <img src={play} className='play-img'></img>
            <h1>26 Hrs</h1>
            <p>Video Content</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
