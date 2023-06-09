require('dotenv').config({ path: '../../.env' })

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = 
  require('webpack/lib/container/ModuleFederationPlugin')

const { dependencies } = require('../package.json')

const { getPublicPath } = require('./getPublicPath')
const { getRemotes } = require('./getRemotes')

module.exports = {
  dependencies,
  getPublicPath,
  getRemotes,
  HtmlWebpackPlugin,
  ModuleFederationPlugin
}
