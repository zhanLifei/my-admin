<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <el-menu
          :collapse="iscollapse"
          :router="true"
          :unique-opened="true"
          :default-active="'1-3'"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#399eff"
        >
          <el-submenu v-for="(item) in navList" :key="item.id" :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span @click="item.children.length>0 ? 'navClick(item)' : '' ">{{item.name}}</span>
            </template>
            <el-menu-item v-for="(child) in item.children" :key="child.cid" :index="child.path">
              <template slot="title">
                <span @click="navClick(child)">{{child.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span @click="iscollapse = !iscollapse">
            <i v-if="!iscollapse" class="el-icon-d-arrow-left" style="color:#304156"></i>
            <i v-if="iscollapse" class="el-icon-d-arrow-right" style="color:#304156"></i>
          </span>
          <div class="welcome">
            <img src="../assets/toppic.jpg" alt="">
            <el-dropdown>
              <span class="el-dropdown-link">
                湛礼飞<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item style="text-align: center">修改密码 </el-dropdown-item>
                <el-dropdown-item style="text-align: center" @click.native="nextClick">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown></div>
          </el-header>
          <div class="effect pd15 pdl20">
            <span class="pd5 pdlr15 mgr15" :style="item.active" style="color: #fff;font-size:12px" v-for="(item,index) in list" :key="index">{{item.title}} <i class="mgl10">●</i></span>
          </div>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
import base from '../ulit/base';
export default {
  mixins:[base],
  data(){
    return {
      
      list: [
        {
          id: '1',
          title: '我的导航',
          active: 'background: #4292cf;',
        }
      ]
    }
  },
  methods: {
    nextClick() {
      // 清除token值并重定向login
      localStorage.removeItem("zhanlifeiAdmin");
      this.$router.push({ path: "/login" });
    },
    navClick(obj){
      this.list.map((item)=>{
        item.active = 'background: #ccc;'
      })
      this.list.push({id: obj.id,title:obj.name,active: 'background: #4292cf;'})
    }
  },
  mounted(){
     var token = localStorage.getItem("zhanlifeiAdmin");
    if(!token) {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu {
    width: auto;
    height: 100%;
    border: none;
  }
  // 如果是展开状态,那么宽度就是200px,如果是合并状态,宽度:auto
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-header {
    height: 50px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 2px solid #f4f5f6;
  }
  /deep/ .el-submenu__title *{
    vertical-align: baseline;
  }
  /deep/ .el-main{
    padding: 0;
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    font-size: 14px;
    height: 30px;
    vertical-align: middle;
    img{
      width: 30px;
      height: 100%;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
.active{
  
}
</style>
