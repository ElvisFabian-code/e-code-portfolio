import React from 'react'
import "./Certifications.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../../data';
import { Autoplay } from 'swiper/modules';
import "swiper/css"
const Certifications = () => {
  return (
    <section id='certifications'>
      <div className="section__wrapper">
        <div className="flex__center section__header">
          <h2 className="shine">Certifications</h2>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={40}
        autoplay={true}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{700:{slidesPerView: 2 }}}
        >
          {testimonials.map(({avatar,name,review}, index)=>(
            <SwiperSlide className='card certifications' key={index}>
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <h3 className="name">{name}</h3>
              <p className="text__muted review">{review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Certifications
