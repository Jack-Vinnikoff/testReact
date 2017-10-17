//var webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path:__dirname + "/www/js",
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options:{presets: ['es2015','react']}
                }]
            }
        ]
    }
}