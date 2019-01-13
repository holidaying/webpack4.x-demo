
import Vue from "vue";
import notify from "./notify"
//对外暴露注册函数
module.exports.install = (vue) => {
	Vue.prototype.$notify = notify;
	window.notify=notify;
};
