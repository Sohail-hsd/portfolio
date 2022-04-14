import React from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
    return (
        <div className="protfolio">
            {/* Headding  */}

            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider */}

            <Swiper slidesPerView={3} spaceBetween={30} grabCursor={true} className='protfolio-slider' >
                <SwiperSlide>
                    <img src={sidebar} alt="Sidebar" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={ecommerce} alt="ecommerce" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={hoc} alt="hoc" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src={musicapp} alt="musicapp" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio