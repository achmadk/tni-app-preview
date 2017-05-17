import React from 'react'

import ParkInformationList from './park-information-list'

import {getInformation} from './../functions'

export default function ParkInformations ({park}) {
  const necessaryInformation = getInformation(park)
  console.log(necessaryInformation)
  return (
    <div>
      {
        necessaryInformation.map((info, i) => <ParkInformationList key={i} info={info} />)
      }
    </div>
  )
}
