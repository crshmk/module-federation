const path = require('path')
const webpack = require('webpack')

const {
  commonWebpackConfig,
  getPublicPath,
  getRemotes,
  HtmlWebpackPlugin,
  ModuleFederationPlugin,
  sharedDependencies
} = require('../../webpack')

const resolve = filePath => 
  path.resolve(__dirname, filePath)

module.exports = async (_, argv) => ({
 // entry: {
   // main: resolve('src/index.js')
 // },
  ...commonWebpackConfig,
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].host.[contenthash].js',
    path: resolve('dist'),
    publicPath: getPublicPath(argv, 'host')
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
  devServer: {
    historyApiFallback: true,
    // hot: true,
    // liveReload: true,
    // open: true,
    port: 8000,
    // static: resolve('dist')
  }
})
