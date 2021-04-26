<template>
    <div id="tree1">
        <tree :treeData="treeDataone"
        :isAllOpen="true"
        @inselectnode="selectnode"
        @inpulldown="pulldown"
        @incheckednode="checkednode"
        :isShowcheck="true"
        :isMultiple="true"
        :depthShow="1"></tree>
    </div>

</template>

<script>
import tree from "@/components/tree-recursion";
import { treeData } from "../../../static/data";
export default {
  data() {
    return {
      treeDataone: treeData,
    };
  },
  components: {
    tree
  },
  methods: {
    pulldown(obj, type) {
      console.log(obj, type);
    },
    selectnode(obj) {
      console.log(obj);
      this.$index({message:obj.fileName})
    },
    checkednode(arr) {
      console.log(arr);
      
    }
  }
};
</script>

<style>

</style>
