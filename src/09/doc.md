## vue路由和路由懒加载
```
vue-router

```
+ 2、参考官网配置

```
import VueRouter from "vue-router";
import routerConfig from "./router/router.js"
Vue.use(VueRouter);
//路由设置
var router = (window.$router = new VueRouter({
	routes: routerConfig
}));
window.VueInstance = new Vue({ el: "#app",router,render: h => h(App) });
```
+ 3、vue懒加载安装插件

npm install  babel-plugin-syntax-dynamic-import --save-dev
在.bablerc中引入syntax-dynamic-import插件

{
    "plugins": ["syntax-dynamic-import"]
}
+ 4、配置路由，并执行

```
var router = [
    { path: '/foo', component: () => import(`../modules/foot.vue`) },
    { path: '/bar', component: () => import(`../modules/bar.vue`) }
]
module.exports=router;

```