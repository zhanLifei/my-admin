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
      component: () => import("@/views/login.vue")
    },
    {
      path: "/iframeDiv",
      name: "iframeDiv",
      component: () => import("@/views/demo/iframeDiv.vue")
    },
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("@/components/welcome.vue")
    },
    {
      path: "/imagePreview",
      name: "imagePreview",
      component: () => import("@/components/image-preview.vue")
    },
    {
      path: "/contaihome",
      name: "contaihome",
      component: () => import("@/views/contaihome.vue"),
      redirect: { name: 'myBookmark' },
      children: [
        // 常用功能
        {
          path: "/video",
          name: "video",
          component: () => import("@/views/demo/video.vue"),
        },
        {
          path: "/swiper",
          name: "swiper",
          component: () => import("@/views/demo/swiper.vue")
        },
        {
          path: "/canvas",
          name: "canvas",
          meta: { autho: "canvas" },
          component: () => import("@/views/demo/canvas.vue")
        },
        {
          path: "/v-chart",
          name: "v-chart",
          component: () => import("@/views/demo/v-chart.vue")
        },
        {
          path: "/table",
          name: "table",
          component: () => import("@/views/demo/table.vue")
        },
        {
          path: "/tab",
          name: "tab",
          component: () => import("@/views/demo/tab.vue")
        },
        {
          path: "/tree",
          name: "tree",
          component: () => import("@/views/demo/tree.vue")
        },
        {
          path: "/images",
          name: "images",
          component: () => import("@/views/demo/images.vue")
        },
        {
          path: "/quest",
          name: "quest",
          component: () => import("@/views/demo/quest.vue")
        },
        {
          path: "/vueCropper",
          name: "vueCropper",
          component: () => import("@/views/demo/vue-cropper.vue")
        },
        {
          path: "/slot",
          name: "slot",
          component: () => import("@/views/demo/slot.vue")
        },
        {
          path: "/DragCard",
          name: "DragCard",
          component: () => import("@/views/demo/DragCard.vue")
        },
        {
          path: '/EventEmitter',
          name: 'EventEmitter',
          component: () => import("@/views/demo/EventEmitter/index.vue")
        },
        {
          path: "/render_table",
          name: "render_table",
          component: () => import("@/views/Application_scenarios/render_table/render.vue")
        },
        {
          path: "/echarts",
          name: "echarts",
          component: () => import("@/views/Application_scenarios/card_profile/echarts.vue")
        },
        {
          path: '/simulation_chat',
          name: 'simulation_chat',
          component: () => import("@/views/Application_scenarios/simulation_chat/chat.vue")
        },
        {
          path: '/switch',
          name:'switch',
          component: () => import("@/views/css3/switch.vue")
        },
        {
          path: "/myBookmark",
          name: "myBookmark",
          component: () => import("@/views/myBookmark.vue")
        },
        {
          path: "/jsonView",
          name: "jsonView",
          component: () => import("@/views/json/jsonView.vue")
        },
        {
          path: "/packaging",
          name: "packaging",
          component: () => import("@/views/packaging/index.vue")
        },
        {
          path: "/images-etidor",
          name: "images-etidor",
          component: () => import("@/views/demo/images-etidor.vue")
        },
        {
          path: "/vuex",
          name: "vuex",
          component: () => import("@/views/vuex/index.vue"),
          children: [
            {
              path: "/state",
              name: "state",
              component: () => import("@/views/vuex/state.vue")
            },
            {
              path: "/getter",
              name: "getter",
              component: () => import("@/views/vuex/getter.vue")
            },
            {
              path: "/mutation",
              name: "mutation",
              component: () => import("@/views/vuex/mutation.vue")
            },
            {
              path: "/action",
              name: "action",
              component: () => import("@/views/vuex/action.vue")
            },
            {
              path: "/module",
              name: "module",
              component: () => import("@/views/vuex/module.vue")
            },
          ]
        }
      ]
    },
    {
      path: "/app",
      name: "app",
      component: () => import("@/views/app/index.vue"),
      redirect: { name: 'home' },
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/app/components/home.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("@/views/app/components/cart.vue"),
        },
        {
          path: "/classify",
          name: "classify",
          component: () => import("@/views/app/components/classify.vue"),
        },
        {
          path: "/my",
          name: "my",
          component: () => import("@/views/app/components/my.vue"),
        }
      ]
    },
    {
      path: "/details",
      name: "details",
      component: () => import("@/views/app/detailsPage.vue")
    },
  ]
});
