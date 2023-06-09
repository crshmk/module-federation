const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = 
  require('webpack/lib/container/ModuleFederationPlugin')

const { dependencies } = require('../package.json')
const { publicPaths, remotes } = require('../webpack.env')

const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = (_, argv) => ({
  // mode: 'development',
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    assetModuleFilename: '[name][ext]',
    clean: true,
    filename: '[name].remote2.[contenthash].js',
    path: resolve('dist'),
    publicPath: (argv.mode === 'development' 
    ? publicPaths.remote2.local 
    : publicPaths.remote2.remote)
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
      name: 'remote2',
      filename: 'remoteEntry.js',
      remotes: {
        host: (argv.mode === 'development' 
        ? remotes.host.local 
        : remotes.host.remotes)
      },
      exposes: {
        './List': './src/List/index.js'
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
    port: 9002,
    static: resolve('dist')
  }
})
