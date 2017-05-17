import React from 'react'

import SwiperSlideImage from './swiper-slide-image'

const defaultImages = [
  require('./../assets/img/tni_banner_1.png'),
  require('./../assets/img/tni_banner_2.png'),
  require('./../assets/img/tni_banner_3.png')
]

export default function SliderContainer ({images}) {
  const selectedImages = images || defaultImages
  return (
    <div className='swiper-container swiper-init'
      data-swiper='{"pagination": ".swiper-pagination", "autoplay": 2000}'>
      <div className='swiper-pagination' />
      <div className='swiper-wrapper'>
        {
          selectedImages.map((image, i) => <SwiperSlideImage key={i} imgSrc={image} />)
        }
      </div>
    </div>
  )
}
