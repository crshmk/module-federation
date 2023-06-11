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
    filename: {{fileName}},
    path: resolve('dist'),    
    publicPath: getPublicPath(argv, {{moduleName}})
  },
  plugins: [
    new ModuleFederationPlugin({
      name: {{moduleName}},
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
    port: {{port}},
    static: resolve('dist')
  }
})
