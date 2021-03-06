const path = require('path')

module.exports = {
  entry: './src/index.ts',
  devtool: 'eval-source-map',           // Alternative: eval-source-map, inline-source-map
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    static: ['public', 'app'],
    port: 7777
  }
};
