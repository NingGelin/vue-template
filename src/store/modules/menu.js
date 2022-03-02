const menu = {
  // 全局state对象, 用于保存所有组件的公共数据
  state: localStorage.getItem('menu') ? JSON.parse(localStorage.getItem('menu')) : {
    menu: {
      // 当前菜单栏名称
      currentMenuName: "首页",
      // 当前tab name
      editableTabsValue: "首页",
      editableTabs: [
        {
          // 显示在页面上的名称
          title: '首页',
          // name必须唯一
          name: '首页',
          // 跳转链接
          link: '/',
        }
      ]
    }
  },

  // 监听state对象值的最新状态(计算属性)
  getters: {
    getMenu(state) {
      return state.menu;
    }
  },

  // 唯一一个可以修改state值得方法(同步执行)
  mutations: {
    updateMenu(state, menu) {
      state.menu = menu;
    }
  },

  // 异步执行mutations方法
  actions: {
    asyncUpdateMenu(context, menu) {
      context.commit("updateMenu", menu)
    }
  }
}

export default menu;
