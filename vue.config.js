const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DanielLiao0426.github.io/'
    : 'https://DanielLiao0426.github.io'
})
