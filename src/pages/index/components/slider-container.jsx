import React from 'react'

import SwiperSlideImage from './swiper-slide-image'

export default function SliderContainer ({id, images}) {
  return (
    <div id={id} className='swiper-container swiper-init'
      data-swiper='{"pagination": ".swiper-pagination", "autoplay": 2000}'>
      <div className='swiper-pagination' />
      <div className='swiper-wrapper'>
        {
          images.map((image, i) => <SwiperSlideImage key={i} imgSrc={image} />)
        }
      </div>
    </div>
  )
}
