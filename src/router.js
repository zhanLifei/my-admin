import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'welcome' }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/iframeDiv",
      name: "iframeDiv",
      component: () => import("./views/demo/iframeDiv.vue")
    },
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("@/components/welcome.vue")
    },
    {
      path: "/contaihome",
      name: "contaihome",
      component: () => import("./views/contaihome.vue"),
      redirect: { name: 'myBookmark' },
      children: [
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
          meta: { autho: "canvas" },
          component: () => import("./views/demo/canvas.vue")
        },
        {
          path: "/DragCard",
          name: "DragCard",
          component: () => import("./views/demo/DragCard.vue")
        },
        {
          path: "/v-chart",
          name: "v-chart",
          component: () => import("./views/demo/v-chart.vue")
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
          path: "/vueCropper",
          name: "vueCropper",
          component: () => import("./views/demo/vue-cropper.vue")
        },
        // {
        //   path: "/css手机充电特效",
        //   name: "css手机充电特效",
        //   component: () => import("./views/css3/css手机充电特效.vue")
        // },
        // {
        //   path: "/css手机充电特效1",
        //   name: "css手机充电特效1",
        //   component: () => import("./views/css3/css手机充电特效1.vue")
        // },
        // {
        //   path: "/css手机充电特效2",
        //   name: "css手机充电特效2",
        //   component: () => import("./views/css3/css手机充电特效2.vue")
        // },
        // {
        //   path: "/css手机充电特效3",
        //   name: "css手机充电特效3",
        //   component: () => import("./views/css3/css手机充电特效3.vue")
        // },
        // {
        //   path: "/css3照片特效",
        //   name: "css照片特效",
        //   component: () => import("./views/css3/css照片特效.vue")
        // },
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
        },
        {
          path: "/vuex",
          name: "vuex",
          component: () => import("./views/vuex/index.vue"),
          children: [
            {
              path: "/state",
              name: "state",
              component: () => import("./views/vuex/state.vue")
            },
            {
              path: "/getter",
              name: "getter",
              component: () => import("./views/vuex/getter.vue")
            },
            {
              path: "/mutation",
              name: "mutation",
              component: () => import("./views/vuex/mutation.vue")
            },
            {
              path: "/action",
              name: "action",
              component: () => import("./views/vuex/action.vue")
            },
            {
              path: "/module",
              name: "module",
              component: () => import("./views/vuex/module.vue")
            },
          ]
        }
      ]
    }
  ]
});
