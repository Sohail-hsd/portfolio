import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
// import profile1 from '../../img/profile1.jpg'
// import profile2 from '../../img/profile2.jpg'
// import profile3 from '../../img/profile3.jpg'
// import profile4 from '../../img/profile4.jpg'

const Testimonials = () => {
    const clients = [
        {
            img: 'https://www.w3schools.com/w3images/avatar6.png',
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit repellendus voluptatum rerum perspiciatis placeat sapiente at iusto laudantium dolore nobis qui et, blanditiis rem recusandae aliquam! Perferendis, ullam recusandae."
        },
        {
            img: 'https://www.w3schools.com/howto/img_avatar.png',
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit repellendus voluptatum rerum perspiciatis placeat sapiente at iusto laudantium dolore nobis qui et, blanditiis rem recusandae aliquam! Perferendis, ullam recusandae."
        },
        {
            img: 'https://www.w3schools.com/howto/img_avatar2.png',
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit repellendus voluptatum rerum perspiciatis placeat sapiente at iusto laudantium dolore nobis qui et, blanditiis rem recusandae aliquam! Perferendis, ullam recusandae."
        },
        {
            img:'https://www.w3schools.com/w3images/avatar2.png',
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugit repellendus voluptatum rerum perspiciatis placeat sapiente at iusto laudantium dolore nobis qui et, blanditiis rem recusandae aliquam! Perferendis, ullam recusandae."
        },
    ]

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Execptional work </span>
                <span>Form me</span>
                {/* Blur */}
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>

            {/* Swiper Slide */}
            <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }} >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt={client.img} />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Testimonials