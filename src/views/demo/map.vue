<template>
  <div>
    <div
      style="border:1px solid #eee;padding: 5px 0;width:100px;text-align: center;cursor:pointer"
      v-for="(item,index) in arr"
      :key="index"
      @click="deleClick(item,index)"
    >{{item.name}}</div>
    <el-button @click="btnClick">点击按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        title: "问卷题目标题",
        titleImg: "img",
        beizhu: "备注",
        documentList: [
          {
            seqNo: 1,
            title: "选项题目标题1",
            beizhu: "备注",
            options: [
              {
                optLabel: "选项1",
                optId: "15264"
              },
              {
                optLabel: "选项2",
                optId: "15856"
              },
              {
                optLabel: "选项3",
                optId: "84236"
              }
            ]
          },
          {
            seqNo: 1,
            title: "选项题目标题2",
            beizhu: "备注",
            options: [
              {
                optLabel: "选项1",
                optId: "15264"
              },
              {
                optLabel: "选项2",
                optId: "15856"
              },
              {
                optLabel: "选项3",
                optId: "84236"
              }
            ]
          }
        ]
      },
      arr: [
        { name: "分类1", id: 1, value: "1111" },
        { name: "分类2", id: 2, value: "1111" },
        { name: "分类3", id: 3, value: "1111" },
        { name: "分类4", id: 4, value: "2222" },
        { name: "分类5", id: 5, value: "2222" },
        { name: "分类6", id: 6, value: "2222" },
        { name: "分类7", id: 7, value: "2222" },
        { name: "分类8", id: 8, value: "3333" },
        { name: "分类9", id: 9, value: "3333" },
        { name: "分类10", id: 10, value: "3333" },
        { name: "分类11", id: 11, value: "4444" },
        { name: "分类12", id: 12, value: "4444" }
      ]
    };
  },
  methods: {
    btnClick() {
      let data = this.formData;
      data.documentList.map((item, i) => {
        item.seqNo = i + 2;
      });

      this.list.push(this.list[0]);
      console.log(data);
    },

    deleClick(val, index) {
      this.$api({
        method:'get',
        url:'/getArticleList?keyword=&likes=&state=1&tag_id=&category_id=&pageNum=1&pageSize=10'
      }).then(res=>{
        console.log(res);
      })
    }
  }
};
</script>

<style>
</style>