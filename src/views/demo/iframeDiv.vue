<template>
  <div>
      <div class="headerTop">
          <div class="search">
            <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="onClickBtn"></el-button>
            </el-input>
          </div>
          <span class="myadmin" @click="myAdemin">我的后台</span>
      </div>
    <iframe :src="`https://www.baidu.com/s?wd=${value}`" frameborder=no scrolling=yes width='100%' style="height:100vh;position:fixed; z-index: 1;top: -32px;"></iframe>
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
    methods: {
        onClickBtn(){
            this.value = this.inputText
        },
        myAdemin(){
            this.$router.push({ name: 'contaihome' })
        },
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
    .myadmin{
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        cursor: pointer;
    }
}
</style>