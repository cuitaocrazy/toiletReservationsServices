/**
 * Created by cuitao on 2017/1/9.
 */

const webpack = require("webpack")

module.exports = {
    entry: ["./src/client.js"],
    output: {
        filename: "bundle.js",
        path: "./dist"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /(node_modules|bower_components)/ },
            { test: /\.css$/, loader: "style!css!postcss"},
            { test: /\.s[ca]ss$/, loader: "style!css!postcss!sass"},
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'process.env.BROWSER': true,
            'process.env.wsUrl': '"ws://localhost:9000/wc"'
        })
    ]
}