
import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className ='hero'>
    
     <div className ='hero-left'>
        <h2>NEW ARRIVAS ONLY</h2>

       <div>
          <div className='hand-icon'>
            <p>New</p>
            <img src = {hand_icon} alt=""/>
          </div>

          <p>Collections</p>
          <p>for everyone</p>
       </div>

        {/* button to get to latest collection */}
        
        <div className ='hero-latest-btn'>
            <div> Latest Collections</div>
            <img src = {arrow_icon } alt = ""/>
        </div>
        
      </div>  
    
      <div className ='hero-right'>
        <img src = {hero_img}cd  alt ="" />
      </div>

    </div>
  );
};

export default Hero ;

