import React from 'react'
import classNames from 'classnames'

import {generateLinkName} from './../functions'

export default function RegionButtonItem ({button}) {
  const {image, text, active} = button
  const cardContent = classNames('card-content region-content', {
    'disabled': !active
  })
  return (
    <div className='col-50 tablet-33'>
      <a href={generateLinkName(text, active)} className='link'>
        <div className='card'>
          <div className={cardContent}>
            <img src={image} />
            <p className='color-black'>{text}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
