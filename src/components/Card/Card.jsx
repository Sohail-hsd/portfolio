import React from 'react'
import './card.css'
const Card = ({emoji,heading,detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="Emoji" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">
            Learn More
        </button>
    </div>
  )
}

export default Card