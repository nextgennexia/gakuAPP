var webpack = require('webpack');

module.exports = {
    entry: "./src/js/router.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/],
				query: {
					presets: ["es2015", "react"],
					plugins: ["react-hot-loader/babel"]
				}
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
			{
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "babel",
                exclude: [/node_modules/, /public/],
				query: {
					presets: ["es2015", "react"],
					plugins: ["react-hot-loader/babel"]
				}
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}