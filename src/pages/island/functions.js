import React from 'react'

import NavbarNameLinkOnly from './../../components/navbar-name-link-only'
import IslandContainer from './containers/island-container'

import {indonesiaNationalPark} from './attributes'

export function islandComponentData (slug) {
  const {name, parks} = indonesiaNationalPark.find(data => data.slug === slug)
  console.log(name)
  return [{
    component: <NavbarNameLinkOnly name={name} />,
    documentId: 'island-navbar'
  }, {
    component: <IslandContainer parks={parks} />,
    documentId: 'island-content'
  }]
}
