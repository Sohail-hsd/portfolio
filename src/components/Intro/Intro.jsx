import React from 'react'
import './intro.css'
import instagram from '../../img/instagram.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import Floating from '../FloatingDiv/Floating'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-name">
          <span>Hy! i am </span>
          <span>Sohail HSD</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas quas accusamus vel cum ex!</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-left-icons">
          <img src={instagram} alt='Instagram' />
          <img src={github} alt='github' />
          <img src={linkedin} alt='linkedin' />
        </div>

      </div>
      <div className="i-right">
        <img src={Vector1} alt='Vector1' />
        <img src={Vector2} alt='Vector2' />
        <img src={boy} alt='boy' />
        <img src={glassesimoji} alt='glassesimoji' />

        <div style={{top:'-4%', left:'68%'}}>
          <Floating image={crown} text1='Web' text2='Developer' />
        </div>
        <div style={{top:'18rem', left:'0rem'}}>
          <Floating image={thumbup} text1='Best Design' text2='Award' />
        </div>
        {/* Blur divs */}
        <div className="blur"></div>
        <div className="blur2"></div>
      </div>
    </div>
  )
}

export default Intro