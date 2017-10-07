/**
 * Created by Demon on 22.08.2017.
 */
var config = {
    entry: './main',


    output: {

        path:__dirname + "/src",
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;