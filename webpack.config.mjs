import path from 'path';
import HTMLWebpackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

const mode = process.env.NODE_ENV || 'development';

export default {
  mode,
  entry: ["@babel/polyfill", "./src/index.jsx"],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // output: {
  //   path: path.join(__dirname, 'dist', 'public'),
  //   publicPath: '/assets/',
  // },
  // devServer: {
  //   compress: true,
  //   port: 8080,
  //   host: '0.0.0.0',
  //   publicPath: '/assets/',
  //   historyApiFallback: true,
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ["file-loader"],
      },
    ],
  },
};