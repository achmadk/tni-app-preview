import React from 'react'

import TextFromArray from './text-from-array'

export default function ParkDescription ({texts}) {
  const contentBlock = (typeof texts === 'string')
    ? texts
    : texts.map((text, i) => <TextFromArray key={i} text={text} />)
  return <div className='content-block'>{contentBlock}</div>
}
