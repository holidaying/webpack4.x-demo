import Vue from "vue";
import App from "./app.vue";
import common from "src/common";
import service from "src/service";
import {install} from "src/components";

Vue.use(common);
Vue.use(install);
window.VueExpress = new Vue({ el: "#app", render: h => h(App) });