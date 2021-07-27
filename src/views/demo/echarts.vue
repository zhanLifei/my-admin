<template>
  <div class="pdt20">
    <h1 class="font24">卡片概况,卡片总数:21张</h1>
    <div class="flex">
      <div class="pie-date" v-for="(item, index) in chartData" :key="index">
        <div class="cast" :id="'new-chart'+index"></div>
        <div>
          <ul class="cart-ul flex space-around">
            <li>
              <div>卡总数</div>
              <div class="mgt10">0</div>
            </li>
            <li v-for="(child, j) in item.data" :key="j">
              <div>{{child.name}}</div>
              <div class="mgt10">{{child.value}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- tab栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo mgt60" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">流量</el-menu-item>
      <el-menu-item index="2">语音</el-menu-item>
      <el-menu-item index="3">短信</el-menu-item>
    </el-menu>
  </div>
</template>

<script>


export default {
  name: "workplace",
  data() {
    return {
      activeName: 'card',
      activeIndex: '1',
      chartData: [
              {
                name: '中国移动',
                data: [
                        {value: 735, name: '可激活'},
                        {value: 580, name: '已激活'},
                        {value: 484, name: '已停用'},
                        {value: 300, name: '其他'}
                    ]
              },
              {
                name: '中国电信',
                data: [
                        {value: 735, name: '可激活'},
                        {value: 580, name: '已激活'},
                        {value: 484, name: '已停用'},
                        {value: 300, name: '其他'}
                    ]
              },
              {
                name: '中国联通',
                data: [
                        {value: 735, name: '可激活'},
                        {value: 580, name: '已激活'},
                        {value: 484, name: '已停用'},
                        {value: 300, name: '其他'}
                    ]
              }
          ]
    }
  },
  mounted(){
    this.drawPie();
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      drawPie(){
          this.chartData.forEach((item,index)=>{
            var lineChart = 'new-chart'+index;
            var lineoption = 'lineoption'+index;
            // 基于准备好的dom，初始化echarts实例
            var lineChart = this.$echarts.init(document.getElementById(lineChart));
            // 绘制图表
            lineoption = {
              color: ['#45e2ff', '#36cbcb', '#ffb629', '#b8b3ff'],
              tooltip: {
                trigger: 'item'
              },
              series: [
                  {
                      name: item.name,
                      type: 'pie',
                      radius: ['45%', '60%'],
                      avoidLabelOverlap: false,
                      label: {
                          show: false,
                          position: 'center'
                      },
                      labelLine: {
                          show: false
                      },
                      data: item.data
                  }
              ]
            };
            lineChart.setOption(lineoption);
        })
      }
    }
}
</script>

<style scoped>
.pie-date{
  height: 300px;
  width: 33.33%;
}
.cast{
  width: 100%;
  height: 100%;
}
.cart-ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
