/**
 * create the uris for all remote manifests
 * 
 * dev:
 * {
 *   host: 'host@http://localhost:8001/remoteEntry.js',
 *   remote1: 'remote1@http://localhost:8001/remoteEntry.js',
 *   remote2: 'remote2@http://localhost:8002/remoteEntry.js',
 * }
 * 
 * prod:
 * {  
 *   host: 'host@https://domain.com/remoteEntry.js',
 *   remote1: 'remote1@https://domain.com/remotes/remote1/remoteEntry.js',
 *   remote2: 'remote2@https://domain.com/remotes/remote2/remoteEntry.js'
 * }
 * 
 */
const moduleNames = require('../moduleNames.json')
const { getPublicPath } = require('./getPublicPath')
const { domain } = process.env

const isHostUrl = url => url === '/'

const makeRemoteUri = (argv, moduleName) => {
  let url = getPublicPath(argv, moduleName)
  url = isHostUrl(url) ? `https://${domain}/` : url
  return `${moduleName}@${url}remoteEntry.js`
}

const addRemote = argv => (acc, moduleName) => ({
  ...acc, 
  [moduleName]: makeRemoteUri(argv, moduleName)
})

const getRemotes = argv => 
  moduleNames.reduce(addRemote(argv), {})

module.exports = { getRemotes }
