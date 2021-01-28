<template>
  <div class="wappess">
    <div class="baidu-box">
      <img src="../assets/baidu.png" alt="">
    </div>
    <div class="search">
      <div>
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="content">
        <div class="item">
          <img src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/6829dfa6c9b4714a6456796fd887c870_fullsize.jpg" alt="">
          <div class="title">百度一下</div>
        </div>
        <div class="item">
          <img src="https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=31257802,2647597666&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=b9d57536e3fcc6611daef043173bb298" alt="">
          <div class="title">掘金</div>
        </div>
        <div class="item">
          <img src="https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3857852323,2310389347&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=4e8d7d9ecd6e640fe939a95ce4f8f029" alt="">
          <div class="title">知乎</div>
        </div>
        <div class="item">
          <img src="http://pic.51yuansu.com/pic3/cover/03/44/05/5ba252440d02d_610.jpg!/fw/260/quality/90/unsharp/true/compress/true" alt="">
          <div class="title">哔哩哔哩</div>
        </div>
        <div class="item">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1866778045,325297268&fm=26&gp=0.jpg" alt="">
          <div class="title">GutHub</div>
        </div>
        <div class="item">
          <img src="https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2601442671,1921184035&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=67922ee570b389cdd0a3c56dc0ad3bba" alt="">
          <div class="title">CSDN</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  
};
</script>

<style lang="scss" scoped>
.wappess{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .8);
  padding-top: 100px;
}
.baidu-box{
  width: 100%;
  height: 137.59px;
  position: relative;
  img{
    width: 288px;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -144px;
  }
}
.search{
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  /deep/ .el-input__inner,/deep/ .el-input-group__append{
    background: transparent;
    box-shadow: 0px 0px 10px #fff inset;
    border: 1px solid #fff;
  }
  .content{
    background: rgba(0,0,0, .1);
    padding: 20px 15px;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      font-size: 14px;
    }
    img{
      width: 40%;
      height: 100%;
      border-radius: 8px;
      margin: 10px 0;
    }
    .title{
      margin-bottom: 10px;
    }
  }
}


</style>