var webpack = require("webpack");

module.exports = {
  output: {
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".js", ".jsx", ".es6"]
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
      }
    },
    {
      'classnames': {
        root: 'classNames',
        commonjs2: 'classnames',
        commonjs: 'classnames',
        amd: 'classnames'
      }
    },
    {'react-dnd': 'react-dnd'},
    {'react-dnd-touch-backend': 'react-dnd-touch-backend'}
  ],
  watch: true,
  // devtool: "#inline-source-map",
  module: {
    rules: [{
      test: /(\.jsx?$|\.es6?$)/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-env", {
              "modules": false,
              "targets": "> 1%, last 2 versions, Firefox ESR",
              "forceAllTransforms": true,
              "useBuiltIns": "entry"
            }],
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-proposal-object-rest-spread"
          ]
        }
      }      
    }]
  }
}
