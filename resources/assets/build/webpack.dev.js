const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const config = require('../config.json');

module.exports = (env) => {

    const SOURCEMAP = !!(env && env.sourcemap);

    return {
        node: {
            fs: 'empty'
        },
        entry: config.entry,
        devtool: (SOURCEMAP) ? 'source-map' : '',
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
                        use: (SOURCEMAP) ? ['css-loader?url=false&&sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'] :
                            ['css-loader?url=false', 'postcss-loader', 'sass-loader']
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
            new BrowserSyncPlugin({
                proxy: config.proxyUrl,
                port: 8000
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    };
};
