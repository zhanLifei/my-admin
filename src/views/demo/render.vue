<template>
  <div>
    <render-table :columns="columns" :data="data" stripe></render-table>
  </div>
</template>

<script>
import renderTable from "../../components/render";
export default {
  components: {
    renderTable
  },
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "年龄",
          key: "age",
          sortTable: true
        },
        {
          title: "出生日期",
          key: "birthday",
          sortTable: true
        },
        {
          title: "地址",
          key: "adress"
        }
      ],
      data: [
        {
          name: "黄凯",
          age: 11,
          birthday: "1999-02-14",
          adress: "湖北武汉洪山区"
        },
        {
          name: "儿童团",
          age: 20,
          birthday: "1996-02-14",
          adress: "湖北黄冈第一中学"
        },
        {
          name: "斗鱼",
          age: 5,
          birthday: "1994-02-14",
          adress: "广东省深圳腾讯总部"
        },
        {
          name: "爱仕达",
          age: 85,
          birthday: "2000-02-14",
          adress: "山西省朔州市"
        },
        {
          name: "三大",
          age: 26,
          birthday: "2004-02-14",
          adress: "湖北武汉汉阳区"
        }
      ]
    };
  }
};
</script>