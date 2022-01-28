// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// element-ui在app之前
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios';
import Vuex from 'vuex';
import store from './store';
import router from './router'
import VueRouter from 'vue-router'
import 'nprogress/nprogress.css';

const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.use(Vuex)

// 路由跳转之前执行
router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem("isLogin");
  // 注销登录清空缓存
  if (to.path == "/logout") {
    localStorage.clear();
    // 跳转到登录页面
    next({path: "/login"});
  }
  // 如果访问登陆页面
  else if (to.path == "/login") {
    // 如果已登录跳转到登录页面
    if (isLogin != null) {
      next({path: "/"})
    }
  } else if (isLogin == null) {
    next({path: "/login"})
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
