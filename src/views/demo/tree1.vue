<template>
    <div id="tree1">
        <tree :treeData="treeDataone"
        :isAllOpen="false"
        @inselectnode="selectnode"
        @inpulldown="pulldown"
        @incheckednode="checkednode"
        :isShowcheck="true"
        :isMultiple="true"
        :depthShow="2"></tree>
    </div>

</template>

<script>
import tree from "@/components/tree1-recursion";
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
    },
    checkednode(arr) {
      console.log(arr);
    }
  }
};
</script>

<style>

</style>
