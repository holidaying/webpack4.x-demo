import Vue from "vue";
import App from "./app.vue";
import common from "src/common";
import service from "src/service";
Vue.use(common);
window.VueExpress = new Vue({ el: "#app", render: h => h(App) });