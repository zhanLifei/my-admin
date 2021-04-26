export default {
  data() {
    return {
      iscollapse: false,
      navList: [
        {
          id: '1',
          name: "我的导航",
          icon: "el-icon-goods",
          children: [
            {
              cid: "1-1",
              path: "welcome",
              name: "编程导航",
            },
          ],
        },
        {
          id: '2',
          name: "建设成本管理",
          icon: "el-icon-share",
          children: [
            {
              cid: "2-1",
              path: "myBookmark",
              name: "建设成本管理",
            },
          ],
        },
        {
            id: '3',
            name: "封装的组件",
            icon: "el-icon-share",
            children: [
              {
                cid: "3-1",
                path: "packaging",
                name: "组件元件",
              },
            ],
          },
          {
            id: '4',
            name: "jsonView",
            icon: "el-icon-star-on",
            children: [
              {
                cid: "4-1",
                path: "jsonView",
                name: "jsonView",
              },
            ],
          },
          {
            id: '5',
            name: "常用功能",
            icon: "el-icon-menu",
            children: [
              {
                cid: "5-1",
                path: "video",
                name: "video视频",
              },
              {
                cid: "5-2",
                path: "swiper",
                name: "swiper轮播",
              },
              {
                cid: "5-3",
                path: "video",
                name: "video视频",
              },
              {
                cid: "5-4",
                path: "v-chart",
                name: "video视频",
              },
              {
                cid: "5-5",
                path: "canvas",
                name: "canvas",
              },
              {
                cid: "5-6",
                path: "iframeDiv",
                name: "iframeDiv",
              },
              {
                cid: "5-8",
                path: "table",
                name: "table假分页",
              },
              {
                cid: "5-9",
                path: "tab",
                name: "tab栏",
              },
              {
                cid: "5-10",
                path: "tree",
                name: "tree",
              },
              {
                cid: "5-11",
                path: "table",
                name: "table假分页",
              },
              {
                cid: "5-12",
                path: "render",
                name: "render表格组件",
              },
              {
                cid: "5-13",
                path: "images",
                name: "上传图片",
              },
              {
                cid: "5-14",
                path: "vueCropper",
                name: "图片裁剪",
              },
              {
                cid: "5-15",
                path: "quest",
                name: "模板问卷",
              },
            ],
          },
          {
            id: '6',
            name: "vuex的使用",
            icon: "el-icon-goods",
            children: [
              {
                cid: "6-1",
                path: "state",
                name: "state的使用",
              },
              {
                cid: "6-2",
                path: "getter",
                name: "getter的使用",
              },
              {
                cid: "6-3",
                path: "mutation",
                name: "mutation的使用",
              },
              {
                cid: "6-4",
                path: "action",
                name: "action的使用",
              },
              {
                cid: "6-5",
                path: "module",
                name: "module的使用",
              },
            ],
          },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  created() {},
};
