const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: "./src/app/index.js",
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            //Here we are transpile modern vanilla javascript to all navigator compatible js code
                test: /\.js$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader',

                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}