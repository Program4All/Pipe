// default nwbuild config
"use strict"

const _ = require('lodash')

const build = {
  files: './tmp/build/**',
  // version: 'last',
  version: '0.18.2',
  platforms: ['osx64', 'win32'], // win32, win64, osx32, osx64, linux32, linux64
  flavor: 'normal', // 'sdk', 'normal', 'flavor', 'nacl'

  buildType: 'versioned',
  buildDir: 'release',

  zip: true
}

const dev = _.merge(_.clone(build) , {
  files: './tmp/dev/**',
  flavor: 'sdk',
  argv: ['--load-extension=build/vue-devtools']
})

module.exports = {build, dev}
