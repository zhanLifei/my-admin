<template>
  <div>
      <div class="headerTop">
          <div class="search">
            <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="btnSave"></el-button>
            </el-input>
          </div>
      </div>
    <iframe key="1" style="border: none;width: 100%;height: 100vh;position: fixed;top: -32px;z-index: 1;" width="100%" height="800px" v-once :src="`https://www.baidu.com/s?wd=${value}&rsv_spt=1&rsv_iqid=0x880626eb00138abb&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=15&rsv_sug1=15&rsv_sug7=100&rsv_t=1eb1OeuUvaLAUAQxJIs8wZRvEYDBs4SDA6u5a9zHF5h8QYKVcPubg5UJBr2bERempbSb&rsv_n=2&rsv_sug2=0&rsv_btype=i&inputT=15240&rsv_sug4=16213`" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    data(){
        return{
            inputText: '',
            value: ''
        }
    },
    created(){
        this.value = this.$route.query.value
        this.inputText = this.$route.query.value
    }
}
</script>

<style lang="scss" scoped>
.headerTop{
    width: 100%;
    height: 64px;
    background: #021528;
    position: fixed;
    top: 0;
    z-index: 99;
    .search{
        width: 500px;
        margin-top: 12px;
        margin-left: 100px;
        /deep/ .el-input__inner{
            background: #fff;
            border: none;
        }
        /deep/ .el-input-group__append {
            background: #3290fc;
            color: #fff;
            border: none;
        }
    }
}
</style>