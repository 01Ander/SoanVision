const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
// const webpack = require('webpack');
// require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    open: true,
    watchFiles: {
      paths: ['src'],
      options: {
        usePolling: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [

          'style-loader',
          'css-loader',
          'sass-loader',

        ],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'static/img/[name].[hash].[ext]',
        },
      },
      {
        test: /\.ttf$/,  // Tipos de fuentes a incluir
        type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
        generator: {
          filename: 'static/fonts/[hash][ext][query]',  // Directorio de salida
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new Dotenv(),
  ],
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser")
    },
    extensions: ['.js'], // Agregar esta linea para indicar que resuelva archivos js
    alias: {
      '@': path.resolve(__dirname, 'src'), // Agregar esta linea para definir el alias
    },
  }
};
