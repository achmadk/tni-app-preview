import Dom7 from 'dom7'

export const $ = Dom7
window.$ = $

export default function initRouter () {
  $(document).on('page:beforeinit', ({detail}) => {
    let {page} = detail
    load(page)
  })

  $(document).on('page:back', ({detail}) => {
    let {page} = detail
    let {name} = page
    afterBack(name)
  })
}

export function load ({name, query}) {
  let page = getPage(name)
  page.init(query)
}

export function afterBack (moduleName) {
  let page = getPage(moduleName)
  page.afterBack()
}

export function sendMessage (moduleName, message) {
  let page = getPage(moduleName)
  page.sendMessage(message)
}

function getPage (name) {
  switch (name) {
    case 'index':
      return require('./pages/index/router')
    case 'about':
      return require('./pages/about/router')
    case 'island':
      return require('./pages/island/router')
    case 'park-details':
      return require('./pages/park-details/router')
  }
}
