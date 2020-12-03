const path = require('path')

module.exports = (env, argv) => ({
  entry: {
    'react-daiscon.min': './src/cjs.js',
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    devtoolModuleFilenameTemplate: '../[resource-path]',
    library: 'ReactDaisycon',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build', 'web'),
  },
  devtool: 'source-map',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      // React dep should be available as window.React, not window.react
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|es).?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  optimization: {
    minimize: false,
  },
})
