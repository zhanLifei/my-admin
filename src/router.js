import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/contaihome",
      name: "contaihome",
      component: () => import("./views/contaihome.vue"),
      redirect: { name: 'welcome' },
      children: [
        {
          path: "/welcome",
          name: "welcome",
          component: () => import("@/components/welcome.vue")
        },
        {
          path: "/video",
          name: "video",
          component: () => import("./views/demo/video.vue"),
        },
        {
          path: "/swiper",
          name: "swiper",
          component: () => import("./views/demo/swiper.vue")
        },
        {
          path: "/canvas",
          name: "canvas",
          component: () => import("./views/demo/canvas.vue")
        },
        {
          path: "/canvas1",
          name: "canvas1",
          component: () => import("./views/demo/canvas1.vue")
        },
        {
          path: "/clone",
          name: "clone",
          component: () => import("./views/demo/clone.vue")
        },
        {
          path: "/table",
          name: "table",
          component: () => import("./views/demo/table.vue")
        },
        {
          path: "/tab",
          name: "tab",
          component: () => import("./views/demo/tab.vue")
        },
        {
          path: "/tree",
          name: "tree",
          component: () => import("./views/demo/tree.vue")
        },
        {
          path: "/tree1",
          name: "tree1",
          component: () => import("./views/demo/tree1.vue")
        },
        {
          path: "/render",
          name: "render",
          component: () => import("./views/demo/render.vue")
        },
        {
          path: "/images",
          name: "images",
          component: () => import("./views/demo/images.vue")
        },
        {
          path: "/quest",
          name: "quest",
          component: () => import("./views/demo/quest.vue")
        },
        {
          path: "/dragend",
          name: "/dragend",
          component: () => import("./views/demo/dragend.vue")
        },
        {
          path: "/vueCropper",
          name: "/vueCropper",
          component: () => import("./views/demo/vue-cropper.vue")
        },
        {
          path: "/css手机充电特效",
          name: "css手机充电特效",
          component: () => import("./views/css3/css手机充电特效.vue")
        },
        {
          path: "/css手机充电特效1",
          name: "css手机充电特效1",
          component: () => import("./views/css3/css手机充电特效1.vue")
        },
        {
          path: "/css手机充电特效2",
          name: "css手机充电特效2",
          component: () => import("./views/css3/css手机充电特效2.vue")
        },
        {
          path: "/css手机充电特效3",
          name: "css手机充电特效3",
          component: () => import("./views/css3/css手机充电特效3.vue")
        },
        {
          path: "/css3照片特效",
          name: "css照片特效",
          component: () => import("./views/css3/css照片特效.vue")
        },
        {
          path: '/switch',
          name:'switch',
          component: () => import("./views/css3/switch.vue")
        },
        {
          path: "/myBookmark",
          name: "myBookmark",
          component: () => import("./views/myBookmark.vue")
        },
        {
          path: "/jsonView",
          name: "jsonView",
          component: () => import("./views/json/jsonView.vue")
        },
        {
          path: "/packaging",
          name: "packaging",
          component: () => import("./views/packaging/index.vue")
        }
      ]
    }
  ]
});
