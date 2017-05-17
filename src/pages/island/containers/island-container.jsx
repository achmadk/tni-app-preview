import React, {PureComponent} from 'react'

import SliderContainer from './../../../components/slider-container'
import ParkLists from './../components/park-lists'

export default class IslandContainer extends PureComponent {
  render () {
    const {parks} = this.props
    console.log(parks)
    return (
      <div>
        <SliderContainer />
        <ParkLists parks={parks} />
      </div>
    )
  }
}
