<template>
  <div>
      <div class="headerTop">
          <div class="search">
                <el-input placeholder="请输入内容" v-model="inputValue" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="onClickBtn"></el-button>
                </el-input>
          </div>
          <span class="myadmin">我的后台</span>
      </div>
      <iframe :src="`https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=88093251_hao_pg&wd=${value}&fenlei=256&rsv_pq=be97d2bc00030c31&rsv_t=05e8hmVFms4b261n%2BspMZ1zLLDp63GjR2Ka88zq%2BBE4XPBAKiFRcWBAeYSZ2aeeiuVsQuDlg&rqlang=cn&rsv_dl=tb&rsv_enter=0&rsv_sug3=5&rsv_sug1=5&rsv_sug7=101&rsv_btype=i&prefixsug=2222&rsp=1&inputT=2868&rsv_sug4=3123`" frameborder=no scrolling=yes width='100%' height='1000'></iframe>
  </div>
</template>

<script>
export default {
    data () {
        return {
            inputValue: '',
            value: 'vue'
        }
    },
    methods:{
        onClickBtn(){
            this.value = this.inputValue
        }
    },
    created () {
        this.value = this.$route.query.p
        this.inputValue = this.$route.query.p
    }
}
</script>

<style lang='scss' scoped>
.headerTop{
    width: 100%;
    height: 68px;
    position: absolute;
    top: 0;
    z-index: 99;
    background-color: black;
    .search{
        width: 500px;
        margin: 14px 0 0 100px;
        /deep/ .el-input__inner{
            background: #fff;
            border: none;
        }
        /deep/ .el-input-group__append {
            background: #1890ff;
            border: none;
            color: #fff;
        }
    }
    .myadmin{
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
    }
}
iframe{
    position: absolute;
    top: -30px;
}
</style>