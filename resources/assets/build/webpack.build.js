const fs = require('graceful-fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('../config.json');


module.exports = function() {
    const conf = {
        node: {
            fs: 'empty'
        },
        entry: config.entry,
        output: {
            path: path.resolve(__dirname, '../../../public/js'),
            filename: '[name].min.js'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader?url=false', 'csso-loader', 'postcss-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        }
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['assets', 'css', 'fonts', 'js'], {root: path.resolve(__dirname, '../../../public')}),
            new ExtractTextPlugin('../css/styles.css'),
            new CopyPlugin([
                { from: 'resources/assets/fonts', to: path.resolve(__dirname, '../../../public/fonts/') },
                { from: 'resources/assets/images', to: path.resolve(__dirname, '../../../public/assets') },
                { from: 'favicon.ico', to: path.resolve(__dirname, '../../../public') }
            ]),
            new webpack.optimize.UglifyJsPlugin({minimize: true, compress: {drop_console: true}}),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    };
    return conf;
};
