import React from 'react'

export default function NavbarNameLinkOnly ({name}) {
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
