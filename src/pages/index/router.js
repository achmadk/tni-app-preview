import renderComponent from './../../utils/render-components'

import {indexComponentData} from './attributes'

export function init () {
  console.log('index.html has loaded')
  renderComponent(indexComponentData)
}

export function afterBack () {

}

export function sendMessage (message) {
  console.log(message)
}
