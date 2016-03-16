var webpack = require('webpack');

module.exports = {
    entry       : "./index.js",
    output      : {
        path         : "../../public/js",
        filename     : "acp.js",
        libraryTarget: "amd",
        library      : "admin/plugins/embed"
    },
    externals   : {
        "app"           : "app",
        "jquery"        : "jQuery",
        "socket"        : "socket",
        "templates"     : "templates",
        "StripeCheckout": "StripeCheckout"
    },
    module      : {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            }
        ]
    },
    watchOptions: {
        poll: 1000
    },
    plugins     : [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};