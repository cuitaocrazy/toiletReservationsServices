/**
 * Created by cuitao on 2017/1/8.
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: ["bootstrap-loader/lib/bootstrap.loader?extractStyles!bootstrap-loader/no-op.js", "./src/client.js"],
    output: {
        filename: "bundle.js",
        path: "../public"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel", exclude: /(node_modules|bower_components)/},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            {test: /\.s[ca]ss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            'process.env.BROWSER': true,
            'process.env.wsUrl': '"ws://10.2.54.24:9000/wc"'
        }),
        new ExtractTextPlugin('app.css', {allChunks: true}),
        new webpack.optimize.UglifyJsPlugin({output: {comments: false}})
    ]
}