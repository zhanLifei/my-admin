<template>
  <div class="wappess">
      <div class="effect resources">
        <h2 class="title">深圳地铁成本大数据管理平台</h2>
        <div class="ant-page-header-content">
          <div class="text">建设成本管理 ✨</div>
        </div>
        <div class="extraImg"><img alt="图片" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"></div>
      </div>
      <div class="container">
        <div class="effect pd20">
          <div class="search">
            <div class="transparent-search">
              <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
          <!-- 分类筛选 -->
          <screen-page :screenList='screenList' @screeningToggleQuote='screeningToggleQuote'></screen-page>
        </div>
      </div>
      <div class="container">
        <div class="effect item-box pd15">
          <el-button plain size='small' icon='el-icon-circle-plus-outline'>设置典型工程</el-button>
          <el-button plain size='small' icon='el-icon-remove-outline'>取消典型工程</el-button>
          <el-button plain size='small' icon='el-icon-download'>导出台账</el-button>
          <el-button plain size='small' icon='el-icon-paperclip'>费用完整</el-button>
          <el-button plain size='small' icon='el-icon-view'>项目体检</el-button>
          <el-button style="float: right" plain size='small' icon='el-icon-setting'>设置展示字段</el-button>
          <el-checkbox style="float: right;margin-top:6px;margin-left: 15px" v-model="checked1">同步实施费</el-checkbox>
          <el-checkbox style="float: right;margin-top:6px" v-model="checked2">典型工程</el-checkbox>
          <render-table
            :selection='true'
            :loading='loading'
            :columns="columnsData"
            :tableData="newDataList[pageParams.currentPage-1]"
            :page="pageParams"
            @page-update="pageUpdate"
            @size-update="sizeUpdate">
          </render-table>
        </div>
      </div>
  </div>
</template>

<script>
import renderTable from "@/components/renderTable";
import screenPage from "@/components/screenPage";
import { dataList } from '@/api/dataList'
import { screenList } from '@/api/screenList'
export default {
  components: { renderTable, screenPage },
  data() {
    return {
      newDataList: [],
      screenList: [],
      loading: false,
      checked1: true,
      checked2: false,
      pageParams: {
        total: 10,
        pageSize: 5, //每页多少条数据
        currentPage: 1, //当前第几页
      },
      columnsData: [
        {
          label: "建设名称",
          prop: "buildingName",
          width: 100,
          render: (h, props) => {
            return h(
              "a",
              {
                style: {
                  color: '#ff9600',
                  cursor: 'pointer',
                },
                on: {
                  click: () => {
                    this.onClick(props.row);
                  }
                },
              },
              props.row.buildingName
            );
          },
        },
        {
          label: "总线路长度(正线公里)",
          width:98,
          align:'center',
          prop: "lineLength"
        },
        {
          label: "平均站间距(km)",
          width:98,
          align:'center',
          prop: "avgDistance"
        },
        {
          label: "总建设规模(亿元)",
          width:98,
          align:'center',
          prop: "total"
        },
        {
          label: "线路指标(亿元/正线公里)",
          width:106,
          align:'center',
          prop: "lineIndex"
        },
        {
          label: "编制范围",
          align:'center',
          prop: "preparationScope",
          render: (h, props) => {
            return h("span", {class:'textOverflow',attrs: {title:props.row.preparationScope}}, props.row.preparationScope);
          },
        },
        {
          label: "阶段",
          align:'center',
          prop: "renderPhase"
        },
        {
          label: "地区",
          align:'center',
          prop: "area",
          render: (h, props) => {
            return h("span", {class:'textOverflow',attrs: {title:props.row.area}}, props.row.area);
          },
        },
        {
          label: "版本类型",
          align:'center',
          prop: "versionName"
        },
        {
          label: "编制时间",
          align:'center',
          prop: "preparationTime"
        }
      ],
      dataList: [],
    };
  },
  computed: {
    
  },
  methods: {
    // 筛选
    screeningToggleQuote(obj, arr){
      let dataList = this.dataList.filter(item=>{
        if(arr.includes(item.area) || arr.includes(item.buildingName) || arr.includes(item.renderPhase)) {
          return item
        }
      })
      this.loading = true;
      setTimeout(() => {
        if(arr.length == 0){
          this.initPage(this.dataList);
        } else {
          this.initPage(dataList);
        }
        this.loading = false;
      }, 1000);
      
    },
    handleChange(value) {
      console.log(value);
    },
    
    tagsBtnClick(index){
      this.active = index
    },
    pageUpdate(val){
      this.pageParams.currentPage = val;
      this.initPage(this.dataList);
    },
    sizeUpdate(val){
      this.pageParams.pageSize = val;
      this.initPage(this.dataList);
    },
    // 分页
    initPage(list) {
      this.pageParams.total = list.length;
      let arr = [];
      let newArr = [];
      list.map((item, index) => {
        arr.push(item);
        if ((index + 1) % this.pageParams.pageSize == 0) {
          newArr.push(arr);
          arr = [];
        } else {
          if (index + 1 == list.length) {
            newArr.push(arr);
          }
        }
      });
      this.newDataList = newArr;
    }
  },
  mounted(){
    // 表格接口
    dataList().then((res) => {
      this.loading = true;
        setTimeout(() => {
          this.dataList = res.data.data;
          this.initPage(this.dataList)
          this.loading = false;
        }, 1000);
      
    })
    // 筛选接口
    screenList().then((res) => {
        this.screenList = res.data.data
    })
  }
};
</script>

<style lang="scss" scoped>
.wappess{
  padding-bottom: 1px;
  .resources{
    width: 100%;
    height: 133px;
    padding: 20px;
    position: relative;
    .title{
      margin-right: 12px;
      margin-bottom: 0;
      color: rgba(0,0,0,.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ant-page-header-content{
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      .text{
        font-size: 14px;
      }
    }
    .extraImg{
      width: 150px;
      position: absolute;
      right: 50px;
      top: 16px;
      img{
        width: 100%;
      }
    }
  }
  // 搜索
  .search{
    width: 350px;
    
    .transparent-search{
        /deep/ .el-input__inner{border: 1px solid #F3F3F3;color: #333;height: 32px;}
        /deep/ .el-input-group__append{
          height: 31px;
          padding: 0 10px;
          background: #ff9600;
          border: 1px solid #F3F3F3;
          color: #fff;
          border-left: none;
      }
    }
  }
  .container .item-box{
    width: 100%;
  }

  /deep/ .el-table-column--selection .cell{
    padding-right: 10px;
  }
}
</style>