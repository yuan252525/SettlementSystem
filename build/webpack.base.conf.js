// webpack.base.conf.js主要完成了下面这些事情：
// 1.配置webpack编译入口
// 2.配置webpack输出路径和命名规则
// 3.配置模块resolve规则
// 4.配置不同类型模块的处理规则
// 5.这个配置里面只配置了.js、.vue、图片、字体等几类文件的处理规则，如果需要处理其他文件可以在module.rules里面配置。
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var projectRoot = path.resolve(__dirname, '../')
// 给出正确的绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// 配置webpack编译入口
module.exports = {
  entry: {
    app: './src/main.js',
    login: './src/view/login/index/index.js'
  },
  // 配置webpack输出路径和命名规则
  output: {
    // webpack输出的目标文件夹路径（例如：/dist）
    path: config.build.assetsRoot,
    // webpack输出bundle文件命名格式
    filename: '[name].js',
    // webpack编译输出的发布路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 配置模块resolve的规则
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    //除了node_modules
    // fallback: [path.join(__dirname, '../node_modules')],
    // 创建路径别名，有了别名之后引用模块更方便，例如
    // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'common': path.resolve(__dirname, '../src/common'),
      'view': path.resolve(__dirname, '../src/view'),
      'store': path.resolve(__dirname, '../src/store'),
      'library': path.resolve(__dirname, '../src/library'),
      'filter': path.resolve(__dirname, '../src/filter'),
      'directive': path.resolve(__dirname, '../src/directive'),
      'api': path.resolve(__dirname, '../src/api')
    }
  },
  // 配置不同类型模块的处理规则
  module: {
    rules: [
      {// 对所有.vue文件使用vue-loader
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {// 对src和test文件夹下的.js和.vue文件使用eslint-loader
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {// 对图片资源文件使用url-loader，query.name指明了输出的命名规则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {//对视频格式url-loader指明输出命名规则
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {// 对字体资源文件使用url-loader，query.name指明了输出的命名规则
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
