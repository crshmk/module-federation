const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = 
  require('webpack/lib/container/ModuleFederationPlugin')

const resolve = filePath => path.resolve(__dirname, filePath)

const { dependencies } = require('./package.json')

module.exports = {
  mode: 'development',
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
    publicPath: 'http://localhost:8001/'
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
        host: 'host@http://localhost:8001/remoteEntry.js',
        remote1: 'remote1@http://localhost:9001/remoteEntry.js',
        remote2: 'remote2@http://localhost:9002/remoteEntry.js'
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
      template: resolve('src/index.html')
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
}
