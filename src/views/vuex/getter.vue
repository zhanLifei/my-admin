<template>
  <div>
    <div v-for="(item,index) in fullName" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    fullName(){
      return this.$store.getters.fullName
    }
  }
}
</script>

<style>

</style>