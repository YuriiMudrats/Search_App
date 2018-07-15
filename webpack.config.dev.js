const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  devtool: 'source-map',
  entry: { app: ['react-hot-loader/patch', './src/index.js'] },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: '/'
  },
  mode: 'development',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('./css/[name].css')
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: __dirname,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '/src'),
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: require.resolve('url-loader'),
        query: {
          limit: 5000,
          name: 'files/[hash].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        include: path.join(__dirname, '/client'),
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'src',
      'src/components',
      'src/constants',
      'src/containers',
      'src/store/entities'
    ]
  }
};

module.exports = webpackConfig;
