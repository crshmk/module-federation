const fs = require('fs')
const path = require('path')

const moduleName = process.argv[2]

const moduleNamesFile = path.resolve(__dirname, '../../moduleNames.json')

const moduleNames = require(moduleNamesFile)

const newModuleNames = moduleNames.concat(moduleName)

const fileContent = JSON.stringify(newModuleNames)

fs.writeFile(moduleNamesFile, fileContent, () => {
  console.log('current modules are ', newModuleNames)
})
