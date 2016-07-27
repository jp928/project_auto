//const webpack = require('webpack');
const sassLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'sass-loader?outputStyle=expanded'
];

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: 'babel', 
        query:
        {
          presets:['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loader: sassLoaders.join('!')
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

