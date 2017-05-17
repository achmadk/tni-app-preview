import renderComponent from './../../utils/render-components'

import {islandComponentData} from './functions'

export function init ({slug}) {
  console.log('index.html has loaded')
  renderComponent(islandComponentData(slug))
}

export function afterBack () {

}

export function sendMessage (message) {
  console.log(message)
}
