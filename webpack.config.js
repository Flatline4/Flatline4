const path = require('path');
const webpack = require('webpack');

module.exports = (env) => ([{
    entry: path.join(__dirname, 'src', 'Flatline.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: env && env.minify ? 'flatline-browser.min.js' : 'flatline-browser.js',
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
    plugins: env ? Object.keys(env).map(envVar => {
        switch (envVar) {
            case 'minify':
                return (
                    new webpack.optimize.UglifyJsPlugin({
                        compress: { warnings: false, dead_code: true },
                        mangle: true,
                        sourceMap: true,
                        beautify: false
                    })
                )
            default:
                return false //gets filtered out my Boolean filter
        }
    }).filter(Boolean) : []
}, {
    entry: path.join(__dirname, 'src', 'Flatline.ts'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: env && env.minify ? 'flatline-common.min.js' : 'flatline-common.js',
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
    plugins: env ? Object.keys(env).map(envVar => {
        switch (envVar) {
            case 'minify':
                return (
                    new webpack.optimize.UglifyJsPlugin({
                        compress: { warnings: false, dead_code: true },
                        mangle: true,
                        sourceMap: true,
                        beautify: false
                    })
                )
            default:
                return false //gets filtered out my Boolean filter
        }
    }).filter(Boolean) : []
}])