<template>
  <div class="container">
    <div class="left">
      <div
        style="height: calc(15rem * 0.6); background-color: white; width: 100%; display: flex; align-items: center; justify-content: center">
        <img src="https://www.gin-vue-admin.com/img/logo.png" style="width: 5rem; height: 5rem">
        <span style="font-size: 2.5rem; margin-left: 8px">模版工程</span>
      </div>
      <div style="height: calc(100vh - (15rem * 0.6)); background-color: white; overflow: auto;" class="menu">

        <div class="first-menu-open" v-for="menu in menus">
          <i :class=menu.icon></i>
          <span>{{ menu.name }}</span>
        </div>

        <div class="first-menu-open">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </div>
        <div :class="firstMenuStatus" v-on:click="openMenu">
          <i class="el-icon-s-release"></i>
          <span>便捷工具</span>
          <i class="el-icon-arrow-up" style="margin-left: 25px"></i>
        </div>
        <div class="second-menu" style="display: none">
          <div>
            <i class="el-icon-s-release"></i>
            <span>版本发布</span>
          </div>
          <div>
            <i class="el-icon-s-release"></i>
            <span>代码检视</span>
          </div>
          <div>
            <i class="el-icon-s-release"></i>
            <span>测试报告</span>
          </div>
        </div>

        <div class="first-menu-open">
          <i class="el-icon-s-flag"></i>
          <span>常用软件</span>
        </div>
        <div class="first-menu-open">
          <i class="el-icon-s-shop"></i>
          <span>测试功能</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <div class="header-title">
          <div class="header-title-left">
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div style="font-size: 3rem">仪表盘</div>
          </div>
          <div class="header-title-right">
            <div
              style="margin-left: 15px; margin-right: 20px; display: flex; flex-direction: column; justify-content: center">
              <div style="height: 50%;">
                <el-dropdown>
                  <div>
                    <div style="display: flex; flex-direction: column; justify-content: center">
                      <el-avatar :size="35" src="https://qmplusimg.henrongyi.top/gva_header.jpg"></el-avatar>
                    </div>
                    <div style="width:auto; margin-left: 5px">
                  <span class="el-dropdown-link" style="font-size: 2rem">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    </div>
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>登出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div>
              <span style="font-size: 2rem">主题</span>
            </div>
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div class="icon">
              <i class="el-icon-s-unfold"></i>
            </div>
          </div>
        </div>
        <div class="header-menu"
             style="display: flex; justify-content: center; flex-direction: column; border-bottom: 1px solid #f4f4f5; border-left: 1px solid #f4f4f5">
          此处功能待实现
        </div>
      </div>
      <div class="main">
        <div style="height: 10px"></div>
        <div style="margin: 0px 10px;  background-color: white; border-radius: 5px; min-height: 80vh;">
          <router-view/>
        </div>
      </div>
      <div class="foot">
        <div>
          Powered by ninggelin
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      firstMenuStatus: 'first-menu-open',
      menus: [
        {
          name: "测试",
          icon: "el-icon-s-home",
          children: [
            {
              name: "",
              icon: ""
            }
          ]
        }
      ]
    }
  },
  methods: {
    openMenu() {

    }
  }
}
</script>

<style scoped>
@import '../style/main.css';
</style>

