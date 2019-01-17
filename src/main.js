// import "babel-polyfill";
import Vue from "vue";
import App from "./app.vue";
import common from "src/common";
import service from "src/service";
import {install} from "src/components";
import VueRouter from "vue-router";
import routerConfig from "./router/router.js"
Vue.use(VueRouter);
Vue.use(common);
Vue.use(install);

//路由设置
var router = (window.$router = new VueRouter({
	routes: routerConfig
}));
window.VueInstance = new Vue({ el: "#app",router,render: h => h(App) });