/**
 * Module dependencies.
 */

const withCSS = require("@zeit/next-css");

/**
 * Export `next` config.
 */
module.exports = withCSS({
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  cssModules: true
});
