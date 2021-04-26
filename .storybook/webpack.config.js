const path = require("path");
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = ({ config }) => {
    config.module.rules.push(
        {
            test: /\.s?css$/,
            use: ["style-loader", "raw-loader", "sass-loader"],
            include: [path.resolve(__dirname, "../css/")],
        },
        {
            test: /\*.svg$/,
            use: [
                {
                    loader: require.resolve("babel-loader"),
                },
            ],
        },
        {
            test: /\.jsx$/,
            use: [
                {
                    loader: "babel-loader",
                    query: {
                        presets: ["airbnb"],
                    },
                },
            ],
        },
        {
            test: /\.(stories|story)\.mdx$/,
            use: [
                {
                    loader: "babel-loader",
                    // may or may not need this line depending on your app's setup
                    options: {
                        plugins: ["@babel/plugin-transform-react-jsx"],
                    },
                },
                {
                    loader: "@mdx-js/loader",
                    options: {
                        compilers: [createCompiler({})],
                    },
                },
            ],
        },
    );
    config.resolve.extensions = [".js", ".jsx"];
    config.module.rules.push({
        test: /\.(stories|story)\.[tj]sx?$/,
        loader: require.resolve("@storybook/source-loader"),
        exclude: [/node_modules/],
        enforce: "pre",
    });
    return config;
};
