<template>
  <div>
    <render-table ref="ssss" :columns="columns" :tableData="data"></render-table>
  </div>
</template>

<script>
import renderTable from "@/components/render_table/renderTable.vue";
export default {
  components: {
    renderTable,
  },
  data() {
    return {
      columns: [
        {
          label: "姓名",
          prop: "name",
          render: (h, props) => {
            return h(
              "a",
              {
                style: {
                  color: '#f10125',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    this.onClick(props.row);
                  }
                },
              },
              props.row.name
            );
          },
        },
        {
          label: "年龄",
          prop: "age",
          render: (h, props) => {
            return h("a", {}, props.row.age);
          },
        },
        {
          label: "出生日期",
          prop: "birthday",
          render: (h, props) => {
            return h("a", {}, props.row.birthday);
          },
        },
        {
          label: "地址",
          prop: "adress",
          render: (h, props) => {
            return h("a", {}, props.row.adress);
          },
        }
      ],
      data: [
        {
          name: "黄凯",
          age: 11,
          birthday: "1999-02-14",
          adress: "湖北武汉洪山区",
        },
        {
          name: "儿童团",
          age: 20,
          birthday: "1996-02-14",
          adress: "湖北黄冈第一中学",
        },
        {
          name: "斗鱼",
          age: 5,
          birthday: "1994-02-14",
          adress: "广东省深圳腾讯总部",
        },
        {
          name: "爱仕达",
          age: 85,
          birthday: "2000-02-14",
          adress: "山西省朔州市",
        },
        {
          name: "三大",
          age: 26,
          birthday: "2004-02-14",
          adress: "湖北武汉汉阳区",
        },
        {
          name: "sfds",
          age: 26,
          birthday: "2004-02-14",
          adress: "sfafasfaf",
        },
      ],
    };
  },

  methods: {
    onClick(row){
      console.log(row)
    }
  },
  mounted () {
    console.log(this.$refs.ssss);
  }
};
</script>