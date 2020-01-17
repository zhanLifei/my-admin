<template>
  <button
    :style="{
        backgroundColor:type=='primary'?'#409eff':''
        ||type=='success'?'#67c23a':''
        ||type=='info'?'#909399':''
        ||type=='warning'?'#e6a23c':''
        ||type=='danger'?'#f56c6c':'',
        color: type!=='success'||'info'||'warning'||'danger' ? '#fff':'#606266',
        borderRadius:round == true ?'30px':'5px'}"
    :radius="round"
    @click="butClick"
    class="fx-bottom"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "#fff"
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    butClick() {
      this.$emit("butClick");
    }
  }
};
</script>

<style scoped>
.fx-bottom {
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #dcdfe6;
  outline: none;
  display: inline-block;
  background-color: rgb(120, 110, 110);
  color: #606266;
  cursor: pointer;
  line-height: 22px;
}
.fx-bottom:hover {
  opacity: 0.7;
}
</style>