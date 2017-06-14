const fs = require('fs')
const manifest = require('./vue-devtools/shells/chrome/manifest.json')

fs.writeFileSync(
  'vue-devtools/shells/chrome/manifest.json',
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
