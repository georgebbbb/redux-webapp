var path = require('path');
//为了放在每次修改都便利 react 给他起个花名
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathToReactRouter = path.resolve(node_modules, 'react-router/umd/ReactRouter.min.js');

module.exports = {
 entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    //暂时先不用了
    // resolve: {
    // alias: {
    //   'react-router': pathToReactRouter
    // }
    // },
    module: {
      loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
      query: {
        presets: ['react', 'es2015']
      },
      exclude: /node_modules/,
    },{
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }

};
