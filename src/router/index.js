import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Main from "../components/Main";
import Index from "../components/Index"
import Demo from "../components/Demo"
import Demo11 from "../components/Demo11"
import Demo12 from "../components/Demo12"
import Demo13 from "../components/Demo13"
import Demo21 from "../components/Demo21"
import Demo22 from "../components/Demo22"
import Demo23 from "../components/Demo23"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/demo',
          name: 'Demo',
          component: Demo
        },
        {
          path: '/demo11',
          name: 'Demo',
          component: Demo11
        },
        {
          path: '/demo12',
          name: 'Demo',
          component: Demo12
        },
        {
          path: '/demo13',
          name: 'Demo',
          component: Demo13
        },
        {
          path: '/demo21',
          name: 'Demo',
          component: Demo21
        },
        {
          path: '/demo22',
          name: 'Demo',
          component: Demo22
        },
        {
          path: '/demo23',
          name: 'Demo',
          component: Demo23
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
