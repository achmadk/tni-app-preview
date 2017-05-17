const webpack = require('webpack'),
      path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      PurifyCSSPlugin = require('purifycss-webpack'),
      glob = require('glob')

var webpackConfig = require('../webpack.config')

const extractCSS = new ExtractTextPlugin({ filename: "css/[contenthash].css", allChunks: true }),
      extractLESS = new ExtractTextPlugin({ filename: "css/[contenthash].css", allChunks: true }),
      extractSCSS = new ExtractTextPlugin({ filename: "css/[contenthash].css", allChunks: true })

webpackConfig.output = {
  path: path.resolve(__dirname, '../www'),
  publicPath: '',
  filename: './js/bundle.js',
  chunkFilename: './js/[name].js'
}

// webpackConfig.module.rules[3].use.splice(0,1,"file-loader?name=./css/[name].[ext]",'extract-loader?publicPath=./www/')

webpackConfig.module.rules[1].use = extractLESS.extract({
  fallback: 'style-loader',
  use: [
    'css-loader',
    // 'postcss-loader',
    { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
    'less-loader'
  ]
})

webpackConfig.module.rules[2].use = extractSCSS.extract({
  fallback: 'style-loader',
  use: [
    'css-loader',
    // 'postcss-loader',
    { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' }, sourceMap: 'inline' } },
    'sass-loader?sourceMap'
  ]
})

webpackConfig.module.rules[3].use = extractCSS.extract({
  fallback: 'style-loader',
  use: 'css-loader?sourceMap'
})

webpackConfig.devtool = 'cheap-module-source-map'

webpackConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin(),
  new CleanWebpackPlugin([path.resolve(__dirname, '../www')], {
    root: path.resolve(__dirname, '..'),
    verbose: true
  }),
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#occurrence-order
   * The plugin is no longer needed and occurrence order is on by default.
   */
  // new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.optimize.DedupePlugin(),
  new webpack.EnvironmentPlugin({
    'MOBILE_PLATFORM': process.env.MOBILE_PLATFORM
  }),
  new webpack.DefinePlugin({
    'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)},
    '__DEVTOOLS__': process.env.NODE_ENV == "development"
  }),
  // new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  // new webpack.IgnorePlugin(/^\.\/languages$/, [/numbro$/]),
  // new webpack.ContextReplacementPlugin(/numbro[\\\/]dist[\\\/]languages$/, /^\.\/en-GB$/),
  /**
   * According to https://gist.github.com/sokra/27b24881210b56bbaff7#loader-options--minimize
   * The UglifyJsPlugin no longer puts loaders into minimize mode.
   * The debug option has been removed.
   * Loaders should no longer read their options from the webpack configuration.
   * Instead you need to provide these options with the LoaderOptionsPlugin.
   */
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: process.env.NODE_ENV == "production",
      dead_code: true,
      unused: true,
      booleans: true,
      if_return: true
    },
    mangle: false,
    comments: false,
    sourceMap: true,
    minimize: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: './js/vendor.bundle.js',
    minChunks: function({resource}) {
      return resource &&
      resource.includes('node_modules') &&
      resource.match(/\.js$/)
    }
  }),
  extractCSS,
  extractLESS,
  extractSCSS
  // new PurifyCSSPlugin({
  //   minimize: false,
  //   moduleExtensions: ['.css'],
  //   // styleExtensions: ['.css', '.jsx', '.js'],
  //   paths: {
  //     html: glob.sync(path.join(__dirname, `../src/pages/${process.env.MOBILE_PLATFORM}/*.html`)),
  //     jsx: glob.sync(`./../src/**/*.jsx`),
	//   js: glob.sync(`./../src/**/*.js`),
  //     // f7: glob.sync(`./../node_modules/framework7/*`)
  //   },
  //   verbose: true
  // })
  // new webpack.LoaderOptionsPlugin({
  //   minimize: true,
  //   debug: false
  // })
)

module.exports = webpackConfig
