import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import cleatstore from "./store/store";
import Vuex from "vuex";
import api from '@/api/api.js'       //http请求
import ElementUI from "element-ui";
import lego from "xlink-lego"; // 全量引入
import "element-ui/lib/theme-chalk/index.css";
import Message from "./components/ui/message/message";
Vue.prototype.$messages = Message;
// 导航守卫
router.beforeEach((to, from, next) => {
  // 获取token值
  var token = localStorage.getItem("zhanlifeiAdmin");
  if (token || to.path === "/login") {
    next();
  } else if (!token || to.path === "/login") {
    next({ name: "login" });
  }
});
Vue.prototype.$api = api;
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(lego);
const store = cleatstore();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
