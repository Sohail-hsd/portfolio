import React from 'react'
import './works.css'
import upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'

const Works = () => {
    return (
        <div className="works">
            <div className="s-left">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Minima vel sequi recusandae labore consequatur. Ipsa at sed mollitia tempore possimus!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br />
                    Minima vel sequi recusandae labore consequatur. Ipsa at sed mollitia tempore possimus!
                </span>
                <br />
                <br />
                <button className="button s-button">Hire me!</button>
                {/* Blur */}
                <div className="blur s-blur1" style={{ background: '#ABF1FF94', top: "9rem", left: '-10rem' }} ></div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)', top: '13rem', left: '35rem' }} ></div>
            </div>

            {/* Right Side */}
            <div className="r-work">
                <div className="mainCircle">
                    <div className="secCircle">
                        <img src={upwork} alt="upwork" />
                    </div>
                    <div className="secCircle">
                        <img src={facebook} alt="Facebook" />
                    </div>
                    <div className="secCircle">
                        <img src={amazon} alt="amazon" />
                    </div>
                    <div className="secCircle">
                        <img src={shopify} alt="shopify" />
                    </div>
                    <div className="secCircle">
                        <img src={fiverr} alt="fiverr" />
                    </div>
                </div>
                {/* Backgroung cirlces */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle">yellow circle</div>
            </div>
        </div>
    )
}

export default Works