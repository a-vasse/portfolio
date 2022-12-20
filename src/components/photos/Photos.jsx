import React from 'react';
import "./photos.css"
import { Data } from './Data';

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const Photos = () => {
  return (
    <section className="photos container section" id="photos">
      <h2 className="section-title">My Photos</h2>
      <span className="section-subtitle">I also like taking photos occasionally. Here are a few of them!</span>

      <Swiper className="photos-container" loop={true} grabCursor={true} spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: { slidesPerView: 2},
          768: {slidesPerView: 3, spaceBetween: 24 },
        }}
        modules={[Pagination]}>

        {Data.map(({id, image, title}) => {
          return (
            <SwiperSlide className="photos-card" key={id}>
              <img src={image} alt="" className="photos-img"/>
              <h3 className="photos-name">{title}</h3>
              <i className="enlarge-button fa-solid fa-magnifying-glass-plus"></i>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Photos;
