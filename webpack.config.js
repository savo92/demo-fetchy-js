var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
module.exports = {
  'entry': {
    'demo': ['./src/index.js'],
  },
  'output': {
    'path': path.join(__dirname, "dist/"),
    'filename': 'demo.js'
  },
  'module': {
    'loaders': [
      {
        'test': /\.(js)$/,
        'loader': 'babel-loader',
        'exclude': /node_modules/
      }
    ]
  },
  'plugins': [],
  'resolve': {
    'extensions': ['.js', '.jsx'],
  }
};
