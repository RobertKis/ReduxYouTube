module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: false,
        presets: ['react', 'es2015', 'stage-1'],
        plugins: [
            "transform-decorators-legacy",
            ["transform-runtime", {polyfill: false, regenerator: false}],
            "add-module-exports"
        ]
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
