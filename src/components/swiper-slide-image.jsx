import React from 'react'

export default function SwiperSlideImage ({imgSrc}) {
  return (
    <div className='swiper-slide'>
      <img src={imgSrc} />
    </div>
  )
}
