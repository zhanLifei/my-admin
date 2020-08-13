<template>
  <div>
    <el-button
      :type="current === index ? 'primary' : 'ghost'"
      style="margin-right: 10px;"
      v-for="(item, index) in ['暂 停','重 启','终 止']"
      :key="index"
      @click="handleRetartClick(index)"
    >{{item}}</el-button>

    <p v-if="current === 0">这是 暂 停 按钮</p>
    <p v-if="current === 1">这是 重 启 按钮</p>
    <p v-if="current === 2">这是 终 止 按钮</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    };
  },
  methods: {
    handleRetartClick(index) {
      this.current = index;
    }
  }
};
</script>

<style>
</style>