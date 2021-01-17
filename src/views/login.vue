<template>
  <div class="login">
    <div class="container">
      <img src="../assets/toppic.jpg" alt="" class="avatar">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="myicon myicon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="密码"  prefix-icon="myicon myicon-key"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click='login'>登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'zhanlifei123',
        password: 'fei180123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login () {
      // 数据的验证
      this.$refs.loginForm.validate((valid) => {
        if (valid && this.loginForm.username =='zhanlifei123' && this.loginForm.password =='fei180123') {
            localStorage.setItem('zhanlifeiAdmin', 'avsavavvasdsbbiuvbsvbaiubuibqivbbaoblvizhblid')
            // 进行路由跳转
            this.$router.push({ name: 'welcome' })
        } else {
          this.$message({
            message: '账户名或者密码错误',
            type: 'error'
          })
          // 只有return false才能阻止请求
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: #203347;
    animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -78px;
      margin-bottom: 20px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
/deep/ .el-input__inner {
    color: #fff;
    height: 50px;
    background-color: #283443;
    border: 1px solid #3e4957;
}


@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}


</style>
