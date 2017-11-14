let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + "/build",
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        })
    ]
};