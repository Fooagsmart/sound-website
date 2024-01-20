import React from 'react';
import "./Testimonial.css"
import {test1, test2, test3} from "../../assets"

const Testimonial = () => {
  return (
    <section id='testimonial' className='dark-gray'>
      <div className='wrapper'>
      <h2>What our Students Say?</h2>

      
      <div className='content-container'>
        <div className='testimonial'>
          <img src={test2} alt="" />
          <div className='reviewer-details'>
          <div className='name'>Peter Adams</div>
          <div className='company-name'>Facebook</div>
          <div className='about'> This is a great course. I got to learn a lot.</div></div></div>

          <div className='testimonial'>
          <img src={test1} alt="" />
          <div className='reviewer-details'>
          <div className='name'>Racheal alph</div>
          <div className='company-name'>Google</div>
          <div className='about'>I Got to Learn a lot about Music Production with a Sincere Heart , Thanks.</div></div></div>

          <div className='testimonial'>
          <img src={test3} alt="" />
          <div className='reviewer-details'>
          <div className='name'>Jacob Mike</div>
          <div className='company-name'>IntMax</div>
          <div className='about'>Awesome Great Job!</div></div></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
