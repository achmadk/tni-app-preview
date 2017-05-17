import React from 'react'

import NavbarNameLinkOnly from './../../components/navbar-name-link-only'
import ParkDetailsContainer from './containers/park-details-container'

import {allParks} from './attributes'

export function componentData (id) {
  const selectedPark = allParks.find((park) => park.id === parseInt(id))
  return [{
    component: <NavbarNameLinkOnly name={selectedPark.name} />,
    documentId: 'park-details-navbar'
  }, {
    component: <ParkDetailsContainer park={selectedPark} />,
    documentId: 'park-details-content'
  }]
}

export function changeNavbarColor () {
  let scrollableComponent = $('#park-details-content')
  let navbarContainer = $('#park-details-navbar')

  scrollableComponent.on('scroll', () => {
    let imageHeight = $('.swiper-container').height() - 56
    let constant = scrollableComponent.scrollTop() / imageHeight
    let opacity = 1 - constant
    if (constant >= 1) {
      navbarContainer.removeClass('navbar-transparent')
    } else {
      navbarContainer.addClass('navbar-transparent')
    }
    // navbarContainer.css('background-color',`rgba(164,25,27,${constant})`)
    $('.swiper-container img').css('opacity', opacity >= 0 ? opacity : 0)
  })
}

const selectedInfo = ['description', 'accessibility', 'interest', 'flora', 'fauna', 'history_sites']

export function getInformation (park) {
  let result = []
  for (let object in park) {
    if (selectedInfo.includes(object) && (park[object].length > 0)) {
      result.push({
        title: convertTitle(object),
        texts: park[object]
      })
    }
  }
  return result
}

function convertTitle (title) {
  switch (title) {
    case 'description':
      return 'Deskripsi'
    case 'accessibility':
      return 'Aksesibilitas'
    case 'flora':
      return 'Flora'
    case 'fauna':
      return 'Fauna'
    case 'interest':
      return 'Daya Tarik Wisata'
    case 'history_sites':
      return 'Situs Sejarah'
  }
}
