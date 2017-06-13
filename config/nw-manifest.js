'use strict'
const package_json = require('../package.json')
// module.exports = Object.assign({}, package_json, {
//   main: 'index.html',
// })

module.exports = {
  main: 'index.html',
  name: package_json.name,
  version: package_json.version,
  author: package_json.author,
  dependencies: package_json.dependencies
}