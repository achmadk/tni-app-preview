import React from 'react'

import ParkDescription from './park-description'

export default function ParkInformationList ({info}) {
  const {title, texts} = info
  return (
    <div>
      <div className='content-block-title'>{title}</div>
      <ParkDescription texts={texts} />
    </div>
  )
}
