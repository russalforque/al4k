const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/al4k/'  // Replace with your exact repository name
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]'
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'media/[name][ext]'
          }
        }
      ]
    }
  }
})
