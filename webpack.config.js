import path from 'path';

export default {
//   debug: true,
  devtool: 'inline-source-map',
//   noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],

  target: 'web',

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [],

  module: {
	rules: [
	{
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
	},
	],
 },
}
