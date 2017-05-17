import initCordova from './utils/if-cordova'
import initRouter from './router'

import 'framework7'

require.ensure([], require => {
  if (process.env.MOBILE_PLATFORM !== 'ios') {
    require.ensure([], require => {
      require('./assets/styles/framework7.material.less')
    }, 'style.material')
  } else {
    require.ensure([], require => {
      require('./assets/styles/framework7.ios.less')
    }, 'style.ios')
  }
  require('./assets/styles/app.less')
  require('ionicons/dist/scss/ionicons.scss')
}, 'styles')

initCordova()

initRouter()

export var f7 = new Framework7({
  modalTitle: 'awesome app',
  material: process.env.MOBILE_PLATFORM === 'android',
  animateNavBackIcon: true,
  pushState: process.env.MOBILE_PLATFORM === 'android',
  scrollTopOnStatusbarClick: true,
  uniqueHistoryIgnoreGetParameters: true,
  allowDuplicateUrls: true
})

window.f7 = f7

export var main = f7.addView('.view-main', {
  dynamicNavbar: process.env.MOBILE_PLATFORM === 'ios'
})

window.main = main
