<template>
  <div>
    <div class="backlog">
      <div class="info-title">
        <div class="inif-name">
          <div style="margin-bottom: 5px">早上好, 湛礼飞</div>
          <div style="font-size: 12px; color: #999">
            深圳地铁项目组 &nbsp;前端开发
          </div>
        </div>
        <div class="inif-name">
          <div style="margin-bottom: 5px">24℃ 多云</div>
          <div style="font-size: 12px; color: #999">12月5日 星期四</div>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <div style="float:right">
        <span style="font-size: 14px">选择年份：</span>
        <el-select v-model="value" @change="handChangeDate" size="mini" placeholder="请选择年份">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button style="margin-left: 15px" type="success" round size='mini' @click="drawer = true">明细</el-button>
      </div>
      <div id="line-chart1"></div>
    </div>

    <!-- 弹窗 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
// 引入封装的格式化时间
// import { formatTime } from "../ulit/dateTime";
import echarts from "echarts";

export default {
  data() {
    return {
      options: [
        {
          value: '2020',
          label: '2020年'
        }, {
          value: '2021',
          label: '2021年'
        }],
      value: '2020',
      lineChart1: {},
      lineoption1: {},
      // 支付宝消费
      AlipayData: [
        {
          DateValue: 2020,
          xAxisData: ["1月份", "2月份", "3月份", "4月份", "5月份", "6月份", "7月份", "8月份", "9月份", "10月份", "11月份", "12月份", ],
          // 支出
          expenditure: [3267,63693.05,4198.49,1410.28,1540.65,2303.79,2433.20,1373.79,9910.16,7160.59,3867.37,12,3599.82],
          // 收入
          income: [39.46,3427,0,17.43,200,0,0,0,0,40,0,816.01],
        },
        {
          DateValue: 2021,
          xAxisData: ["1月份"],
          // 支出
          expenditure: [4762.36],
          // 收入
          income: [1100],
        }
      ],
      drawer: false,
      direction: 'rtl',
    };
  },
  methods: {
    handChangeDate(val){
      if(val == '2021'){
        this.lineChart1.setOption({
          xAxis:[
            {
              data: this.AlipayData[1].xAxisData,
            }
          ],
          yAxis:[
            {
              max: Math.ceil(Math.max.apply(null,this.AlipayData[1].expenditure)/5) *5,
					    interval: Math.ceil(Math.max.apply(null,this.AlipayData[1].expenditure)/5),
            },
            {
              max: Math.ceil(Math.max.apply(null,this.AlipayData[1].income)/5) *5,
					    interval: Math.ceil(Math.max.apply(null,this.AlipayData[1].income)/5),
            }
          ],
          series: [
            {
              data: this.AlipayData[1].expenditure,
            },
            {
              data: this.AlipayData[1].income,
            }
          ],
        });
      } else {
        this.lineChart1.setOption({
          xAxis:[
            {
              data: this.AlipayData[0].xAxisData,
            }
          ],
          yAxis:[
            {
              max: Math.ceil(Math.max.apply(null,this.AlipayData[0].expenditure)/5) *5,
					    interval: Math.ceil(Math.max.apply(null,this.AlipayData[0].expenditure)/5),
            },
            {
              max: Math.ceil(Math.max.apply(null,this.AlipayData[0].income)/5) *5,
					    interval: Math.ceil(Math.max.apply(null,this.AlipayData[0].income)/5),
            }
          ],
          series: [
            {
              data: this.AlipayData[0].expenditure,
            },
            {
              data: this.AlipayData[0].income,
            }
          ],
        });
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    init() {
      this.lineChart1 = echarts.init(document.getElementById("line-chart1")); //建设动态成本监控
      this.lineoption1 = {
        title: {
          text: "2020年度消费情况",
          textStyle: {
            //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            color: "#333",
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Microsoft YaHei",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          textStyle: {
            color: "#999999",
          },
          left: "right",
        },
        calculable: true,
        grid: {
          x: 25,
          x2: 25,
          y: 80,
          y2: 0,
          containLabel: true, //根据刻度值自适应边距
        },
        xAxis: [
          {
            type: "category",
            data: this.AlipayData[0].xAxisData,
            // boundaryGap: false,
            axisPointer: {
              type: "shadow",
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#999999",
              },
              interval: 0,
              rotate: 30,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "单位：元",
            max: Math.ceil(Math.max.apply(null,this.AlipayData[0].expenditure)/5) *5,
					  interval: Math.ceil(Math.max.apply(null,this.AlipayData[0].expenditure)/5),
            nameTextStyle: {
              color: "#999",
              padding: [0, 0, 10, 40], // 四个数字分别为上右下左与原位置距离
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#999999",
              },
            },
            splitLine: {
              //show: false,
              lineStyle: {
                color: "#ddd",
              },
            },
          },
          {
            type: "value",
            name: "单位：元",
            max: Math.ceil(Math.max.apply(null,this.AlipayData[0].income,)/5) *5,
					  interval: Math.ceil(Math.max.apply(null,this.AlipayData[0].income,)/5),
            nameTextStyle: {
              color: "#999",
              padding: [0, 0, 10, -40], // 四个数字分别为上右下左与原位置距离
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#999999",
              },
            },
            splitLine: {
              //show: false,
              lineStyle: {
                color: "#ddd",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            barWidth: 20,
            name: "支付宝消费",
            data: this.AlipayData[0].expenditure,
            itemStyle: {
              normal: {
                color: "#1a9a46",
                borderColor: "#1a9a46",
              },
            },
          },
          {
            name: "支付宝收入",
            type: "line",
            smooth: true,
            yAxisIndex: 1,	// 右刻度
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#B7D342", //改变折线点的文字颜色
              },
            },
            itemStyle: {
              normal: {
                color: "#b7d342",
                borderColor: "#b7d342",
                borderWidth: 1,
                lineStyle: {
                  color: "#b7d342",
                },
              },
            },
            data: this.AlipayData[0].income,
          }
        ],
      };
      this.lineChart1.setOption(this.lineoption1);
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.backlog {
  width: 100%;
  padding-right: 20px;
  border-bottom: 1px solid #e5e5e5;
  border-left: 4px solid #409eff;
  padding: 8px 15px 8px 15px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  .info-title {
    display: flex;
    justify-content: space-between;
  }
}
.contentBox {
  margin: 20px 0 20px 0;
  padding: 24px 24px 24px 24px;
  border-radius: 0px;
  background-color: #fff;
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  #line-chart1 {
    margin-top: 50px;
    width: 100%;
    height: 400px;
  }
}
</style>