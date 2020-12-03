const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        handlers: "./handlers.js"
    },
    node: {
        __filename: true,
        __dirname: true
    },
    target: "node",
    // do not include dependencies in the bundle
    externals: [nodeExternals()],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                use: "babel-loader",
                // do not transpile the depedencies
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // do include the project's `package.json` in the bundle
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, "path", "to", "your", "package.json"),
                to: "package.json"
            }
        ])
    ]
};