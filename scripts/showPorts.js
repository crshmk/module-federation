/**
  * host: 3000
  * remote1: 3001
  * remote2: 3002
**/
require('dotenv').config()
const modules = require('../moduleNames.json')

const { hostPort } = process.env

const appendPort = (acc, moduleName, i) => {
  const port = +hostPort + i
  return acc + `${moduleName}: ${port} \n`
}

const ports = modules.reduce(appendPort, '') 

console.log(ports)
