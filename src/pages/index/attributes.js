import React from 'react'

import IndexContainer from './containers/index-container'
// import IndexToolbar from './components/index-toolbar'

export const indexComponentData = [{
  component: <IndexContainer />,
  documentId: 'index-content'
// }, {
//   component: <IndexToolbar />,
//   documentId: 'index-toolbar'
}]

export const images = [
  require('./../../assets/img/tni_banner_1.png'),
  require('./../../assets/img/tni_banner_2.png'),
  require('./../../assets/img/tni_banner_3.png')
]

export const regionButtons = [{
  image: require('./../../assets/img/icon_sumatera.png'),
  text: 'SUMATERA',
  active: true
}, {
  image: require('./../../assets/img/icon_jawa.png'),
  text: 'JAWA',
  active: true
}, {
  image: require('./../../assets/img/icon_balinusra.png'),
  text: 'BALI NUSA TENGGARA',
  active: false
}, {
  image: require('./../../assets/img/icon_kalimantan.png'),
  text: 'KALIMANTAN',
  active: false
}, {
  image: require('./../../assets/img/icon_sulawesi.png'),
  text: 'SULAWESI',
  active: false
}, {
  image: require('./../../assets/img/icon_malukupapua.png'),
  text: 'MALUKU PAPUA',
  active: false
}]
