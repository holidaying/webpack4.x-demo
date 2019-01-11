### webpack-dev-server热更新

+ 1安装
```
npm install --save-dev webpack-dev-server

```
+ 2、方式
```
webpack-dev-server --mode development --progress --colors --config ./build/webpack.base.conf.js
```
+ 3、webpack.base.conf.js配置

```
 module.exports = {
  mode: 'development',
  entry: {index:'./src/index.js'},
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    hot:true,//热加载
    port: 9000
  }
};
```