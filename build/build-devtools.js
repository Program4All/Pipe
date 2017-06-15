const path = require('path')
const fs = require('fs')
const manifest = require('../vue-devtools/shells/chrome/manifest.json')

fs.writeFileSync(
  path.join(__dirname, '../vue-devtools/shells/chrome/manifest.json'),
  JSON.stringify(Object.assign({}, manifest, {
    "permissions": [
      "http://*/*",
      "https://*/*",
      "file://*",
      "chrome-extension://*",
      "webpack://*"
    ]
  }), null, 2),
  'utf-8')
