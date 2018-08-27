/*** webpack.config.js ***/
const path = require('path');
module.exports = {
    entry: path.join(__dirname, '/src/app.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { presets: ['react'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
    },
    mode: 'development'
};