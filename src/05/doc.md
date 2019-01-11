### js、css注入到模板
```
//将,css和html注入到模板中
      new HtmlWebpackPlugin({
        title:"aaaa",
        chunks:['index'],
        filename:'test.html',
        hash: true, // 会在打包好的bundle.js后面加上hash串
				inject: "body",
        template:'index.html'  
    })
```