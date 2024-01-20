import React from 'react'
import "./Info.css"
import { graduate, play} from "../../assets"

const Info = () => {
  return (
    <section id='info' className='dark-gray'>
      <div className='Wrapper'>
        <div className='content-container'>
          <div className='info-content'>
            <img src={graduate} className='grad-img'></img>
            <div className='amount'>23,000+</div>
            <div className='type'>Students</div>
          </div>
          <div className='info-content'>
            <img src={play} className='play-img'></img>
            <div className='amount'>26 Hrs</div>
            <div className='type'>Video Content</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
