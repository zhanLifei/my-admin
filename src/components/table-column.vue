<template>
    <th style="color:#909399;text-align: left;padding:12px 0;width:200px">{{label}}</th>
</template>
<script>
export default {
    props: {
      label: {
        type: String,
        default: ''
      }
    },
  data() {
    return {
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>