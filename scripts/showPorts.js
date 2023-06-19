/**
  * host: 3000
  * remote1: 3001
  * remote2: 3002
**/
require('dotenv').config()
const modules = require('../moduleNames.json')

const { addIndex, pipe, reduce, replace } = require('ramda')

const { hostPort } = process.env
const reduceIndexed = addIndex(reduce)

const removeLastComma = str => 
  str.replace(/,([^,]*)$/, '$1')

const appendPort = (acc, moduleName, i) => {
  const port = +hostPort + i
  return acc + `${moduleName}: ${port}, \n`
}

const makePorts = pipe(
  reduceIndexed(appendPort, ''),
  removeLastComma
)

const ports = makePorts(modules)

console.log(ports)
