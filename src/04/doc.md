## css 解析以及分离

```
npm install --save-dev babel-core babel-loader babel-preset-es2015
需要用babel命令，则需要安装 npm install babel-cli
```

-   提示 babel-loader 需要安装@7 以上版本

-   1、webpack.conf.js 配置

```
 {
        test:/\.(vue|js)$/,
        use:{
            loader:'babel-loader',
            options:{
                presets:[
                    "es2015"
                ]
            }
        },
        exclude:/node_modules/
      },
```

-   2、执行 npm run build（node_modules/.bin/babel src/03/index.js -o src/03/bundle.js）

-   3、查看结果

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
