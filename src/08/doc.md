## 指令、过滤器
```
directive/filter

```
+ 2、参考官网配置webpack.conf.js配置

```
 import directive from "./directive";
import filter from "./filter"
var common = {
    install:(Vue)=>{
        directive(Vue);
        filter(Vue);
    }
}
if (typeof exports == "object") {
	module.exports = common;
} else if (typeof define == "function" && define.amd) {
	define([], function() {
		return common;
	});
} else if (window.Vue) {
	Vue.use(common);
}
```
+ 3、main.js引入
```
import common from "src/common";
Vue.use(common);

```