<template>
  <div>
    <div class="boxTable">
      <table style="border-bottom:1px solid #ebebeb;width:100%">
      <thead>
        <tr>
          <el-table-column label="时间"></el-table-column>
          <el-table-column label="姓名"></el-table-column>
          <el-table-column label="地址"></el-table-column>
        </tr>
      </thead>
    </table>
      <table>
        <tbody>
          <tr v-for="(item,index) in dataList" :key="index">
            <td style="color:#606266;padding:12px 0;width:200px;border-bottom:1px solid #ebebeb;">{{item.date}}</td>
            <td style="color:#606266;padding:12px 0;width:200px;border-bottom:1px solid #ebebeb;">{{item.name}}</td>
            <td style="color:#606266;padding:12px 0;width:250px;border-bottom:1px solid #ebebeb;">{{item.address}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import elTableColumn from "./table-column";
export default {
    props: {
      dataList: {
        type: Array,
        default: []
      }
    },
  components: {
    elTableColumn
  },
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>
<style scoped>
.boxTable {
  padding: 24px;
  display: inline-block;
  border: 1px solid #ebebeb;
  margin: 50px auto;
}
</style>