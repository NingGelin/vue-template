<template>
  <div id="userLayout">
    <div class="login_panel">
      <div class="login_panel_form">
        <div class="login_panel_form_title">
          <img
            class="login_panel_form_title_logo"
            src="https://www.gin-vue-admin.com/img/logo.png"
            alt
          >
          <p class="login_panel_form_title_p">模版工程</p>
        </div>
        <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-box" @keydown.enter.native="submitForm('loginForm')">
          <el-form-item label="账号" prop="username">
            <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码"  v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" style="width: 100%; margin-top: 3%">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login_panel_right"> </div>
    </div>
  </div>
</template>

<script>
import {postRequest} from "../config/api";

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          postRequest("/user/login", this.loginForm).then(data => {
            // 设置缓存
            localStorage.setItem('isLogin', 'true')
            this.$store.dispatch("asyncUpdateUser", {username: this.loginForm.username, name: data.result.name, token: data.result.token})
            this.$router.push({name: 'Main'});
          })
        } else {
          // this.$message({
          //   message: '用户名或密码错误',
          //   type: 'warning'
          // })
          return false;
        }
      });
    },
  }
}
</script>

<style>
#userLayout {
  background-image: url("~@/assets/login_background.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.login_panel {
  position: absolute;
  top: 3vh;
  left: 2vw;
  width: 96vw;
  height: 94vh;
  background-color: rgba(255, 255, 255, .8);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.login_panel_right {
  background-image: url("~@/assets/login_right.svg");
  background-size: cover;
  width: 40%;
  height: 60%;
  float: right !important;
}

.login_panel_form {
  width: 420px;
  background-color: #fff;
  padding: 40px 40px 40px 40px;
  border-radius: 10px;
  box-shadow: 2px 3px 7px rgba(0, 0, 0, .2);
}

.login_panel_form_title {
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: center;
}

.login_panel_form_title_logo {
  width: 90px;
  height: 72px;
}

.login_panel_form_title_p {
  font-size: 40px;
  padding-left: 20px;
  margin: 0;
}
</style>
