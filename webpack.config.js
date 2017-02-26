const path = require('path');
const webpack = require('webpack');
const minify = JSON.parse(process.env.MINIFY);

module.exports = [{
    entry: path.join(__dirname, 'src', 'Flatline.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: minify ? 'flatline-browser.min.js' : 'flatline-browser.js',
        library: 'Flatline',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
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
    plugins: minify ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, dead_code: true },
            mangle: true,
            sourceMap: true,
            beautify: false
        })
    ] : []
}, {
    entry: path.join(__dirname, 'src', 'Flatline.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: minify ? 'flatline-common.min.js' : 'flatline-common.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
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
    plugins: minify ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false, dead_code: true },
            mangle: true,
            sourceMap: true,
            beautify: false
        })
    ] : []
}]