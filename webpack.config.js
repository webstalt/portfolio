const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    output: {
        filename: 'bundle.js',
        library: 'initMap'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;