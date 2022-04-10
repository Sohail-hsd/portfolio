import React from 'react'
import Card from '../Card/Card'
import './services.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'

const Services = () => {
    return (
        <div className="services">
            <div className="s-left">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Minima vel sequi recusandae labore consequatur. Ipsa at sed mollitia tempore possimus!
                </span>
                <button className="button s-button">Download CV</button>
                {/* Blur */}
                <div className="blur s-blur1" style={{ background: '#ABF1FF94', top:"9rem",left:'-10rem'}} ></div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)', top: '13rem', left: '35rem'}} ></div>
            </div>
            <div className="s-right">
                <div className='cards' style={{ left: '14rem' }}>
                    <Card
                        emoji={heartemoji}
                        heading='Design'
                        detail='Figma, Sketch, Photoshpe, Adobe, Adobe XD'
                    />
                </div>

                <div className='cards' style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={glasses}
                        heading='Developer'
                        detail='JavaScript, React, React-Native, Node.js and Python.'
                        />
                </div>

                <div className='cards' style={{ left: '13rem', top: '19rem' }}>
                    <Card
                        emoji={humble}
                        heading='UX/UI'
                        detail='HTML, CSS ,JavaScript and React, TailWind Css'
                    />
                </div>
            </div>
        </div>
    )
}

export default Services