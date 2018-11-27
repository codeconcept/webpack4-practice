const path =  require('path');
const webpack = require('webpack');

const handler = (percentage, message, ...args) => {
  const percent = (percentage * 100).toFixed(2); 
  const msg = message.toUpperCase();
  const argsOrDefault = (args.length === 0) ? "" : args.join(' | ');
  console.info(`${percent}%`, msg, argsOrDefault);
};

// // from the official doc https://webpack.js.org/plugins/progress-plugin/
// const handler = (percentage, message, ...args) => {
//   // e.g. Output each progress message directly to the console:
//   console.info(percentage, message, ...args);
// };

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(handler)
  ]
}