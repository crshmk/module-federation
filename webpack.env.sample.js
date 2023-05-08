// note the protocol distinctions
const publicPaths = {
  host: {
    local: 'http://localhost:8001/',
    remote: '/'
  },
  remote1: {
    local: 'http://localhost:9001/',
    remote: 'https://domain.com/remotes/remote1/'
  },
  remote2: {
    local: 'http://localhost:9002/',
    remote: 'https://domain.com/remotes/remote2/'
  } 
}

const remotes = {
  host: {
    local: 'host@http://localhost:8001/remoteEntry.js' ,
    remote: 'host@https://domain.com/remoteEntry.js'
  },
  remote1: {
    local: 'remote1@http://localhost:9001/remoteEntry.js',
    remote: 'remote1@https://domain.com/remotes/remote1/remoteEntry.js'
  },
  remote2: {
    local: 'remote2@http://localhost:9002/remoteEntry.js',
    remote: 'remote2@https://domain.com/remotes/remote2/remoteEntry.js'
  }
}

module.exports = { publicPaths, remotes }