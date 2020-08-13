<template>
<div>
  <div>{{counts}}</div>
  <el-button @click="toClick">同步修改counts</el-button>
</div>
</template>

<script>
export default {
  computed: {
    counts(){
      return this.$store.state.counts
    }
  },

  methods: {
    toClick(){
      setInterval(() => {
        this.$store.commit('increment',parseInt(20))
      }, 1000);
    }
  }
}
</script>

<style>

</style>