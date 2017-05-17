import React from 'react'

import RegionButtonItem from './region-button-item'

export default function RegionButtons ({buttons}) {
  return (
    <div className='row no-gutter'>
      {
        buttons.map((button, i) => <RegionButtonItem key={i} button={button} />)
      }
    </div>
  )
}
