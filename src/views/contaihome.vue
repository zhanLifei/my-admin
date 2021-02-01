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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-share"></i>
              <span>功能组件</span>
            </template>
            <el-menu-item index="myBookmark">
              <template slot="title">
                <span>拖拽窗口</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>封装的组件</span>
            </template>
            <el-menu-item index="packaging">
              <template slot="title">
                <span>组件元件</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>jsonView</span>
            </template>
            <el-menu-item index="jsonView">
              <template slot="title">
                <span>jsonView</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>常用功能</span>
            </template>
            <el-menu-item index="video">
              <template slot="title">
                <span>video视频</span>
              </template>
            </el-menu-item>
            <el-menu-item index="swiper">
              <template slot="title">
                <span>swiper轮播</span>
              </template>
            </el-menu-item>
            <el-menu-item index="v-chart">
              <template slot="title">
                <span>图表</span>
              </template>
            </el-menu-item>
            <el-menu-item index="canvas">
              <template slot="title">
                <span>canvas</span>
              </template>
            </el-menu-item>
            <el-menu-item index="iframeDiv">
              <template slot="title">
                <span>iframeDiv</span>
              </template>
            </el-menu-item>
            <el-menu-item index="table">
              <template slot="title">
                <span>table假分页</span>
              </template>
            </el-menu-item>
            <el-menu-item index="tab">
              <template slot="title">
                <span>tab栏</span>
              </template>
            </el-menu-item>
            <el-menu-item index="tree">
              <template slot="title">
                <span>tree</span>
              </template>
            </el-menu-item>
            <el-menu-item index="render">
              <template slot="title">
                <span>render表格组件</span>
              </template>
            </el-menu-item>
            <el-menu-item index="images">
              <template slot="title">
                <span>上传图片</span>
              </template>
            </el-menu-item>
            <el-menu-item index="vueCropper">
              <template slot="title">
                <span>图片裁剪</span>
              </template>
            </el-menu-item>
            <el-menu-item index="quest">
              <template slot="title">
                <span>模板问卷</span>
              </template>
            </el-menu-item>
            <!-- <el-menu-item index="dragend">
              <template slot="title">
                <span>拖拽排序</span>
              </template>
            </el-menu-item>
            <el-menu-item index="map">
              <template slot="title">
                <span>map遍历</span>
              </template>
            </el-menu-item> -->
          </el-submenu>
          <!-- css3 -->
          <!-- <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>css3特效</span>
            </template>
            <el-menu-item index="css手机充电特效">
              <template slot="title">
                <span>css手机充电特效</span>
              </template>
            </el-menu-item>
            <el-menu-item index="css手机充电特效1">
              <template slot="title">
                <span>css手机充电特效1</span>
              </template>
            </el-menu-item>
            <el-menu-item index="css手机充电特效2">
              <template slot="title">
                <span>css手机充电特效2</span>
              </template>
            </el-menu-item>
            <el-menu-item index="css3照片特效">
              <template slot="title">
                <span>css3照片特效</span>
              </template>
            </el-menu-item> -->
            <!-- <el-menu-item index="switch">
              <template slot="title">
                <span>switch</span>
              </template>
            </el-menu-item>
          </el-submenu> -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>vuex的使用</span>
            </template>
            <el-menu-item index="state">
              <template slot="title">
                <span>state的使用</span>
              </template>
            </el-menu-item>
            <el-menu-item index="getter">
              <template slot="title">
                <span>getter的使用</span>
              </template>
            </el-menu-item>
            <el-menu-item index="mutation">
              <template slot="title">
                <span>mutation的使用</span>
              </template>
            </el-menu-item>
            <el-menu-item index="action">
              <template slot="title">
                <span>action的使用</span>
              </template>
            </el-menu-item>
            <el-menu-item index="module">
              <template slot="title">
                <span>module的使用</span>
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
          <span class="system-title">111</span>
          <span class="welcome" @click="nextClick">退出</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iscollapse: false
    };
  },
  methods: {
    nextClick() {
      // 清除token值并重定向login
      localStorage.removeItem("zhanlifeiAdmin");
      this.$router.push({ path: "/login" });
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
  }
  // 如果是展开状态,那么宽度就是200px,如果是合并状态,宽度:auto
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #304156;
  }
  .el-header {
    height: 50px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 2px solid #f4f5f6;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: #fff;
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
    color: #304156;
  }
}
</style>
