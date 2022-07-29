const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const manifestOptions = {
  fileName: "asset-manifest.json",
  //publicPath: paths.publicUrlOrPath,
  generate: (seed, files, entrypoints) => {
    const manifestFiles = files.reduce((manifest, file) => {
      manifest[file.name] = file.path;
      return manifest;
    }, seed);
    const entrypointFiles = entrypoints.main.filter(
      (fileName) => !fileName.endsWith(".map")
    );

    return {
      files: manifestFiles,
      entrypoints: entrypointFiles,
    };
  },
};

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.ts",
    shout: "./src/shouting.ts",
  },
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Something something",
    }),
    new WebpackManifestPlugin(manifestOptions),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
