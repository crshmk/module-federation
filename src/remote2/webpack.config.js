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
    filename: '[name].remote2.[contenthash].js',
    path: resolve('dist'),    
    publicPath: getPublicPath(argv, 'remote2'),
    uniqueName: 'remote2-remote'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote2',
      filename: 'remoteEntry.js',
      remotes: getRemotes(argv),
      exposes: {
        './List': './src/List/index.js'
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
    port: 8002,
    static: resolve('dist')
  }
})
