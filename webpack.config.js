const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin"); // installed via npm
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm
const webpack = require("webpack"); // to access built-in plugins
const path = require("path");

const buildMode = "development" // production development

module.exports = {
    mode: buildMode,

    entry: [
        "./src/index.tsx"
    ],

    // Enable sourcemaps for debugging webpack"s output.
    devtool: "source-map",

    optimization: {
        sideEffects: false,
    },

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    output: {
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(process.cwd(), "dist"),
    },

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true
    },

    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader"
                }]
            },
            // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            react: (buildMode === "development") ?
                "https://unpkg.com/react@16/umd/react.development.js" : "https://unpkg.com/react@16/umd/react.production.min.js",
            reactdom: (buildMode === "development") ?
                "https://unpkg.com/react-dom@16/umd/react-dom.development.js" : "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
        }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};