<template>
  <div class="container">
      <!-- 颜色块 -->
      <div class="total-revenue">
          <div class="total-box">
              <div class="son">
                  <div class="title">总金额</div>
                  <div class="price"><span>￥<em>2.62</em></span></div>
              </div>
          </div>
          <div class="total-box">
              <div class="son">
                  <div class="title">总收益</div>
                  <div class="price"><span>￥<em>2.86</em></span></div>
              </div>
          </div>
          <div class="total-box">
              <div class="son">
                  <div class="title">本月总金额</div>
                  <div class="price"><span>￥<em>0</em></span></div>
              </div>
          </div>
          <div class="total-box">
              <div class="son">
                  <div class="title">本月总收益</div>
                  <div class="price"><span>￥<em>0</em></span></div>
              </div>
          </div>
      </div>
      <div class="screening">
        <label><el-input v-model="iccidNum" placeholder="ICCID/SIM卡号"></el-input></label>
        <label>
          <el-select v-model="valueType" placeholder="请选择运营商">
              <el-option key="选项1" label="移动" value="选项1"></el-option>
              <el-option key="选项2" label="联通" value="选项2"></el-option>
              <el-option key="选项3" label="电信" value="选项3"></el-option>
          </el-select>
        </label>
        <label>
          <el-select v-model="valueType" placeholder="请选择通道">
              <el-option key="选项1" label="中亿白名单" value="选项1"></el-option>
          </el-select>
        </label>
        <label>
          <el-select v-model="valueType" placeholder="请选择套餐">
              <el-option key="选项1" label="中亿的" value="选项1"></el-option>
          </el-select>
        </label>
        <label><el-input v-model="input" placeholder="请输入手机号"></el-input></label>
        <label><el-input v-model="input" placeholder="请输入订单号"></el-input></label>
        <label><el-input v-model="input" placeholder="请输入商户号"></el-input></label>
        <label><el-input v-model="input" placeholder="请输入商交易单号"></el-input></label>
        <label><el-input v-model="input" placeholder="请输入代理商用户名"></el-input></label>
        <label>
          <el-select v-model="valueType" placeholder="请选择订单类型">
              <el-option key="选项1" label="首次充值" value="选项1"></el-option>
              <el-option key="选项2" label="续费" value="选项2"></el-option>
              <el-option key="选项3" label="接口首次" value="选项3"></el-option>
              <el-option key="选项4" label="接口续费" value="选项4"></el-option>
              <el-option key="选项5" label="批量充值" value="选项5"></el-option>
          </el-select>
        </label>
        <label>
          <el-select v-model="valueType" placeholder="请选择订单状态">
              <el-option key="选项1" label="已支付" value="选项1"></el-option>
              <el-option key="选项2" label="未支付" value="选项2"></el-option>
              <el-option key="选项3" label="线上退款" value="选项3"></el-option>
              <el-option key="选项4" label="线下退款" value="选项4"></el-option>
              <el-option key="选项5" label="互电退款" value="选项5"></el-option>
          </el-select>
        </label>
        <label>
          <el-select v-model="valueType" placeholder="请选择时间类型">
              <el-option key="选项1" label="订单时间" value="选项1"></el-option>
              <el-option key="选项2" label="退款时间" value="选项2"></el-option>
          </el-select>
        </label>
        <label style="width: 398px">
          <el-date-picker
            v-model="selectDate"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </label>
        <label style="width: 290px;">
          <el-button type="success" icon="el-icon-search">查询</el-button>
          <el-button type="success">重置</el-button>
          <el-button type="success">导出数据</el-button>
        </label>
      </div>
      <div class="primary-info">
        <span class="el-icon-warning" style="color: #2eb4a3"></span>
        <span style="color: #666">
          订单金额 
          <font color="#74d1c8">--</font> 元
          收益金额
          <font color="#74d1c8">--</font> 元 
          退款金额
          <font color="#74d1c8">--</font> 元 
          <font color="#4295ed" style="cursor: pointer;">计算</font>
        </span>
      </div>
      <!-- 表格 -->
      <div class="table-box">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="orderNumber"
            width="100px"
            label="订单号">
          </el-table-column>
          <el-table-column
            fixed
            prop="name"
            width="100px"
            label="客户">
          </el-table-column>
          <el-table-column
            fixed
            prop="iccid"
            width="200px"
            label="ICCID">
          </el-table-column>
          <el-table-column
            prop="sim"
            width="200px"
            label="SIM">
          </el-table-column>
          <el-table-column
            prop="cardProperties"
            width="100px"
            label="卡属性">
          </el-table-column>
          <el-table-column
            prop="iphone"
            width="100px"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="channel"
            width="100px"
            label="通道">
          </el-table-column>
          <el-table-column
            prop="package"
            width="100px"
            label="套餐">
          </el-table-column>
          <el-table-column
            prop="orderType"
            width="100px"
            label="订单类型">
          </el-table-column>
          <el-table-column
            prop="topUpType"
            width="100px"
            label="充值类型">
          </el-table-column>
          <el-table-column
            prop="orderAmount"
            width="100px"
            label="订单金额">
          </el-table-column>
          <el-table-column
            prop="commission"
            width="100px"
            label="佣金">
          </el-table-column>
          <el-table-column
            prop="takeType"
            width="100px"
            label="生效类型">
          </el-table-column>
          <el-table-column
            prop="merchantsNum"
            width="150px"
            label="商户号">
          </el-table-column>
          <el-table-column
            prop="merchantsOrder"
            width="150px"
            label="商户单号">
          </el-table-column>
          <el-table-column
            prop="tradingOrder"
            width="150px"
            label="交易单号">
          </el-table-column>

          <el-table-column
            prop="orderStatus"
            width="100px"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="refundOperator"
            width="100px"
            label="退款操作人">
          </el-table-column>
          <el-table-column
            prop=""
            width="200px"
            label="退款操作时间">
          </el-table-column>
          <el-table-column
            prop="note"
            width="200px"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="deteTime"
            width="200px"
            label="时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="120px"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
        style="text-align: right;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
          iccidNum: '',
          input: '',
          valueType: '',
          selectDate: '',
          currentPage: 4,
          tableData: [
            {
              orderNumber: '6654564564',
              name: '王小虎',
              iccid: '89860619050022324718',
              sim: '861064652402157',
              cardProperties: '流量卡',
              iphone: '18723568562',
              channel: '联通+联通',
              package: '月月',
              orderType: '续费',
              topUpType: '余额充值',
              orderAmount: '20.00',
              commission: '0.2',
              takeType: '当月生效',
              merchantsNum: '10000022000',
              merchantsOrder: '5112116516516',
              tradingOrder: '211651616156',
              orderStatus: '线上退款',
              refundOperator: 'admin2',
              refundTime: '2020-09-02 21:43:53',
              note: '需核实上游退款',
              deteTime: '2020-09-02 21:43:53'
            },
            {
              orderNumber: '6654564564',
              name: '王小虎',
              iccid: '89860619050022324718',
              sim: '861064652402157',
              cardProperties: '流量卡',
              iphone: '18723568562',
              channel: '联通+联通',
              package: '月月',
              orderType: '续费',
              topUpType: '余额充值',
              orderAmount: '20.00',
              commission: '0.2',
              takeType: '当月生效',
              merchantsNum: '10000022000',
              merchantsOrder: '5112116516516',
              tradingOrder: '211651616156',
              orderStatus: '线上退款',
              refundOperator: 'admin2',
              refundTime: '2020-09-02 21:43:53',
              note: '需核实上游退款',
              deteTime: '2020-09-02 21:43:53'
            },
            {
              orderNumber: '6654564564',
              name: '王小虎',
              iccid: '89860619050022324718',
              sim: '861064652402157',
              cardProperties: '流量卡',
              iphone: '18723568562',
              channel: '联通+联通',
              package: '月月',
              orderType: '续费',
              topUpType: '余额充值',
              orderAmount: '20.00',
              commission: '0.2',
              takeType: '当月生效',
              merchantsNum: '10000022000',
              merchantsOrder: '5112116516516',
              tradingOrder: '211651616156',
              orderStatus: '线上退款',
              refundOperator: 'admin2',
              refundTime: '2020-09-02 21:43:53',
              note: '需核实上游退款',
              deteTime: '2020-09-02 21:43:53'
            },
            {
              orderNumber: '6654564564',
              name: '王小虎',
              iccid: '89860619050022324718',
              sim: '861064652402157',
              cardProperties: '流量卡',
              iphone: '18723568562',
              channel: '联通+联通',
              package: '月月',
              orderType: '续费',
              topUpType: '余额充值',
              orderAmount: '20.00',
              commission: '0.2',
              takeType: '当月生效',
              merchantsNum: '10000022000',
              merchantsOrder: '5112116516516',
              tradingOrder: '211651616156',
              orderStatus: '线上退款',
              refundOperator: 'admin2',
              refundTime: '2020-09-02 21:43:53',
              note: '需核实上游退款',
              deteTime: '2020-09-02 21:43:53'
            }
          ]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>

<style lang="scss" scoped>
.container{
  padding: 15px;
}
.total-revenue{
    height: 140px;
    border-radius: 0px;
    display: flex;
    justify-content: space-between;
}

.total-revenue .total-box {
    width: 24%;
    height: 55px;
    border-radius: 2px;
    padding: 35px 0;
    color: #fff;
}

/* 建设背景图 */
.total-revenue .total-box:nth-child(1) {
    background: #2e9bd3;
}

.total-revenue .total-box:nth-child(2) {
    background: #986598
}

.total-revenue .total-box:nth-child(3) {
    background: #d76571
}
.total-revenue .total-box:nth-child(4) {
    background: #30bd9c
}

.total-revenue .total-box .son {
    width: 100%;
    text-align: center;
}
.total-revenue .total-box .son .title{
  font-size: 18px;
}
.total-revenue .total-box .son .price{
  margin-top: 10px;
}
.total-revenue .total-box .son .price em{
  font-size: 28px;
}
.screening{
  display: flex;
  flex-wrap: wrap;
}
.screening label{
  width: 190px;
  margin-right: 15px;
  margin-top: 15px;
}
.primary-info {
    display: inline-block;
    border: 1px #74d1c8 solid;
    width: calc( 100% - 10px);
    border-radius: 4px;
    background-color: #e8f7f6;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    font-size: 14px;
    margin-top: 15px;
}
.table-box{
  margin-top: 15px;
}
.table-box /deep/ .el-table th.is-leaf{
  font-weight: 600;
  color: #333;
}
.table-box /deep/ .el-table td, .table-box /deep/ .el-table th.is-leaf{
  text-align: center !important;
}
</style>