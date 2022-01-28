import axios from "axios";
import {Message} from 'element-ui';
import router from "../router"
import store from "../store"
import Nprogress from "nprogress";

axios.interceptors.request.use(request => {
  let user = store.getters.getUser
  //console.log("user: " + JSON.stringify(user))
  if (user)
  {
    if (user.token !== "") {
      request.headers = {"Authorization": "Bearer " + user.token}
    }
  }
  Nprogress.start();
  return request;
})

// 响应拦截器
axios.interceptors.response.use(success => {
  //console.log(success);
  Nprogress.done();
  // 业务逻辑错误
  if (success.status && success.status === 200) {
    if (success.data.code === 0) {
      // 成功返回data
      //Message.success({message: success.data.message});
      return success.data;
    } else if (success.data.code === 401 || success.data.code === 403) {
      // 未授权跳转到登录页面
      Message.warning({message: "登录已过期，请重新登录！"});
      localStorage.clear();
      router.push("/login")
      return Promise.reject(new Error(success.data.message || "Error"))
    } else {
      Message.error({message: success.data.message});
      return Promise.reject(new Error(success.data.message || "Error"))
    }
  }
  },
  error => {
    if (error.status === 502)
    {
      Message.error({message: "服务已挂掉或正在重启中"});
      return Promise.reject(new Error(error.message || "Error"))
    }
    Message.error({message: error.message});
    return Promise.reject(new Error(error.message || "Error"))
  }
);


//dev
//let base = "https://bplusdev.sinosun.com:31443/ironmantest"

//pro
let base = "https://bplusdev.sinosun.com:31443/ironmanplus"

// post请求
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    //url: "https://bplusdev.sinosun.com:31443/ironmantest/user/login",
    data: params
  })
}

export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  })
}

