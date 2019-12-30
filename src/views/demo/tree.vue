<template>
  <div class="tree">
    <tree-recursion v-for="(item ,index) in treeList" :key="index" :dataList="item"></tree-recursion>
  </div>
</template>

<script>
import treeRecursion from "../../components/tree-recursion.vue";
import index from "@/api/mock.js"; //模拟数据
export default {
  components: {
    treeRecursion
  },
  data() {
    return {
      treeList: []
    };
  },
  mounted() {
    this.$api({
      method: "post",
      url: "/category"
    })
      .then(response => {
        this.treeList = response.data.aside
      })
      .catch(function(error) {
        alert(error);
      });
  }
};
</script>

<style scoped>
.tree {
  position: relative;
  padding-left: 30px;
}
</style>