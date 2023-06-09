const path = require('path')

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
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].remote1.[contenthash].js',
    path: resolve('dist'),
    publicPath: getPublicPath(argv, 'remote1')
  },
  resolve: {
    extensions: ['.js', '.json'],
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
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    // hot: true,
    // liveReload: true,
    // open: true,
    port: 8001,
    static: resolve('dist')
  }
})
