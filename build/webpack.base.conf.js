var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var vueLoaderConfig = require('./vue-loader.conf')
var configObj = {}
var colors = require('colors');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const env = process.env.NODE_ENV
switch (env) {
  case 'production':
    configObj = config['build']
    break;
  case 'testing':
    configObj = config['test']
    break;
  default:
    configObj = config['dev']
    break;
}
console.log("绝对路径地址为:  ".red+configObj.assetsPublicPath)
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: configObj.assetsRoot,
    filename: '[name].js',
    publicPath: configObj.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins: [//插件项
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'//引入zepto
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('packages')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
