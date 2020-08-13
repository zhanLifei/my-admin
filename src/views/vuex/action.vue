<template>
  <div>
  <div>{{count}}</div>
  <el-button @click="toClick">异步修改counts</el-button>
</div>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.state.count
    }
  },

  methods: {
    toClick(){
      this.$store.dispatch('updateCountAsync',20)
    }
  }
}
</script>

<style>

</style>