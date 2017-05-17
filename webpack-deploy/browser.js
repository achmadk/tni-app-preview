// require('react-hot-loader/patch');

const webpack = require('webpack'),
path = require('path'),
BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
LiveReloadPlugin = require('webpack-livereload-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
WriteFilePlugin = require('write-file-webpack-plugin')

var webpackConfig = require('../webpack.config')

// webpackConfig.entry.shift('react-hot-loader/patch');

webpackConfig.entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
  'webpack/hot/only-dev-server',
  path.resolve(__dirname, '../src/index.jsx')
  // 'webpack/hot/only-dev-server', // Reload only the dev server
]

// webpackConfig.module.rules[0].use = [
//   'react-hot-loader/webpack',
//   'babel-loader'
// ]

webpackConfig.output = {
  path: path.resolve(__dirname, '../temp'),
  publicPath: '/',
  filename: './js/bundle.js'
}

webpackConfig.devServer = {
  contentBase: path.resolve(__dirname, '../temp'),
  publicPath: '/',
  hot: true
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#hmr-communication
   * In webpack 1 the update signal used the Web Messaging API (postMessage).
   * Webpack 2 uses a standard event emitter to receive the event.
   * This means WebSocket must be inline in the bundle.
   * webpack-dev-server has inlined mode as default now.
   * This should allow to use the webpack-dev-server to update code in WebWorkers.
   */
  // inline: true
}

webpackConfig.devtool = 'source-map'

webpackConfig.plugins.unshift(
  // new CleanWebpackPlugin([path.resolve(__dirname, '../temp')], {
  //   root: path.resolve(__dirname, '..'),
  //   verbose: true
  // }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.EnvironmentPlugin({
    'MOBILE_PLATFORM': process.env.MOBILE_PLATFORM
  })
  // new WriteFilePlugin()
  // new LiveReloadPlugin({ appendScriptTag: true }),
  // new BrowserSyncPlugin({
  //   host: 'localhost',
  //   port: 8070,
  //   proxy: 'http://localhost:8080/'
  // })
)

module.exports = webpackConfig
