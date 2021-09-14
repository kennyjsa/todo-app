/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,

  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  basePath: !debug ? '/todo-app' : '',
  assetPrefix: !debug ? '/todo-app/' : '',

  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
}
