import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import cleatstore from "./store/store";
import "@/api/mock.js"; //模拟数据 
import Vuex from "vuex";
import api from '@/api/api.js'       //http请求
import ElementUI from "element-ui";
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import lego from "xlink-lego"; // 全量引入
import "element-ui/lib/theme-chalk/index.css";
import Message from "./components/ui/message/message";
import index from "./components/ui/demo/index";
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.component('chart', ECharts)
Vue.prototype.$messages = Message;
Vue.prototype.$index = index;
Vue.prototype.$api = api;
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(lego);
Vue.use(Vant);
Vue.use(Lazyload);
const store = cleatstore();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 导航守卫
router.beforeEach((to, from, next) => {
  // 获取token值
  var token = localStorage.getItem("zhanlifeiAdmin");
  if (token || to.path === "/login" || to.path === "/welcome" || to.path === "/iframeDiv") {
    next();
  } else if (!token || to.path === "/login") {
    next({ name: "login" });
  }
});