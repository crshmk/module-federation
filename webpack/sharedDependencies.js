const { dependencies } = require('../package.json')

const sharedDependencies = {
  ...dependencies,
  react: {
    singleton: true,
    requiredVersion: dependencies.react,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: dependencies['react-dom'],
  },
  'react-router-dom': {
    singleton: true,
    requiredVersion: dependencies['react-router-dom'],
  },
}

module.exports = { sharedDependencies }