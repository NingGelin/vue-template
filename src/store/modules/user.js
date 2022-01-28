const user = {
  // 全局state对象, 用于保存所有组件的公共数据
  state: localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {
    user: {
      username: '',
      name: '',
      token: ''
    }
  },

  // 监听state对象值的最新状态(计算属性)
  getters: {
    getUser(state) {
      return state.user;
    }
  },

  // 唯一一个可以修改state值得方法(同步执行)
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },

  // 异步执行mutations方法
  actions: {
    asyncUpdateUser(context, user) {
      context.commit("updateUser", user)
    }
  }
}

export default user;
