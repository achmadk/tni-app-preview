import React, {PureComponent} from 'react'

import SliderContainer from './../../../components/slider-container'
import RegionButtons from './../components/region-buttons'

import {regionButtons} from './../attributes'

export default class IndexContainer extends PureComponent {
  render () {
    return (
      <div>
        <SliderContainer />
        <RegionButtons buttons={regionButtons} />
      </div>
    )
  }
}
