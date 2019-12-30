<template>
  <div>
    <div class="box">
      <div class="left" v-html="vueHtml"></div>
      <div class="right">
        <textarea name="" id="" cols="100%" rows="10" v-model="vueHtml"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vueHtml:''
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  .left {
    width: 50%;
    background-color: #ccc;
  }
  .right {
    width: 50%;
    background-color: #eee;
  }
}
</style>>