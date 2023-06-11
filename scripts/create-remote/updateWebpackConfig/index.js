require('dotenv').config({path: '../../.env'})

const fs = require('fs')
const path = require('path')
const { setTemplateVars } = require('./setTemplateVars')

const moduleName = process.argv[2]

const moduleNamesFile = path.resolve(__dirname, '../../../moduleNames.json')
const webpackConfigFile = path.resolve(__dirname, `../../../src/${moduleName}/webpack.config.js`)

const moduleNames = require(moduleNamesFile)

const port = function() {
  const { hostPort } = process.env
  return moduleNames.length + +hostPort - 1
}()

fs.readFile(webpackConfigFile, 'utf-8', (err, data) => {
  const withUpdatedModuleName = setTemplateVars(moduleName)(data)
  const withUpdatedPort = withUpdatedModuleName.replace('{{port}}', port)

  fs.writeFile(webpackConfigFile, withUpdatedPort, {encoding: 'utf-8', flag: 'w'}, err => {
    console.log(`${moduleName} created on port ${port}`)
  })
})