const webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "bin"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: false,
            output: {
                comments: false,
            },
            minimize: false
        }),
    ]
}
