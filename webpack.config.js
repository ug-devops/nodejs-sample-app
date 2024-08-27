const path = require('path');

module.exports = {
  mode: 'development', // or 'production' depending on your environment
  entry: './src/index.js', // Update this path based on your entry file location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "fs": false, // Node.js modules that are not needed in the browser
      "net": false,
      "http": require.resolve("stream-http"),
      "https": require.resolve("stream-http"),
      "string_decoder": require.resolve("string_decoder/"),
    }
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
      // Add additional rules for other file types if needed
    ],
  },
  plugins: [
    // Add any plugins you need
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

