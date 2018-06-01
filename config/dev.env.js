'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    IMG_URL: '"http://img4.peiyinxiu.com"',
    VIDEO_URL: '"http://video4.peiyinxiu.com"',
    BASE_API: '"http://localhost:7585"',
    DEFAULT_HEAD: '"web/images/201605311922b3b4cfba1cef5ae9.png"'
})