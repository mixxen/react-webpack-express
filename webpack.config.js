module.exports = {
  cache: true,
  entry: './src/index.jsx',
  output: {
    filename: './public/javascripts/browser-bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
      {test: /\.js$/, loader: 'jsx-loader?harmony'}
    ]
  }
};