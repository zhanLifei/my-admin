<template>
<!-- 表格假数据分页版本1 -->
  <div>
    <div class="border">
      <!-- table -->
      <el-table :data="newRecordList" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="150"></el-table-column>
        <el-table-column prop="age" label="年龄" width="150"></el-table-column>
        <el-table-column prop="tel" label="电话" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 5, 8, 10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
// 导入组件
export default {
  data() {
    return {
      total: 10,
      pageSize: 3, //每页多少条数据
      currentPage: 1, //当前第几页
      recordList: [
        {
          name: "小米 1",
          age: "21",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小名 2",
          age: "22",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 3",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 4",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 5",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 6",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 7",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 8",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 9",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 10",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 11",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 12",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 13",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 14",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 15",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 16",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 17",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 18",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 19",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 20",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 21",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 22",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 23",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 24",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 25",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 26",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 27",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 28",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 29",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        },
        {
          name: "小红 30",
          age: "23",
          tel: "18720826448",
          address: "广东佛山北滘万联中心16楼"
        }
      ],
      newRecordList: []
    };
  },
  methods: {
    //每页多少条数据
    handleSizeChange(val) {
      this.pageSize = val;
      this.initPage();
    },
    //当前第几页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.initPage();
    },
    // 分页
    initPage() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.newRecordList = this.recordList.slice(start, end);
      console.log(String(start),'至', String(end),'条数据')
    }
  },
  mounted() {
    console.log(this.$route)
    this.initPage();
  }
};
</script>
<style scoped>
.border {
  width: 700px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  padding: 20px;
}
</style>