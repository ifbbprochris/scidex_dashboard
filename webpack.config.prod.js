var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'https://scidexbashboard.azurewebsites.net/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    { 
      test: /\.(png|jpg|jpeg|gif)$/, 
      loader: 'url-loader?limit=1000000&name=img/[name].[ext]' 
    }
    ]
  }
};