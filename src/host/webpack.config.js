const path = require('path')
const webpack = require('webpack')

const {
  getPublicPath,
  getRemotes,
  HtmlWebpackPlugin,
  ModuleFederationPlugin,
  sharedDependencies
} = require('../../webpack')

const resolve = filePath => 
  path.resolve(__dirname, filePath)

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
    publicPath: getPublicPath(argv, 'host')
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
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: getRemotes(argv),
      exposes: {
        './useCount': './src/store/useCount.js'
      },
      shared: sharedDependencies
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
    port: 8000,
    // static: resolve('dist')
  }
})
