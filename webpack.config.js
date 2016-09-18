var webpack = require('webpack');
const fonts = `fonts/[name].[ext]`;

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
                test: /\.woff(\?.*)?$/,
                loader: `url?prefix=fonts/&name=${fonts}&limit=10000&mimetype=application/font-woff`
            },
            {
                test: /\.woff2(\?.*)?$/,
                loader: `url?prefix=fonts/&name=${fonts}&limit=10000&mimetype=application/font-woff2`
            },
            {
                test: /\.ttf(\?.*)?$/,
                loader: `url?prefix=fonts/&name=${fonts}&limit=10000&mimetype=application/octet-stream`
            },
            {test: /\.eot(\?.*)?$/, loader: `file?prefix=fonts/&name=${fonts}`},
            {test: /\.svg(\?.*)?$/, loader: `url?prefix=fonts/&name=${fonts}&limit=10000&mimetype=image/svg+xml`},
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