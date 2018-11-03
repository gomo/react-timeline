var webpack = require("webpack");

module.exports = {
  output: {
    filename: 'timeline.js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".es6"]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  watch: true,
  devtool: "#inline-source-map",
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
