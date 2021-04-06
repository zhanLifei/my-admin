<template>
<div>
  <div>{{counts}}</div>
  <el-button @click="toClick">同步修改counts</el-button>
</div>
</template>

<script>
import { index } from '@/api/mock'
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
  },
  mounted(){
    console.log(this.$api)
    // index.$api({
    //     method: 'GET',
    //     url: '/index'
    //   }).then(res=>{
    //     console.log(111111111111,res)
    //   })
  }
}
</script>

<style>

</style>