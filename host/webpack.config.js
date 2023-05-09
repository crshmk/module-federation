const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = 
  require('webpack/lib/container/ModuleFederationPlugin')

const { dependencies } = require('./package.json')
const { publicPaths, remotes } = require('../webpack.env')

const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = (_, argv) => ({
  // mode: 'development',
 // entry: {
   // main: resolve('src/index.js')
 // },
  resolve: {
    extensions: ['.js', '.json'],
  },
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].host.[contenthash].js',
    path: resolve('dist'),
    publicPath:(argv.mode === 'development' 
    ? publicPaths.host.local 
    : publicPaths.host.remote)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        host: (argv.mode === 'development' 
        ? remotes.host.local 
        : remotes.host.remote),
        remote1: (argv.mode === 'development' 
        ? remotes.remote1.local
        : remotes.remote1.remote),
        remote2: (argv.mode === 'development' 
        ? remotes.remote2.local 
        : remotes.remote1.remote)
      },
      exposes: {
        './useCount': './src/store/useCount.js'
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: (argv.mode === 'development' 
      ? './src/index-dev.html' 
      : './src/index.html')
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    // hot: true,
    // liveReload: true,
    // open: true,
    port: 8001,
    // static: resolve('dist')
  }
})
