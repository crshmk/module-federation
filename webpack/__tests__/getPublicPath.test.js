const { getPublicPath } = require('../getPublicPath')

const devArgv = { mode: 'development' }
const prodArgv = { domain: 'site.com', mode: 'production' }

describe('getPublicPath webpack util for setting output.publicPath', () => {

  test('creates a url for prod host', () => {
    expect(getPublicPath(prodArgv, 'host')).toBe('/')
  })

  test('creates a url for prod remote', () => {
    expect(getPublicPath(prodArgv, 'remote2'))
      .toBe('https://teflpoint.com/remotes/remote2/')
  })

  test('creates a url for local remote', () => {
    expect(getPublicPath(devArgv, 'remote2'))
      .toBe('http://localhost:8002/')
  })

})

