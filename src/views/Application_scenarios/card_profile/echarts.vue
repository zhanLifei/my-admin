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
    <!-- 折线图图表 -->
    <div class="mgt15">
      <div id="line-chart" style="width: 100%;height: 330px;"></div>
      <div class="forter">Ver:0.3.24</div>
    </div>
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
                    {value: 735, name: '可激活', accounted: '35.02'},
                    {value: 580, name: '已激活', accounted: '27.63'},
                    {value: 484, name: '已停用', accounted: '23.06'},
                    {value: 300, name: '其他', accounted: '14.29'}
                ]
          },
          {
            name: '中国电信',
            data: [
                    {value: 735, name: '可激活', accounted: '35.02'},
                    {value: 580, name: '已激活', accounted: '27.63'},
                    {value: 484, name: '已停用', accounted: '23.06'},
                    {value: 300, name: '其他', accounted: '14.29'}
                ]
          },
          {
            name: '中国联通',
            data: [
                    {value: 735, name: '可激活', accounted: '35.02'},
                    {value: 580, name: '已激活', accounted: '27.63'},
                    {value: 484, name: '已停用', accounted: '23.06'},
                    {value: 300, name: '其他', accounted: '14.29'}
                ]
          }
      ]
    }
  },
  mounted(){
    this.drawPie();
    this.drawLine();
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
                trigger: 'item',
                formatter: function(parmas){
                  return  item.name + ' ' + '</br>' + parmas.data.name +  ':' +  parmas.data.value +' (' + parmas.data.accounted + '%)'
                }
              },
              calculable: true,
              series: [
                {
                  name: item.name,
                  type: 'pie',
                  radius: [55, 80],
                  center: ['50%', '50%'],
                  label:{
                    formatter: function(parmas){
                      return  parmas.name
                    }
                  },
                  data: item.data.sort(function (a, b) { return b.value - a.value; })
                }
              ]
            };
            lineChart.setOption(lineoption);
        })
      },
      drawLine(){
        var lineChart = this.$echarts.init(document.getElementById('line-chart'));
        let lineoption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            title: {
                text: '近30天流量消耗',
                subtext: '本月用量: 移动: 0G  联通: 0G  电信: 0G'
            },
            legend: {
                textStyle: {
                        color: '#999999'
                    },
                    top:'1%'

            },
            calculable : true,
            grid: {
                x: 25,
                x2: 45,
                y: 70,
                y2: 0,
                containLabel: true,	//根据刻度值自适应边距
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data: ['2021-06-28', '2021-06-29', '2021-06-30', '2021-06-31', '2021-07-01' ,'2021-07-02','2021-07-03','2021-07-04', '2021-07-05','2021-07-06','2021-07-07','2021-07-08','2021-07-09'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:{
                        lineStyle:{
                            color: '#414141',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#555555'
                        },
                        interval:0,
                        // rotate:30
                    },

                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name: '',
                    axisLine:{
                        lineStyle:{
                            color: '#414141',
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#555555'
                        },
                        formatter: '{value}G',	// 给y轴刻度之定义单位
                    },
                    splitLine:{
                        lineStyle:{
                            color: '#ddd',
                        }
                    }
                },


            ],
            series : [
                {
                    name: '中国移动',
                    type: 'line',
                    smooth:true,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#4fcfef'//改变折线点的文字颜色
                        },
                    },
                    markLine: {
                        lineStyle:{
                            type: 'solid'
                        },
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: '#4fcfef',
                            borderColor: '#4fcfef',
                            borderWidth: 1,
                            lineStyle: {
                                color: '#4fcfef',
                            }
                        }
                    },
                    data:[4.76, 7.05,7.49,5.8,7.29,6.47,5.36,6.12,3.81,5.33,6.72,6.88,8.46],
                },
                {
                    name: '中国联通',
                    type: 'line',
                    smooth:true,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#de6862'//改变折线点的文字颜色
                        },
                    },
                    markLine: {
                        lineStyle:{
                            type: 'solid'
                        },
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: '#de6862',
                            borderColor: '#de6862',
                            borderWidth: 1,
                            lineStyle: {
                                color: '#de6862',
                            }
                        }
                    },
                    data:[2.76, 5.05,5.49,3.8,4.29,3.47,2.36,3.12,1.81,3.33,4.72,5.88,6.46],
                },
                {
                    name: '中国电信',
                    type: 'line',
                    smooth:true,
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#46df83'//改变折线点的文字颜色
                        },
                    },
                    markLine: {
                        lineStyle:{
                            type: 'solid'
                        },
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    itemStyle: {
                        normal: {
                            color: '#46df83',
                            borderColor: '#46df83',
                            borderWidth: 1,
                            lineStyle: {
                                color: '#46df83',
                            }
                        }
                    },
                    data:[1.76, 3.05,3.49,2.8,3.29,2.47,1.36,2.12,0.81,2.33,3.72,4.88,5.46],
                },
            ]
        };
        lineChart.setOption(lineoption);
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
.forter{
  text-align: right;
  margin-top: 20px;
}
</style>
