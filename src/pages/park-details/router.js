import renderComponent, {unmountComponent} from './../../utils/render-components'

import {componentData, changeNavbarColor} from './functions'

let getId = 0

export function init ({id}) {
  getId = id
  console.log('index.html has loaded')
  renderComponent(componentData(id))

  changeNavbarColor()
}

export function afterBack () {
  unmountComponent(componentData(getId))
}

export function sendMessage (message) {
  console.log(message)
}
