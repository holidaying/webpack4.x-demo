## webpack压缩文件
+ 1.安装webpack

```
 npm install webpack --save-dev,
 npm install webpack-cli --save-dev,
 

```
+ 2、使用方式

```
--- 1、局部使用  node_modules/.bin/webpack src/01/index.js src/01/bundle.js
--- 1、使用package script标签 webpack --mode development --progress --colors --config ./build/webpack.base.conf.js

```
+ 3、查看结果

```
}([function(e,t){alert(22)}]);

```