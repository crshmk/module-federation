const { getRemotes } = require('../getRemotes')

const devArgv = { mode: 'development' }
const prodArgv = { mode: 'production' }

const expectedDev = {
  host: 'host@http://localhost:8000/remoteEntry.js',
  remote1: 'remote1@http://localhost:8001/remoteEntry.js',
  remote2: 'remote2@http://localhost:8002/remoteEntry.js',
}

const expectedProd = {  
  host: 'host@https://site.com/remoteEntry.js',
  remote1: 'remote1@https://site.com/remotes/remote1/remoteEntry.js',
  remote2: 'remote2@https://site.com/remotes/remote2/remoteEntry.js'
}

describe('getPublicPath webpack util for setting output.publicPath', () => {

  test('creates dev uris', () => {
    expect(getRemotes(devArgv)).toEqual(expectedDev)
  })

  test('creates prod uris', () => {
    expect(getRemotes(prodArgv)).toEqual(expectedProd)
  })
})
