/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,

  basePath: !debug ? '/todo-app' : '',
  assetPrefix: !debug ? '/todo-app/' : '',
  publicRuntimeConfig: {
    basePath: !debug ? '/todo-app' : '',
  },


  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            native: false
          }
        }
      ]
    })

    // Important: return the modified config
    return config
  }
}
