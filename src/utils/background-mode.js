import {BACKGROUND_MODE_DEFAULT_NOTIFICATION} from './constants'

export default function initBackgroundMode () {
  cordova.plugins.backgroundMode.setDefaults(BACKGROUND_MODE_DEFAULT_NOTIFICATION)
}
