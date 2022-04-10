import React from 'react'
import './floating.css'

const Floating = ({image, text1, text2}) => {
  return (
    <div className="floatingDiv">
        <img src={image} alt="img" />
        <span>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default Floating