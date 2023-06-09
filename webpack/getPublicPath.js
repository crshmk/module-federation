/**
 * find the url needed by output.publicPath
 * note the protocol distinctions
 * 
 * development mode
 * 'http://localhost:9002/'
 * 
 * production mode 
 * 'https://domain.com/remotes/remote2/'
 **/ 
const { moduleNames } = require('../moduleNames')
const { domain, hostPort } = process.env

const equals = x => y => x === y

const findModuleIndex = moduleName => 
  moduleNames.findIndex(equals(moduleName))

// 'http://localhost:9002/'
const getLocalPublicPath = moduleName => {
  const i = findModuleIndex(moduleName)
  const port = +hostPort + i 
  return `http://localhost:${port}/`
}

const isHost = moduleName => 
findModuleIndex(moduleName) === 0

// 'https://domain.com/remotes/remote2/'
const getProdPublicPath = moduleName => 
  isHost(moduleName) ? '/' : `https://${domain}/remotes/${moduleName}/`

const getPublicPath = (argv, moduleName) => {
  const { mode } = argv 
  return mode === 'development' 
  ? getLocalPublicPath(moduleName) 
  : getProdPublicPath(moduleName)
}

module.exports = { 
  getPublicPath
}