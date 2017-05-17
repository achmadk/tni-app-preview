const webpack = require('webpack'),
autoprefixer = require('autoprefixer'),
CopyWebpackPlugin = require('copy-webpack-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
postcssAMP = require('postcss-amp'),
// ExtractTextPlugin = require('extract-text-webpack-plugin'),
// PurifyCSSPlugin = require('purifycss-webpack'),
path = require('path'),
glob = require('glob'),
{MOBILE_PLATFORM, NODE_ENV} = process.env;

let name = process.env.NODE_ENV ? "../font/[hash].[ext]" : 'font/[hash].[ext]';

module.exports = {
  // context: __dirname,
  // entry: [ './src/index.jsx' ],
  entry: './src/index.jsx',
  module: {
    /**
     * module.loaders is now module.rules
     * https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules
     * The old loader configuration was superseded by a more powerful rules system,
     * which allows configuration of loaders and more.
     */
    // loaders: [{
    rules: [{
      /**
       * use babel-loader to load .jsx files
       * react-hot-loader has been added in package.json file since version 3
       */
      test: /\.jsx?$/,
      exclude: /node_modules/,
      /**
       * Chaining loaders
       * https://webpack.js.org/guides/migrating/#chaining-loaders
       * Like in webpack v1, loaders can be chained to pass results from loader to loader.
       * Using the rule.use configuration option, use can be set to a list of loaders.
       * In webpack v1, loaders were commonly chained with !
       * @type {String}
       */
      use: [{
          loader: 'babel-loader',
          query: { cacheDirectory: true }
      }]
    }, {
      /**
       * use less-loader, css-loader, and style-loader to load .less files
       * you can import .less in .jsx file
       */
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader?importLoaders=1' },
        // 'postcss-loader',
        { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
        'less-loader'
      ]
    }, {
      /**
       * use sass-loader, css-loader, and style-loader to load .scss files
       * you can import .scss in .jsx file
       */
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        // 'postcss-loader',
        { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
        'sass-loader'
      ]
    }, {
      /**
       * css-loader, and style-loader to load .css files
       * you can import .css in .jsx file
       */
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      /**
       * compress images with specific extensions with image-webpack-loader,
       * then move it into img folder with name [hash].[ext] using url-loader
       */
      test: /.*\.(png|jpg|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: { name: './img/[hash].[ext]'}
      }, {
        loader: 'image-webpack-loader',
        options: { bypassOnDebug: true }
      }]
    }, {
      /**
       * load fonts with specific extensions,
       * then move it into font folder with name [hash].[ext] using file-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: [{
        loader: 'file-loader',
        options: { name }
      }]
    }, {
      /**
       * load fonts with woff/woff2 extensions with url-loader.
       * then move it into font folder with name [hash].[ext] and other options using url-loader.
       * added (\?[\s\S]+) regex value in case you want to load font-awesome or ionicons font
       */
      test: /\.woff(2)?(\?[\s\S]+)?$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff', name }
      }]
    }, {
      /**
       * use standard-loader to preload .jsx files
       */
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
          loader: 'standard-loader',
          options: {
            error: false,
            snazzy: true
          }
      }]
    }]
  },
  resolve: {
    /**
     * According to https://github.com/webpack/webpack.js.org/issues/68
     * in webpack 2 root and modulesDirectories in resolver has deleted
     * in order to use it, add root value to modules list
     */
    modules: [__dirname, 'node_modules', 'src', 'test'],
    /**
     * According to https://webpack.js.org/guides/migrating/#resolve-extensions
     * resolve.extensions no longer requires passing an empty string.
     */
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: `./src/pages/_${MOBILE_PLATFORM}` },
      { from: './src/assets/img', to: 'img' }
    ], {
      ignore: [
        'index.html'
      ]
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          // postcssAMP,
          autoprefixer()
      ],
        sassLoader: { includePaths: path.resolve(__dirname, 'src', 'assets', 'css-preprocessors') }
      }
    }),
    new HtmlWebpackPlugin({
      template: `./src/pages/_${MOBILE_PLATFORM}/index.html`,
      inject: 'body',
      hash: process.env.NODE_ENV == "production",
      minify: {
        removeComments: true
      }
    })
    // new ExtractTextPlugin({ filename: "./css/styles.css", allChunks: false }),
    // new PurifyCSSPlugin({
    //   minimize: true,
    //   moduleExtensions: ['.css'],
    //   paths: [
    //     glob.sync(path.join(__dirname, `src/pages/${MOBILE_PLATFORM}/*.html`)),
    //     glob.sync(path.join(__dirname, "src/**/*.jsx")),
    //     glob.sync(path.join(__dirname, "src/**/*.js"))
    //   ],
    //   verbose: true
    // })
  ]
};
