/**
 * Replace webpack config template vars with the module name
 * 
 * @param {String} 
 * @returns String
 * 
 * https://github.com/crshmk/utils/blob/master/src/mapReplace.js
 */
const mapReplace = replacements => str => {
  const fragmentsToReplace = Object.keys(replacements).join('|')
  const regex = new RegExp(fragmentsToReplace, 'g')
  return str.slice().replace(regex, match => replacements[match])
}

const setTemplateVars = moduleName => mapReplace({
  '{{fileName}}': `'[name].${moduleName}.[contenthash].js'`,
  '{{moduleName}}': `'${moduleName}'`,
  '{{uniqueName}}': `'${moduleName}-remote'`
})

module.exports = { setTemplateVars }
