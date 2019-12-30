<template>
  <div>
    <div style="position: relative;">
      <i class="dasite el-icon-caret-right" @click="treeClick" v-if="isTreeTogon"></i>
      <i class="dasite el-icon-caret-bottom" @click="treeClick" v-if="!isTreeTogon"></i>
      <div style="padding: 5px 0;cursor: pointer;" @click="treeClick">{{dataList.name}}</div>
      <div v-if="!isTreeTogon">
        <lists
          class="treeStyle"
          v-for="(item ,index) in dataList.childer"
          :key="index"
          :dataList="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lists",
  props: ["dataList"],
  data() {
    return {
      isTreeTogon: true
    };
  },
  methods: {
    treeClick() {
      this.isTreeTogon = !this.isTreeTogon;
    },
  }
};
</script>

<style scoped>
.treeStyle {
  padding: 0 30px;
}
.dasite {
  display: inline-block;
  position: absolute;
  color: #c0c4cc;
  top: 10px;
  left: -23px;
  cursor: pointer;
}
</style>