const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname, 'build/')
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin(
            [{
                from: 'src/main.html'
            }],
            {
                debug: 'info',
                copyUnmodified: true
            }
        )
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
