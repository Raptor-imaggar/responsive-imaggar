const webpack = require('webpack');

module.exports = {
  // other webpack configurations...

  resolve: {
    alias: {
      http: 'stream-http',
      https: 'https-browserify',
      zlib: 'browserify-zlib',
      stream: 'stream-browserify',
    },
  },

  // other webpack configurations...
};
