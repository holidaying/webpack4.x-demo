
## node建工程webpack4.x、vue2.x

### 1.新建工程
```
 npm init;
```
会生成package.json和package-lock.json.

### 2.webpack安装使用
```
 npm install webpack --save-dev,
 npm install webpack-cli --save-dev,
--- 1、局部使用  node_modules/.bin/webpack src/01/index.js src/01/bundle.js
--- 1、使用package script标签 webpack --mode development --progress --colors --config ./build/webpack.base.conf.js

```

### 3.webpack-dev-server安装使用
```
npm install --save-dev webpack-dev-server
webpack-dev-server --mode development --progress
 --colors --config ./build/webpack.base.conf.js
```

### 4.webpack热更新安装使用
```
var webpack = require("webpack");
new webpack.HotModuleReplacementPlugin(),
```

### 5.css代码分离

### 6.babel安装使用

### 7.vue-loader的安装使用

### 8.vue过滤器、指令

### 9.vue-router、beforeEach

### 9.router.addRouters

### 10.打包部署

### 11.node、gulp服务上传



