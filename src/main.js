// import "babel-polyfill";
import Vue from "vue";
import App from "./app.vue";
import common from "src/common";
import service from "src/service";
import {install} from "src/components";
import VueRouter from "vue-router";
import routerConfig from "./router/router.js"
import addRouters from "./router/addRouters.js"
Vue.use(VueRouter);
Vue.use(common);
Vue.use(install);

//路由设置
var router = (window.$router = new VueRouter({
	routes: routerConfig
}));
router.addRoutes(addRouters);
router.beforeEach((to,from,next)=>{
    if(to.name=="bar"){
        window.notify("this is bar componets","warning");
        return
    }
    next()
})
window.VueInstance = new Vue({ el: "#app",router,render: h => h(App) });