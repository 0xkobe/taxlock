const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, options) => ({
  mode: 'development',
  devtool: 'inline-source-map',

  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
    app: './assets/js/app.js',
    classic: './assets/js/assets/scss/classic.scss',
    modern: './assets/js/assets/scss/modern.scss',
    corporate: './assets/js/assets/scss/corporate.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'priv/static/js'),
    publicPath: '/js/',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
            { loader: 'sass-loader', options: { sourceMap: true } },
        ],
        include: [path.resolve('./assets/js/assets/scss')]
      },
      {
        test: /\.(svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          name: `[name].[ext]`,
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/[name].css' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  }
});
