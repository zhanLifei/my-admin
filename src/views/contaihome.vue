<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <el-menu
          :collapse="iscollapse"
          :unique-opened="true"
          :default-active="active"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#399eff"
        >
          <el-submenu v-for="(item) in navList" :key="item.id" :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="(child) in item.children" :key="child.cid" :index="child.cid" @click="selectPath(child.path)">
              <template slot="title">
                <i class="el-icon-ice-cream-round"></i>
                <span>{{child.name}}</span>
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
                <el-dropdown-item style="text-align: center" @click.native="dialogFormVisible = true">修改密码 </el-dropdown-item>
                <el-dropdown-item style="text-align: center" @click.native="nextClick">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown></div>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

      <!-- 修改密码弹窗 -->
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="resetForm">
          <el-form-item label="旧密码：" prop="oldPassword" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.oldPassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码：" prop="newPassword" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.newPassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="newpassword1" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.newpassword1" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click.native.prevent="savePassword">确认修改</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>
<script>
import base from '../ulit/base';
import { userPasswordEdit } from '@/api/user'
export default {
  mixins:[base],
  data(){
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入新密码"));
      } else if (value.toString().length < 6 || value.toString().length > 18) {
        callback(new Error("密码长度为6-18位"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogFormVisible: false,
      formLabelWidth: '94px',
      form: {
          oldPassword: '',
          newPassword: '',
          newPassword1: ''
      },
      rules: {
          oldPassword: [
            { required: true, message: "请输入旧密码", trigger: 'blur' }
          ],  
          newPassword: [
              { required: true, validator: validatePass, trigger: 'blur' }
          ],
          newpassword1: [
            { required: true, validator: validatePass2, trigger: "blur" }
          ]
      }
    }
  },
  methods: {
    nextClick() {
      // 清除token值并重定向login
      localStorage.removeItem("zhanlifeiAdmin");
      this.$router.push({ path: "/login" });
    },
    selectPath(path){
      console.log(path)
      this.$router.push({ path: "/" + path});
    },
    // 保存修改密码
    savePassword(){
      this.$refs.resetForm.validate(valid => {
        console.log(valid)
        if (valid) {
        //这里的api.materialQuery.toAmend是调用前期我们统一的api接口url路径，不作参考 ，只要把后台需要的字段正常传进去即可 
          userPasswordEdit()
          .then((res) => {
              console.log(res)
              if(res.data.code === 2){
                this.$message({
                    message: res.msg,
                    type: "error",
                    duration: "2000"
                  });
                return false;
              }
              if (res.data.code === 200) {
                this.$message.success("修改成功,3秒后跳转到登录页！");
                setTimeout(() => {
                  //  this.logout();//调用跳转到登陆页的方法
                }, 3000);
              }
              ic
            }).catch(() => {});
        }
      });
    },
    //这是修改成功后重新返回登陆页的方法，看个人需要自行调整
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login`);
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
</style>
