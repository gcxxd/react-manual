const path = require('path');

module.exports = {
    //入口文件
    entry: './app/index.js',
    //output
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'temp/'
    },
    devServer: {
        content: './',
        host: 'localhost',
        compress: true,
        port: 1717
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_module/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}