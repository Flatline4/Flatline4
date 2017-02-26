const path = require('path');
const webpack = require('webpack');

module.exports = [{
    entry: path.join(__dirname, 'src', 'Flatline.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: "flatline-browser.min.js",
        library: "Flatline",
        libraryTarget: "var"
    },
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            include: [
                path.join(__dirname, 'src')
            ],
            loader: 'ts-loader'
        }]
    },
    plugins: [/*
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, dead_code: true },
            mangle: true,
            sourceMap: true,
            beautify: false
        })*/
    ]
}, {
    entry: path.join(__dirname, 'src', 'Flatline.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: "flatline-common.min.js",
        libraryTarget: "commonjs"
    },
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            include: [
                path.join(__dirname, 'src')
            ],
            loader: 'ts-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, dead_code: true },
            mangle: true,
            sourceMap: true,
            beautify: false
        })
    ]
}]