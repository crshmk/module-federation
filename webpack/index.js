require('dotenv').config({ path: '../../.env' })

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = 
  require('webpack/lib/container/ModuleFederationPlugin')

const { commonWebpackConfig } = require('./commonWebpackConfig')
const { getPublicPath } = require('./getPublicPath')
const { getRemotes } = require('./getRemotes')
const { sharedDependencies } = require('./sharedDependencies')

module.exports = {
  commonWebpackConfig,
  getPublicPath,
  getRemotes,
  HtmlWebpackPlugin,
  ModuleFederationPlugin,
  sharedDependencies
}
