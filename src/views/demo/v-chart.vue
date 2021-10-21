<template>
  <div class="backlog-box">
    <div class="backlog-left">
      <div class="info-title">
        <div class="inif-name">
          <div style="margin-bottom:5px">早上好, 李大鹏</div>
          <div style="font-size:12px;color:#999">运营管理中心 &nbsp;高级运营经理</div>
        </div>
        <div class="inif-name">
          <div style="margin-bottom:5px">24℃ 多云</div>
          <div style="font-size:12px;color:#999">12月5日 星期四</div>
        </div>
      </div>
      <!-- 待办数据 -->
      <div class="backlog-number">
        <div class="all-backlog" style="width:135px;margin-right:20px">
          <div class="infoData">488</div>
          <div style="font-size:12px;color:#666">今日待办</div>
        </div>
        <div class="all-backlog">
          <div style="border-right:1px solid #999">
            <div class="infoData">1491</div>
            <div style="font-size:12px;color:#666">本月累计处理</div>
          </div>
        </div>
        <div class="all-backlog">
          <div style="font-size:12px;color:#999">
            <div class="list"></div>我的工单
            <span style="color:#333">123</span>
          </div>
          <div style="font-size:12px;color:#666">
            <div style="margin-top:10px;font-size:12px;color:#999">
              <div class="list" style="background-color: #2dbbff"></div>我的工单
              <span style="color:#333">123</span>
            </div>
          </div>
        </div>
        <div class="all-backlog">
          <div style="font-size:12px;color:#999">
            <div class="list" style="#2cd9c5"></div>我的工单
            <span style="color:background-color: #333">123</span>
          </div>
          <div style="font-size:12px;color:#666">
            <div style="margin-top:10px;font-size:12px;color:#999">
              <div class="list" style="background-color: #ffc800"></div>我的工单
              <span style="color:#333">123</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 工单,车场审核,访客... -->
      <div class="my-order">
        <div class="order">
          <img class="icon-shuxin" src="../../assets/icon／location备份 3.png" alt />
          <div class="nunber-color">36</div>
          <div class="order-font">我的工单</div>
        </div>
        <div class="order" style="border-top: 1.5px solid #2dbbff;">
          <img class="icon-shuxin" src="../../assets/icon／location备份 3.png" alt />
          <div class="nunber-color">149</div>
          <div class="order-font">车场审核</div>
        </div>
        <div class="order" style="border-top: 1.5px solid #2cd9c5;">
          <img class="icon-shuxin" src="../../assets/icon／location备份 3.png" alt />
          <div class="nunber-color">58</div>
          <div class="order-font">访客审核</div>
        </div>
        <div class="order" style="border-top: 1.5px solid #ffc800;">
          <img class="icon-shuxin" src="../../assets/icon／location备份 3.png" alt />
          <div class="nunber-color">268</div>
          <div class="order-font">内容运营</div>
        </div>
      </div>
    </div>
    <div class="backlog-right">
      <div>数据看板</div>
      <!-- tab的按钮 -->
      <div class="tab-nav">
        <div class="ctrl">
          <span
            v-for="(item, index) in [`我的工单`,`客户投诉`, `App运营`]"
            :key="index"
            @click="handleClick( index )"
            :class="{ active: current === index  }"
            style="font-size:12px"
          >{{item}}</span>
        </div>
      </div>
      <!-- 数据看板 -->
      <div v-if="current==0">
        <div class="backlog-number" style="margin-top: 20px;">
          <div class="complaint">
            <div>
              <div class="infoData">132</div>
              <div style="font-size:12px;color:#666">投诉总数</div>
            </div>
          </div>
          <div class="complaint">
            <div>
              <div class="infoData">18%</div>
              <div style="font-size:12px;color:#666">未处理占比</div>
            </div>
          </div>
          <div class="complaint">
            <div>
              <div class="infoData">1491</div>
              <div style="font-size:12px;color:#666">处理满意度</div>
            </div>
          </div>
        </div>
        <!-- 图形 -->
        <div class="quxiantu">
          <div class="quxiantu-title">工单统计</div>
            <ve-bar
              :data="orderData"
              :settings="orderSettings"
              :extend="cpuExtend"
              :data-empty="dataEmpty"
              width="96%"
              height="300px"
              style="position: absolute;left: 10px;top: 10px;"
            ></ve-bar>
        </div>
      </div>
      <div v-if="current==1">
        <div class="backlog-number" style="margin-top: 20px;">
          <div class="complaint">
            <div>
              <div class="infoData">132</div>
              <div style="font-size:12px;color:#666">投诉总数</div>
            </div>
          </div>
          <div class="complaint">
            <div>
              <div class="infoData">18%</div>
              <div style="font-size:12px;color:#666">未处理占比</div>
            </div>
          </div>
          <div class="complaint">
            <div>
              <div class="infoData">79%</div>
              <div style="font-size:12px;color:#666">处理满意度</div>
            </div>
          </div>
        </div>
        <!-- 图形 -->
        <div class="quxiantu">
          <ve-line
            :data="orderData1"
            :settings="orderSettings1"
            :yAxis="yAxis"
            height="300px"
            width="100%"
            style="position: absolute;left: -50px;top: 25px;"
          ></ve-line>
        </div>
      </div>
      <div v-if="current==2">
        <div class="backlog-number" style="margin-top: 20px;">
          <div class="complaint">
            <div>
              <div class="infoData">
                178
                <strong class="addicon">
                  ↑
                  <div class="after"></div>
                </strong>
              </div>
              <div style="font-size:12px;color:#666">新增用户</div>
            </div>
          </div>
          <div class="complaint">
            <div>
              <div class="infoData">24680</div>
              <div style="font-size:12px;color:#666">用户总数</div>
            </div>
          </div>
          <div class="complaint">
            <div>
              <div class="infoData">76.8%</div>
              <div style="font-size:12px;color:#666">用户留存比</div>
            </div>
          </div>
        </div>
        <!-- 图形 -->
        <div class="quxiantu">
          <ve-line
            :data="orderData2"
            :yAxis="yAxis"
            :settings="orderSettings2"
            height="300px"
            width="100%"
            style="position: absolute;left:10px;top: 25px;"
          ></ve-line>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";
import VeBar from "v-charts/lib/bar.common";
import clone from "lodash";
export default {
  components: {
    VeLine,
    VeBar
  },
  data() {
    return {
      current: 1,
      yAxis: {},
      dataEmpty:true,
      // 工单统计
      orderData: {
        columns: ["type", "count"],
        rows: [
          { type: "1/1", count: 1393 },
          { type: "1/2", count: 3530 },
          { type: "1/3", count: 2923 },
          { type: "1/4", count: 1723 },
          { type: "1/5", count: 3792 },
          { type: "1/6", count: 2792 },
          { type: "1/7", count: 1792 }
        ]
      },
      cpuExtend: { 
        minInterval: 1,
        series: {
          //柱子宽度设置barWidth
          barWidth: 10,
          itemStyle: {
            //柱子圆角设置barBorderRadius
            emphasis: {
            barBorderRadius: 2
            },
            normal: {
              barBorderRadius: 3,
              color: function (params){
              var colorList = ['#0094d8','#0094d8','#0094d8'];
              return colorList[params.dataIndex];
              }
            },
          }
        }
      },
      orderSettings: {
        //设置中文图例
        labelMap: {
          //date对应后台返回json数据的key，具体值根据接口字段来修改
          type: "类型", //total对应后台返回son数据的value，具体值根据接口字段来修改
          count: "工单统计"
        },
        itemStyle: {
          color: "rgba(0, 145, 215, 0.9)"
        },
      },
      // 工单统计
      orderData1: {
        columns: ["type", "count"],
        rows: [
          { type: "1/1", count: 1393 },
          { type: "1/2", count: 3530 },
          { type: "1/3", count: 2923 },
          { type: "1/4", count: 1723 },
          { type: "1/5", count: 3792 },
          { type: "1/6", count: 2792 },
          { type: "1/7", count: 1792 }
        ]
      },
      
      // 工单统计
      orderData2: {
        columns: ["type", "count"],
        rows: [
          { type: "1/1", count: 200 },
          { type: "1/2", count: 1235 },
          { type: "1/3", count: 852 },
          { type: "1/4", count: 2555 },
          { type: "1/5", count: 4563 },
          { type: "1/6", count: 8569 },
          { type: "1/7", count: 1792 }
        ]
      },
      orderSettings2: {},
      orderSettings1: {
        //设置中文图例
        labelMap: {
          //date对应后台返回json数据的key，具体值根据接口字段来修改
          type: "类型", //total对应后台返回son数据的value，具体值根据接口字段来修改
          count: "工单统计"
        },
        itemStyle: {
          color: "rgba(0, 145, 215, 0.9)"
        },
      },
      orderSettings1: { },
      orderSettings2: {
        //设置中文图例
        labelMap: {
          //date对应后台返回json数据的key，具体值根据接口字段来修改
          type: "类型", //total对应后台返回son数据的value，具体值根据接口字段来修改
          count: "工单统计"
        },
        
        itemStyle: {
          color: "#3491d1"
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#f3f9fc" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#d1e9f6" // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
      }
    };
  },

  methods: {
    handleClick(index) {
      this.current = index;
    }
  },
  mounted() {
    this.yAxis = {
      splitLine: {
        show: false
      }
    };
  }
};
</script>

<style scoped>
.backlog-box {
  display: flex;
}
.backlog-left {
  width: 50%;
  height: 500px;
  padding-right: 20px;
}
.info-title {
  display: flex;
  justify-content: space-between;
}
.backlog-number {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
.all-backlog {
  width: 25%;
  height: 91px;
  background-color: #f9f9fb;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.list {
  width: 8px;
  height: 8px;
  background-color: #947ffc;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 1px;
}
.infoData {
  font-size: 24px;
}
.font12 {
  font-size: 12px;
  color: rgba(102, 102, 102, 1);
  margin-bottom: 15px;
  position: relative;
}
.progress {
  width: 510%;
  height: 8px;
  position: absolute;
  /* background-color: red; */
  top: 4px;
  left: 100%;
  z-index: 1;
}
.progress-size {
  width: 0%;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background-color: rgba(0, 145, 215, 1);
}

.progress-number {
  /* background-color: rgb(205, 196, 196); */
  width: 20px;
  height: 20px;
  border-radius: 10px 10px 10px 0;
  text-align: center;
  position: absolute;
  top: -15px;
  display: none;
}
.progress-size:hover .progress-number {
  display: block;
}
.borderright {
  border-right: 1px solid #e9ebf1;
  width: 12%;
  color: rgba(154, 161, 169, 1);
  font-size: 11px;
  position: relative;
}
.my-order {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
}
.order {
  width: 49.2%;
  height: 142px;
  margin-top: 10px;
  border: 1px solid #f2f2f2;
  border-top: 1.5px solid #947ffc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.nunber-color {
  text-align: center;
  color: #0091d7;
  font-size: 24px;
}
.order-font {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 10px;
}
.icon-shuxin {
  width: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.addicon {
  color: #f10125;
  display: inline-block;
  position: relative;
}
.after {
  width: 10px;
  height: 15px;
  background-color: #f9f9fb;
  position: absolute;
  top: 16px;
  left: 0;
}
.backlog-right {
  width: 50%;
  height: 500px;
  padding-left: 20px;
}
.tab-nav {
  border-bottom: 1px solid #f2f2f2;
}
.ctrl {
  margin: 20px 0 11px 0;
}

.ctrl span {
  cursor: pointer;
  margin-right: 24px;
}
.active {
  color: rgba(11, 141, 203, 1);
  border-bottom: 1.5px solid rgba(11, 141, 203, 1);
  padding-bottom: 11px;
}
.complaint {
  width: 32%;
  height: 72px;
  margin-bottom: 16px;
  background-color: #f9f9fb;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.statistical {
  display: flex;
}
.quxiantu {
  width: 100%;
  height: 300px;
  border: 1px solid rgba(242, 242, 242, 1);
  padding: 20px 30px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
</style>