import React from 'react'
import './footer.css'
import wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="Wave-Footer" />
        <div className="f-info">
            <span>knight.hsd19@gmail.com</span>
            <div className="f-icons">
                <Instagram color='white' size={50} />
                <Facebook color='white' size={50}/>
                <Github color='white' size={50}/>
            </div>
        </div>
    </div>
  )
}

export default Footer