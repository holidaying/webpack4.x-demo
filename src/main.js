// import "babel-polyfill";
import Vue from "vue";
import App from "./app.vue";
import common from "src/common";
import service from "src/service";
import {install} from "src/components";
import VueRouter from "vue-router";
import routerConfig from "./router/router.js"
import addRouters from "./router/addRouters.js"
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
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
const i18n = new VueI18n({ 
    // 默认语言
    locale: 'zh',
    // 引入对应的语言包文件
    messages: {   
       'zh': require('static/languages/zh.json'),   
       'en': require('static/languages/en.json') 
     }
   });

window.VueInstance = new Vue({ el: "#app",router,i18n,render: h => h(App) });