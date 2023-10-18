/* eslint no-console: 0 */

'use strict'

const path = require('path')
const url = require('url')
const fs = require('fs-extra')
const ip = require('dev-ip')
const glob = require('glob')
const yaml = require('js-yaml')
const webpack = require('webpack')
const Promise = require('bluebird')

Promise.promisifyAll(fs)

console.log('start compiling...')

const startTime = Date.now()
let env = process.env.NODE_ENV || 'development'

if (env === 'staging') {
  env = 'test'
}

console.log(`using ${env} config`)

const devIp = ip()[0]
const root = path.join(__dirname, '..')
const processPath = path.join(root, 'process.json')
const viewsPath = path.join(root, 'server/views')
const configPath = path.join(root, `config/webpack.config.${env}`)
const appConfigPath = path.join(root, 'config/app.yaml')

const config = require(configPath)
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json')))
const appConfig = yaml.load(fs.readFileSync(appConfigPath))
const serverConfig = appConfig.server || {}

const buildPath = config.output.path
const publicPath = config.output.publicPath
const pkgName = pkg.name

Promise.resolve()
  .then(() => {
    console.log('clean views and build path')

    // 1. 清理 我的buildPath
    return Promise.all([fs.removeAsync(buildPath)])
  })
  .then(() => {
    // 2. 开始打包操作
    console.log('webpack building...')

    const devPort = serverConfig.devPort || 9004
    // 兼容测试环境下的bug
    if (env === 'development') {
      config.output.publicPath = `http://${devIp}:${devPort}/build/`
    }

    // webpack 编译
    return new Promise((resolve, reject) => {
      webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
          console.log(
            stats.toString({
              colors: true,
              timings: true,
              hash: true,
              version: true,
              errorDetails: true,
              assets: false,
              chunks: false,
              children: false,
              modules: false,
              chunkModules: false,
            })
          )

          return reject(err)
        }

        const time = (stats.endTime - stats.startTime) / 1000

        console.log(`webpack build success in ${time.toFixed(2)} s`)

        resolve()
      })
    })
  })
  .then(() => {
    const time = (Date.now() - startTime) / 1000
    console.log(`compile success in ${time.toFixed(2)} s`)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
