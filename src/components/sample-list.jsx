import React from 'react'

export default function SampleList ({list}) {
  let templist = list.toJS()
  return (
    <li className='item-content'>
      <div className='item-media'>
        <i className='icon ion-md-arrow-back' />
      </div>
      <div className='item-inner'>
        <div className='item-title'>{templist.text}</div>
      </div>
    </li>
  )
}
