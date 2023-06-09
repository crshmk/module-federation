const path = require('path')

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

module.exports = (_, argv) => ({
  ...commonWebpackConfig,
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].remote1.[contenthash].js',
    path: resolve('dist'),
    publicPath: getPublicPath(argv, 'remote1')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      remotes: getRemotes(argv),
      exposes: {
        './Buttons': './src/Buttons/index.js',
        './Img': './src/Img/index.js'
      },
      shared: sharedDependencies
    }),
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    })
  ],
  devServer: {
    historyApiFallback: true,
    // hot: true,
    // liveReload: true,
    // open: true,
    port: 8001,
    static: resolve('dist')
  }
})
