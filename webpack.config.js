module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test:/\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test:/\.png/,
        use: [
          'url-loader'
        ]
      },
      {
        test:/\.svg/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'

            }
          }
        ]
      },
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: '.',
    open: true
  }
};
