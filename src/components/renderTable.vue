<template>
  <div>
    <el-table :data="tableData">
      <el-table-column
        v-for="(column,index) in columns"
        :key="index"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="scope">
          <span v-if="!column.render">{{scope.row[column.prop]}}</span>
          <custom-col v-else :row="scope.row" :rowIndex="index" :render="column.render"></custom-col>
        </template>
      </el-table-column>
    </el-table>
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
  },
};
export default {
  components: { customCol },
  props: {
    columns: {
      type: Array,
      default: [],
    },
    tableData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      //   tableData: [],
    };
  },
  mounted() {
    
  },
};
</script>