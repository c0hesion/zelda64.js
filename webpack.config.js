const path = require("path");
const TerserUglifyPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        "zelda64": path.resolve(__dirname, "src/index.ts"),
        "zelda64.min": path.resolve(__dirname, "src/index.ts"),
    },
    output: {
        path: path.resolve(__dirname, "_bundles"),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "Zelda64",
        umdNamedDefine: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserUglifyPlugin({
                include: /\.min\.js$/,
                terserOptions: {
                    sourceMap: true,
                },
            }),
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
        }],
    },
};
