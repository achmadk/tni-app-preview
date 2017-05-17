import React from 'react'

export default function IslandNavbar ({name}) {
  return (
    <div className='navbar-inner'>
      <div className='left'>
        <a href='#' className='link back icon-only'>
          <i className='icon ion-md-arrow-back' />
        </a>
      </div>
      <div className='center'>{name}</div>
      <div className='right' />
    </div>
  )
}
