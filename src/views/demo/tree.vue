<template>
  <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
</template>

<script>
export default {
  data() {
    return {
      orgOptions: {}
    };
  },
  mounted() {
    this.orgOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false
        }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
        }
      ]
    };
  }
};
</script>

<style>
</style>