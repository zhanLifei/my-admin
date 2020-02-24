import Vue from "vue";

const NoticeConstructor = Vue.extend(require("./index.vue").default); // 直接将Vue组件作为Vue.extend的参数

const demo = options => {
  options = options || {};
//   console.log(options)
  const NoticeInstance = new NoticeConstructor({
    // 实例化一个带有content内容的Notice
    data: options //在这里将你传过来的参数匹配到demo.vue组件的data
  });
  NoticeInstance.vm = NoticeInstance.$mount(); // 挂载但是并未插入dom，是一个完整的Vue实例
  NoticeInstance.vm.visible = true; //这里修改index.vue数据中的visible,这样demo组件就显示出来
  NoticeInstance.dom = NoticeInstance.vm.$el; //获取到本实例的dom元素
  document.body.appendChild(NoticeInstance.dom); // 将dom插入body
  return NoticeInstance.vm;
};

export default demo;
