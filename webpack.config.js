const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, '/src/index'),
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'file-loader'
        ]
      }, {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin
    ({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    })
  ],


  devServer: {
		historyApiFallback: true,
		stats: 'errors-only'
	},

};