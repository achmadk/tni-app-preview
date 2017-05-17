import initBackgroundMode from './background-mode'
// import initGoogleAnalytics from './google-analytics'

export default function initCordova () {
  if (checkCordova()) {
    document.addEventListener('deviceready', deviceReadyEvent)
  }
}

function deviceReadyEvent () {
  // initGoogleAnalytics()
  initBackgroundMode()

  document.addEventListener('resume', resumeEvent, false)
  document.addEventListener('pause', pauseEvent, false)
  document.addEventListener('backbutton', backButtonEvent, false)
}

function resumeEvent (event) {
  if (device.platform !== 'iOS') {
    cordova.plugins.backgroundMode.disable()
    console.log('App Resumed')
    console.log(event)
  }
}

function pauseEvent (event) {
  if (device.platform !== 'iOS') {
    let page = $('.view-main')[0].dataset
    console.log(`App Paused on page ${page}`)
    cordova.plugins.backgroundMode.enable()
  }
}

function backButtonEvent (event) {
  let popupDisplayed = $('.popup-overlay').hasClass('modal-overlay-visible')
  let panelDisplayed = $('.panel').hasClass('active')
  if (popupDisplayed) f7.closeModal()
  else if (panelDisplayed) f7.closePanel()
  else {
    switch ($('.view-main')[0].dataset.page) {
      case 'index':
        confirmExitApp()
        break
      default:
        main.router.back()
    }
  }
}

function confirmExitApp () {
  if (checkAndroid()) {
    f7.confirm('Apakah Anda akan keluar :(', () => {
      navigator.app.exitApp()
    })
  }
}

export function checkCordova () {
  return (window.cordova !== undefined)
}

export function checkAndroid () {
  return navigator.userAgent.includes('Android')
}
