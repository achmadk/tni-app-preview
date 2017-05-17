import React, {PureComponent} from 'react'

import SliderContainer from './../../../components/slider-container'
import ParkInformations from './../components/park-informations'

export default class ParkDetailsContainer extends PureComponent {
  render () {
    const {park} = this.props
    const {images} = park
    return (
      <div>
        <SliderContainer images={images} />
        <ParkInformations park={park} />
      </div>
    )
  }
}
