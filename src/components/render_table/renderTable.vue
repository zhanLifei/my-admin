<template>
  <div>
    <el-table :data="tableData" v-loading="loading">
      <el-table-column type='selection' width="40" v-if="selection"></el-table-column>
      <el-table-column
        v-for="(column,index) in columns"
        :key="index"
        :type="column.type"
        :label="column.label"
        :width="column.width"
        :align="column.align"
      >
        <template slot-scope="scope">
          <span v-if="!column.render">{{scope.row[column.prop]}}</span>
          <custom-col v-else :row="scope.row" :rowIndex="index" :render="column.render"></custom-col>
        </template>
      </el-table-column>
    </el-table>
    <div class="mgt15" v-if="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="[5,10,15,20]"
        :page-size="page.pageSize"
        :total="page.total"
        layout="total, sizes, prev, pager, next, jumper"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
const customCol = {
  functional: true,
  props: {
    row: {
      type: Object,
      default() {
        return {};
      },
    },
    rowIndex: {
      type: Number,
    },
    render: {
      type: Function,
      default() {
        return (h, row) => {
          return h("a", {}, row.label);
        };
      },
    },
  },
  render: (h, data) => {
    return data.props.render(h, data.props);
  }
};
export default {
  components: { customCol },
  props: {
    columns: {
      type: Array,
      default: ()=>{
        return []
      },
    },
    tableData: {
      type: Array,
      default: ()=>{
        return []
      },
    },
    selection: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default(){
          return {}
      },
    }
  },
  data() {
    return {
    };
  },
  methods: {
    //每页多少条数据
    handleSizeChange(val) {
      this.$emit("size-update", val);
    },
    //当前第几页
    handleCurrentChange(val) {
      this.$emit("page-update", val);
    },
  },
  mounted () {
  }
};
</script>
<style lang="scss" scoped>
.labelClassName{
  font-weight: 100;
}
/deep/ .el-table{
  font-size: 13px;
  color: #333;
  thead{
    color: #333;
  }
  th>.cell{
    padding-left: 13px;
  }
  th{
    background: transparent;
  }
  tr{
    background: transparent;
  }
}
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  background: transparent;
}
</style>