const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'fingerprint': './fingerprint.ts',
    'fingerprint.min': './fingerprint.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node-modules/
      }
    ]
  },
  optimization: {
    splitChunks: {
      minSize: 30000000, // Make fingerprint minSize so large that it wont chunk
      maxSize: 0
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        include: /\.min\.js$/
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'fingerprint',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'production'
};
