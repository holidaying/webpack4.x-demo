## 安装vue,vue-loader
```
npm i vue vue-loader vue-template-compiler --save-dev

```
+ 2、参考官网配置webpack.conf.js配置

```
 const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
+ 3、新建app.vue和main.js

window.VueExpress = new Vue({ el: "#app", render: h => h(App) });
+ 4、执行npm run dev,并查看结果

```
wepack压缩（npm run build）
alert(22);\n(function () {\n    var x = 2,\n        y = 3;\n    console.log(x + y);\n    var c = { x: 2, y: 3 };\n    console.log(Object.value(c));\n    var d = [2, 3, 4];\n    c.map(function (item) {\n        return item = 2;\n    });\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

（node_modules/.bin/babel src/03/index.js -o src/03/bundle.js）
"use strict";
alert(22);
(function () {
    var x = 2,
        y = 3;
    console.log(x + y);
    var c = { x: 2, y: 3 };
    console.log(Object.value(c));
    var d = [2, 3, 4];
    c.map(function (item) {
        return item = 2;
    });
})();

```