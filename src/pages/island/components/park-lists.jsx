import React from 'react'

import ParkList from './park-list'

export default function ParkLists ({parks}) {
  const activedParks = parks.filter(({active}) => active)
  return activedParks.length && (
    <div className='row no-gutter justify-content-flex-start'>
      {
        activedParks.map((park, i) => <ParkList key={i} park={park} />)
      }
    </div>
  )
}
